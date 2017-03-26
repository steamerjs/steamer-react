'use strict';

const path = require('path'),
      utils = require('steamer-webpack-utils'),
      __basename = path.dirname(__dirname),
      __env = process.env.NODE_ENV,
      isProduction = __env === 'production',
      steamerConfig = require('./steamer.config');
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
            dist: path.resolve(__basename, "dist"),
            sprite: path.resolve(__basename, "src/img/sprites"),
        },
        hash: "[hash:6]",
        chunkhash: "[chunkhash:6]",
        contenthash: "[contenthash:6]",
        hashName: isProduction ? "[name]-[hash:6]" : "[name]",
        chunkhashName: isProduction ? "[name]-[chunkhash:6]" : "[name]",
        contenthashName: isProduction ? "[name]-[contenthash:6]" : "[name]"
    },
    webserver: steamerConfig.webserver,
    cdn: steamerConfig.cdn,
    port: steamerConfig.port,    // port for local server
    route: steamerConfig.route  // http://host/news/
};

// 自动扫描html
config.webpack.html = utils.getHtmlEntry({
    srcPath: config.webpack.path.src
});

// 根据约定，自动扫描js entry，约定是src/page/xxx/main.js 或 src/page/xxx/main.jsx
/** 
    当前获取结果
    {
        'js/index': [path.join(configWebpack.path.src, "/page/index/main.js")],
        'js/spa': [path.join(configWebpack.path.src, "/page/spa/main.js")],
        'js/pindex': [path.join(configWebpack.path.src, "/page/pindex/main.jsx")],
    }
 */
config.webpack.entry = utils.getJsEntry({
    srcPath: path.join(config.webpack.path.src, "page"), 
    fileName: "main",
    extensions: ["js", "jsx"],
    keyPrefix: "js/",
    level: 1
});
// 自动扫描合图
config.webpack.sprites = utils.getSpriteEntry({
    srcPath: config.webpack.path.sprite
});

module.exports = config;