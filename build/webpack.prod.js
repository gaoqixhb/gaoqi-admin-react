/**
 * webpack production config
 * @authors yanjixiong 
 * @date    2016-07-15 11:03:43
 */

var webpack = require('webpack');
var webpackConfig = require('./webpack.base');

webpackConfig.output.publicPath = './';

webpackConfig.plugins.push(
 new webpack.optimize.UglifyJsPlugin({
   compress : {
     warnings: false,
     // unused: true,
     // dead_code: true,
   },
   output: {
     comments: false,
   },
 })
);
webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  })
);

module.exports = webpackConfig;
