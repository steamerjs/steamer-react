'use strict';
var config = require('./config/config');

let configMapping = {
	'__DEV__': './webpack.dev.js',
	'__DEV_NODE__': './webpack.dev.js',
	'__PROD__': './webpack.prod.js',
	'__NODE_DEV__': './webpack.node.js',
	'__PROD_NODE__': './webpack.node.js'
};

var webpackConfigPath = configMapping[config.env],
	webpackConfig = require(webpackConfigPath);

module.exports = webpackConfig;