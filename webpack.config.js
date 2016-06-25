'use strict';
var config = require('./config/config');

let configMapping = {
	'dev': './webpack.dev.js',
	'production': './webpack.prod.js',
	'node': './webpack.node.js'
};

config.env = (!config.env) ? 'dev' : config.env;



var webpackConfigPath = configMapping[config.env];

module.exports = require(webpackConfigPath);