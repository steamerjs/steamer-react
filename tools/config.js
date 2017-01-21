'use strict';

const path = require('path'),
      __basename = path.dirname(__dirname),
      __env = process.env.NODE_ENV;

/**
 * [config basic configuration]
 * @type {Object}
 */

var config = {
    env: __env,
    webpack: {
        path: {
            src: path.resolve(__basename, "src"),
            dev: path.resolve(__basename, "dev"),
            build: path.resolve(__basename, "dist"),
        },
        webserver: "//localhost:9000/",
        cdn: "//localhost:8000/",
        hash: "[hash:6]",
        chunkhash: "[chunkhash:6]",
        imghash: "",
        contenthash: "[contenthash:6]",
    },
    server: {                    // webpack开发环境服务器配置  
        port: "9000",              // port for local server
        route: "/news/"  // http://host/news/
    },
};

config.webpack.html = ["page1", "page2", "page3"];


module.exports = config;
