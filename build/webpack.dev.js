/**
 * webpack dev config
 * @authors yanjixiong
 * @date    2016-07-15 11:03:29
 */

var webpack = require('webpack');
var webpackConfig = require('./webpack.base');

webpackConfig.entry.app.push('webpack-hot-middleware/client');

webpackConfig.devtool = 'source-map';

webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = webpackConfig;
