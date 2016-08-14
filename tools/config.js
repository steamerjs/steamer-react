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
        },
        defaultPath: "//localhost:9000/",
        cdn: "//localhost:8000/",
        hash: "[hash:6]",
        chunkhash: "[chunkhash:6]",
        imghash: "",
        contenthash: "[contenthash:6]",
        htmlres: {    // html-res-webpack-plugin资源注入配置
            dev: {    // 开发环境
                'spa': {
                    'js/spa': {
                        attr:{
                            js: "",
                            css: "",
                        }
                    },
                },
                'index': {
                    'js/index': {
                        attr:{
                            js: "",
                            css: "",
                        }
                    },
                },
                'pindex': {
                    'js/pindex': {
                        attr:{
                            js: "",
                            css: "",
                        }
                    },
                }
            },
            pub: {  // 生产环境
                'spa': {
                    'libs/react': null,
                    'libs/react-dom': null,
                    'js/spa': {
                        attr:{
                            js: "",
                            css: "",
                        }
                    },
                },
                'index': {
                    'libs/react': null,
                    'libs/react-dom': null,
                    'js/index': {
                        attr:{
                            js: "",
                            css: "",
                        }
                    },
                },
                'pindex': {
                    'libs/preact': null,
                    'js/pindex': {
                        attr:{
                            js: "",
                            css: "",
                        }
                    },
                }
            }
        }
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

// 合图配置
config.gulp.sprites = {
    tplpath: path.resolve(__basename, "tools/sprite-template/less.template.handlebars"),
    imgPath: '../../css/sprites/',
    imgName: 'sprites.png',
    cssName: 'sprites.scss',
    imgDest: config.gulp.path.src + '/css/sprites/',
    cssDest: config.gulp.path.src + '/css/sprites/',
};

module.exports = config;
