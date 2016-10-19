/* eslint-disable */
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react', 'react-hmre' ]
        }
      },
      {test: /\.less$/, loader: 'style!css!less'}
    ]
  }
};