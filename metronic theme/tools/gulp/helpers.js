'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var rewrite = require('gulp-rewrite-css');
var concat = require('gulp-concat');
var lazypipe = require('lazypipe');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify-es').default;
var cleancss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var build = require('./build');
var path = require('path');
var gutil = require('gulp-util');
var fs = require('fs');
var filter = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var rtlcss = require('gulp-rtlcss');

// merge with default parameters
var args = Object.assign({'prod': false}, gutil.env);

if (args.prod !== false) {
	// force disable debug for production
	build.config.debug = false;
	build.config.compile.jsUglify = true;
	build.config.compile.cssMinify = true;
}

module.exports = {

	// default variable config
	config: Object.assign({}, {
		demo: '',
		debug: true,
		compile: {
			jsUglify: false,
			cssMinify: false,
			jsSourcemaps: false,
			cssSourcemaps: false,
		},
	}, build.config),

	rootPath: './../',

	demoPath: 'src/js/demo',

	includePaths: ['src/sass/framework', 'src/sass/framework/vendors/bootstrap'],

	/**
	 * Walk into object recursively
	 * @param array
	 * @param funcname
	 * @param userdata
	 * @returns {boolean}
	 */
	objectWalkRecursive: function (array, funcname, userdata) {
		if (!array || typeof array !== 'object') {
			return false;
		}
		if (typeof funcname !== 'function') {
			return false;
		}
		for (var key in array) {
			// apply "funcname" recursively only on object
			if (Object.prototype.toString.call(array[key]) === '[object Object]') {
				var funcArgs = [array[key], funcname];
				if (arguments.length > 2) {
					funcArgs.push(userdata);
				}
				if (module.exports.objectWalkRecursive.apply(null, funcArgs) === false) {
					return false;
				}
				// continue
			}
			try {
				if (arguments.length > 2) {
					funcname(array[key], key, userdata);
				} else {
					funcname(array[key], key);
				}
			} catch (e) {
				return false;
			}
		}
		return true;
	},

	/**
	 * Add JS compilation options to gulp pipe
	 */
	jsChannel: function () {
		var config = this.config.compile;
		return lazypipe().pipe(function () {
			return gulpif(config.jsSourcemaps, sourcemaps.init({loadMaps: true, debug: config.debug}));
		}).pipe(function () {
			return gulpif(config.jsUglify, uglify());
		}).pipe(function () {
			return gulpif(config.jsSourcemaps, sourcemaps.write('./'));
		});
	},

	/**
	 * Add CSS compilation options to gulp pipe
	 */
	cssChannel: function () {
		var config = this.config.compile;
		var includePaths = module.exports.includePaths.map(function (path) {
			return module.exports.rootPath + path;
		});
		return lazypipe().pipe(function () {
			return gulpif(config.cssSourcemaps, sourcemaps.init({loadMaps: true, debug: config.debug}));
		}).pipe(function () {
			return sass({
				errLogToConsole: true,
				includePaths: includePaths,
			}).on('error', sass.logError);
		}).pipe(function () {
			return gulpif(config.cssMinify, cleancss({debug: config.debug}));
		}).pipe(function () {
			return gulpif(true, autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}));
		}).pipe(function () {
			return gulpif(config.cssSourcemaps, sourcemaps.write('./'));
		});
	},

	/**
	 * Multiple output paths by output config
	 * @param path
	 * @param outputFile
	 * @returns {*}
	 */
	outputChannel: function (path, outputFile) {
		if (typeof outputFile === 'undefined') outputFile = '';
		var piping = lazypipe();

		var excludedFiles = [];
		var regex = new RegExp(/\{\$.*?\}/);
		var matched = path.match(regex);
		if (matched) {
			var outputs = build.config.dist;
			outputs.forEach(function (output) {
				if (output.indexOf('/**/') !== -1) {
					module.exports.getDemos().forEach(function (demo) {
						var outputPath = path.replace(matched[0], output.replace('**', demo)).replace(outputFile, '');
						var f = filter(outputPath, {restore: true});
						// exclude unrelated demo assets
						if (outputPath.indexOf('/assets/demo/') !== -1 && outputPath.indexOf('/assets/demo/' + demo) === -1) {
							piping = piping.pipe(function () {
								return f;
							});
						}
						(function (_output) {
							piping = piping.pipe(function () {
								return gulp.dest(_output);
							});
						})(outputPath);
						piping = piping.pipe(function () {
							return f.restore;
						});
					});
				} else {
					var outputPath = path.replace(matched[0], output).replace(outputFile, '');
					(function (_output) {
						piping = piping.pipe(function () {
							return gulp.dest(_output);
						});
					})(outputPath);
				}
			});
		}

		return piping;
	},

	/**
	 * Convert string path to actual path
	 * @param path
	 * @returns {*}
	 */
	dotPath: function (path) {
		var regex = new RegExp(/\{\$(.*?)\}/),
			dot = function (obj, i) {
				return obj[i];
			};
		var matched = path.match(regex);
		if (matched) {
			var realpath = matched[1].split('.').reduce(dot, build);
			return path = path.replace(matched[0], realpath);
		}

		return path;
	},

	/**
	 * Convert multiple paths
	 * @param paths
	 */
	dotPaths: function (paths) {
		paths.forEach(function (path, i) {
			paths[i] = module.exports.dotPath(path);
		});
	},

	/**
	 * Css path rewriter when bundle files moved
	 * @param folder
	 */
	cssRewriter: function (folder) {
		var imgRegex = new RegExp(/\.(gif|jpg|jpeg|tiff|png|ico)$/i);
		var fontRegex = new RegExp(/\.(otf|eot|svg|ttf|woff|woff2)$/i);
		var config = this.config;

		return lazypipe().pipe(function () {
			// rewrite css relative path
			return rewrite({
				destination: folder,
				debug: config.debug,
				adaptPath: function (ctx) {
					var isCss = ctx.sourceFile.match(/\.[css]+$/i);
					// process css only
					if (isCss[0] === '.css') {
						var pieces = ctx.sourceDir.split(/\\|\//);

						var vendor = pieces[pieces.indexOf('node_modules') + 1];
						if (pieces.indexOf('node_modules') === -1) {
							vendor = pieces[pieces.indexOf('vendors') + 1];
						}

						var file = module.exports.baseFileName(ctx.targetFile);

						var extension = 'fonts/';
						if (imgRegex.test(file)) {
							extension = 'images/';
						}

						return path.join(extension + vendor, file);
					}
				},
			});
		});
	},

	/**
	 * Get end filename from path
	 * @param path
	 * @returns {string}
	 */
	baseFileName: function (path) {
		var maybeFile = path.split('/').pop();
		if (maybeFile.indexOf('.') !== -1) {
			return maybeFile;
		}
		return '';
	},

	baseName: function (str) {
		var base = new String(str).substring(str.lastIndexOf('/') + 1);
		if (base.lastIndexOf('.') != -1)
			base = base.substring(0, base.lastIndexOf("."));
		return base;
	},

	/**
	 * Remove file name and get the path
	 */
	pathOnly: function (str) {
		var array = str.split('/');
		if (array.length > 0) {
			array.pop();
		}
		return array.join('/');
	},

	/**
	 * Bundle
	 * @param bundle
	 */
	bundle: function (bundle) {
		var _self = this;
		var tasks = [];

		if (typeof bundle.src !== 'undefined' && typeof bundle.bundle !== 'undefined') {

			// for images & fonts as per vendor
			if ('mandatory' in bundle.src && 'optional' in bundle.src) {
				var vendors = {};

				for (var key in bundle.src) {
					if (!bundle.src.hasOwnProperty(key)) continue;
					vendors = Object.assign(vendors, bundle.src[key]);
				}

				for (var vendor in vendors) {
					if (!vendors.hasOwnProperty(vendor)) continue;

					var vendorObj = vendors[vendor];

					for (var type in vendorObj) {
						if (!vendorObj.hasOwnProperty(type)) continue;

						_self.dotPaths(vendorObj[type]);

						switch (type) {
							case 'fonts':
								gulp.src(vendorObj[type]).pipe(_self.outputChannel(bundle.bundle[type] + '/' + vendor)());
								break;
							case 'images':
								gulp.src(vendorObj[type]).pipe(_self.outputChannel(bundle.bundle[type] + '/' + vendor)());
								break;
						}
					}
				}
			}

			// flattening array
			if (!('styles' in bundle.src) && !('scripts' in bundle.src)) {
				var src = {styles: [], scripts: []};
				_self.objectWalkRecursive(bundle.src, function (paths, type) {
					switch (type) {
						case 'styles':
						case 'scripts':
							src[type] = src[type].concat(paths);
							break;
						case 'images':
							// images for mandatory and optional vendor already processed
							if (!'mandatory' in bundle.src || !'optional' in bundle.src) {
								src[type] = src[type].concat(paths);
							}
							break;
					}
				});
				bundle.src = src;
			}

			for (var type in bundle.src) {
				if (!bundle.src.hasOwnProperty(type)) continue;
				// skip if not array
				if (Object.prototype.toString.call(bundle.src[type]) !== '[object Array]') continue;
				// skip if no bundle output is provided
				if (typeof bundle.bundle[type] === 'undefined') continue;

				_self.dotPaths(bundle.src[type]);
				var outputFile = _self.baseFileName(bundle.bundle[type]);

				switch (type) {
					case 'styles':
						// rtl css bundle
						if (build.config.compile.rtl.enabled) {
							var toRtlFiles = [];
							var rtlFiles = [];
							bundle.src[type].forEach(function (path) {
								// get rtl css file path
								var cssFile = _self.pathOnly(path) + '/' + _self.baseName(path) + '.rtl.css';
								// check if rtl file is exist
								if (fs.existsSync(cssFile) && build.config.compile.rtl.skip.indexOf(_self.baseName(path)) === -1) {
									rtlFiles = rtlFiles.concat(cssFile);
								} else {
									// rtl css file not exist, use default css file
									cssFile = path;
								}
								toRtlFiles = toRtlFiles.concat(cssFile);
							});

							var rtlOutput = _self.pathOnly(bundle.bundle[type]) + '/' + _self.baseName(bundle.bundle[type]) + '.rtl.css';
							gulp.src(toRtlFiles).pipe(_self.cssRewriter(bundle.bundle[type])()).pipe(concat(_self.baseName(bundle.bundle[type]) + '.rtl.css')).pipe(_self.cssChannel()()).// convert rtl for style.bundle.css only here, others already converted before
							pipe(gulpif(_self.baseName(bundle.bundle[type]) === 'style.bundle', rtlcss())).pipe(_self.outputChannel(rtlOutput, _self.baseName(bundle.bundle[type]) + '.rtl.css')());
						}

						// default css bundle
						gulp.src(bundle.src[type]).pipe(_self.cssRewriter(bundle.bundle[type])()).pipe(concat(outputFile)).pipe(_self.cssChannel()()).pipe(_self.outputChannel(bundle.bundle[type], outputFile)());
						break;

					case 'scripts':
						gulp.src(bundle.src[type]).pipe(concat(outputFile)).pipe(_self.jsChannel()()).pipe(_self.outputChannel(bundle.bundle[type], outputFile)());
						break;

					case 'images':
						gulp.src(bundle.src[type]).pipe(_self.outputChannel(bundle.bundle[type])());
						break;

					default:
						break;
				}
			}
		}
		return tasks;
	},

	/**
	 * Copy source to output destination
	 * @param bundle
	 */
	output: function (bundle) {
		var _self = this;

		if (typeof bundle.src !== 'undefined' && typeof bundle.output !== 'undefined') {
			for (var type in bundle.src) {
				if (!bundle.src.hasOwnProperty(type)) continue;

				_self.dotPaths(bundle.src[type]);

				switch (type) {
					case 'styles':
						gulp.src(bundle.src[type]).pipe(_self.cssChannel()()).pipe(_self.outputChannel(bundle.output[type])());
						break;
					case 'scripts':
						gulp.src(bundle.src[type]).pipe(_self.jsChannel()()).pipe(_self.outputChannel(bundle.output[type])());
						break;
					default:
						gulp.src(bundle.src[type]).pipe(_self.outputChannel(bundle.output[type])());
						break;
				}
			}
		}
	},

	getDemos: function () {
		var demos = Object.keys(build.build.demo);
		// var demos = this.getFolders(module.exports.rootPath + module.exports.demoPath);
		// build by demo, leave demo empty to generate all demos
		if (build.config.demo !== '') {
			demos = [build.config.demo];
		}
		return demos;
	},

	getFolders: function (dir) {
		return fs.readdirSync(dir).filter(function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
	},

};
