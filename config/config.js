'use strict';

const path = require('path'),
      utils = require('./utils'),
      __basename = __dirname.replace('/config', '');

/**
 * [config basic configuration]
 * @type {Object}
 */
var config = {
    env: process.env.NODE_ENV,
    path: {
        src: path.resolve(__basename, "src"),
        dist: path.resolve(__basename, "dist"),
        pub: path.resolve(__basename, "pub"),
    },
    chunkhash: (process.env.NODE_ENV) ? "-[chunkhash:6]" : "",
    hash: (process.env.NODE_ENV) ? "-[hash:6]" : "",
    defaultPath: "//localhost:9000/",
    cdn: "//localhost:8000/",
    serverPort: 9000,        // port for local server
    hostDirectory: "/news/"  // http://host/hostDirectory/
};

config.html = utils.getHtmlFile(config.path.src);

module.exports = config;