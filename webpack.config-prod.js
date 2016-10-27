/* eslint-disable */
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  debug: true,
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'app.js',
    path: __dirname + '/assets/js/',
    publicPath: '/assets/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {test: /\.less$/, loader: 'style!css!less'}
    ]
  }
};
