var gulp = require('gulp');
var gutil = require('gulp-util');
var sequence = require('run-sequence');
var build = require('./build');
var func = require('./helpers');
var rename = require('gulp-rename');
var rtlcss = require('gulp-rtlcss');
var glob = require('glob');
var fs = require('fs');
var pretty = require('pretty');

// merge with default parameters
var args = Object.assign({'prod': false, 'rtl': false}, gutil.env);

if (args.prod !== false) {
	// force disable debug for production
	build.config.debug = false;
	build.config.compile = Object.assign(build.config.compile, {
		'jsUglify': true,
		'cssMinify': true,
		'jsSourcemaps': false,
		'cssSourcemaps': false,
	});
}

if (args.rtl !== false) {
	build.config.compile.rtl.enabled = true;
}

gulp.task('rtl', function (cb) {
	var stream = null;
	func.objectWalkRecursive(build.build, function (val, key, userdata) {
		if (userdata.indexOf(key) === -1 && typeof val.styles !== 'undefined' && key !== 'bundle') {
			// rtl conversion in each plugins
			for (var i in val.styles) {
				if (!val.styles.hasOwnProperty(i)) continue;
				var toRtlFile = func.dotPath(val.styles[i]);

				// exclude scss file for now
				if (toRtlFile.indexOf('.scss') === -1) {
					stream = gulp.src(toRtlFile)
						.pipe(rtlcss())
						.pipe(rename({
							suffix: '.rtl'
						}))
						.pipe(gulp.dest(func.pathOnly(toRtlFile)));
				}
			}
		}
	}, build.config.compile.rtl.skip);
	return stream;
});

// task to bundle js/css
gulp.task('build-bundle', function (cb) {
	// build by demo, leave demo empty to generate all demos
	if (build.config.demo !== '') {
		for (var demo in build.build.demo) {
			if (!build.build.demo.hasOwnProperty(demo)) continue;
			if (build.config.demo !== demo) {
				delete build.build.demo[demo];
			}
		}
	}

	func.objectWalkRecursive(build.build, function (val, key) {
		if (typeof val.src !== 'undefined') {
			if (typeof val.bundle !== 'undefined') {
				func.bundle(val);
			}
			if (typeof val.output !== 'undefined') {
				func.output(val);
			}
		}
	});

	cb();
});


var tasks = ['clean'];
if (build.config.compile.rtl.enabled) {
	tasks.push('rtl');
}

// entry point
gulp.task('default', tasks, function (cb) {
	// clean first and then start bundling
	return sequence(['build-bundle'], cb);
});

// html formatter
gulp.task('html-formatter', [], function (cb) {
	var root = '../theme/dist/default/';
	var format = function (dir) {
		glob(dir + '/**/*.html', {}, function (er, files) {
			files.forEach(function (path) {
				fs.readFile(path, {encoding: 'UTF-8'}, (err, data) => {
					if (err) throw err;
					var formatted = pretty(data, {ocd: true, indent_size: 1, indent_char: '	', unformatted: ['code', 'pre', 'em', 'strong']}); 
					fs.writeFile(path, formatted, (err) => {
						if (err) throw err;
						console.log(path + ' formatted!');
					});
				});
			});
		});
	};
	format(root + 'default');
	format(root + 'angular');
	cb();
});