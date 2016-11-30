'use strict';

const path = require('path'),
      utils = require('./utils'),
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
            pub: path.resolve(__basename, "pub"),
            sprite: path.resolve(__basename, "src/img/sprites"),
        },
        defaultPath: "//localhost:9000/",
        cdn: "//localhost:8000/",
        hash: "[hash:6]",
        chunkhash: "[chunkhash:6]",
        imghash: "",
        contenthash: "[contenthash:6]",
    },
    gulp: {
        path: { 
            src: path.resolve(__basename, "src"),
            dev: path.resolve(__basename, "dev"),
            pub: path.resolve(__basename, "pub"),
            offline: path.resolve(__basename, "offline"),
        },
    },
    server: {                    // webpack开发环境服务器配置  
        port: 9000,              // port for local server
        hostDirectory: "/news/"  // http://host/hostDirectory/
    },
};

// 自动扫描html
config.webpack.html = utils.getHtmlFile(config.webpack.path.src);
// 根据约定，自动扫描js entry，约定是src/page/xxx/main.js 或 src/page/xxx/main.jsx
/** 
    当前获取结果
    {
        'js/index': [path.join(configWebpack.path.src, "/page/index/main.js")],
        'js/spa': [path.join(configWebpack.path.src, "/page/spa/main.js")],
        'js/pindex': [path.join(configWebpack.path.src, "/page/pindex/main.jsx")],
    }
 */
config.webpack.entry = utils.getJsFile(config.webpack.path.src, 'page', 'main', ['js', 'jsx']);

config.webpack.sprites = utils.getSpriteFolder(config.webpack.path.sprite);

module.exports = config;
