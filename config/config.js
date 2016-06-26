'use strict';

const path = require('path'),
      __basename = path.dirname(__dirname),
      isProduction = process.env.NODE_ENV === '__PROD__',
      isNode = process.env.NODE_ENV === 'dev-node';

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
        node: path.resolve(__basename, "node"),
    },
    gulpPath: {
        src: './src/',
        dist: './dist/',
        pub: './pub/',
        offline: './offline/',
        node: './node/',
    },
    chunkhash: (isProduction) ? "-[chunkhash:6]" : "",
    hash: (isProduction) ? "-[hash:6]" : "",
    defaultPath: "//localhost:9000/",
    cdn: "//localhost:8000/",
    serverPort: 9000,        // port for local server
    hostDirectory: "/news/"  // http://host/hostDirectory/
};

if (!isNode) {
    const utils = require('./utils');
    config.html = utils.getHtmlFile(config.path.src);
}

config.sprites = {
    // imgPath: '../../../css/sprites/sprites.png',
    imgPath: '../../../css/sprites/',
    imgName: 'sprites.png',
    cssName: 'sprites.scss',
    imgDest: config.gulpPath.src + 'css/sprites/',
    cssDest: config.gulpPath.src + 'css/sprites/'
};

module.exports = config;
