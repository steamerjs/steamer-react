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
        hash: (__env) ? "-[hash:6]" : "",
        chunkhash: (__env) ? "-[chunkhash:6]" : "",
        htmlres: {
            dev: {
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
                }
            },
            pub: {
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
    server: {
        port: 9000,               // port for local server
        hostDirectory: "/news/"  // http://host/hostDirectory/
    },
};

config.webpack.html = utils.getHtmlFile(config.webpack.path.src);

config.gulp.sprites = {
    tplpath: path.resolve(__basename, "tools/sprite-template/less.template.handlebars"),
    imgPath: '../../css/sprites/',
    imgName: 'sprites.png',
    cssName: 'sprites.scss',
    imgDest: config.gulp.path.src + '/css/sprites/',
    cssDest: config.gulp.path.src + '/css/sprites/',
};

module.exports = config;
