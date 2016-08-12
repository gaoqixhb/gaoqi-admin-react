/**
 * webpack base config
 * @authors yanjixiong 
 * @date    2016-07-15 11:03:02
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NodeModules =  path.resolve(__dirname, "../node_modules");
var AssetsPath = path.resolve(__dirname, '../src/assets');

module.exports = {
  entry: {
    app: [
      path.resolve(process.cwd(), './src/index'),
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'antd',
    ],
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      'vendor', '[name].[hash].js'
    ),
    new HtmlWebpackPlugin({
      template : path.resolve(process.cwd(), './src/index.html'),
      filename : 'index.html',
      inject   : 'body',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.resolve(process.cwd(), './src'),
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },

  resolve: {
      extensions:['','.js','.json','.css', 'scss'],
      alias: {
          //'react-dom':  path.join(NodeModules,   "/react-dom/dist/react-dom"),
          'antd': path.join(NodeModules,   '/antd'),
          'assets': AssetsPath
      }
  },
};
