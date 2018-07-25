const path = require('path');

module.exports = {
  lintOnSave: true,
  outputDir: path.resolve(__dirname, "./dist"),
  configureWebpack: {
    // output: {
    //   path: path.resolve(__dirname, 'dist'),
    //   filename: '[name].js',
    //   publicPath: '/'
    // },
    module: {
      rules: [
        
        // {
        //   test: /\.html$/,
        //   loader: 'vue-template-loader'
        //   // We don't want to pass `src/index.html` file to this loader.
        //   // exclude: /index.html/
        // },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {loader: 'html-loader'}
        }
      ]
    },
    plugins: [
      
    ]
  }
}