'use strict';

var config = require('./config/config'),
    webpackConfigPath = (config.env === 'production') ? './webpack.prod.js' : './webpack.dev.js';

module.exports = require(webpackConfigPath);