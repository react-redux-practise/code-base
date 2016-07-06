var webpack = require("webpack");

module.exports = {
  entry: {
    'app': './scripts/app.jsx',
    'vendors': ['react-dom', 'react', 'jquery']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
      loaders: [
          {
              //tell webpack to use jsx-loader for all *.jsx files
              test: /\.jsx$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'react']
              }
          },
          {
              //tell webpack to use jsx-loader for all *.jsx files
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['es2015']
              }
          }
      ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendors", "vendors.js"),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
  ]
};
