'use strict';

const path = require('path'),
      webpack = require('webpack'),
      merge = require('webpack-merge');

var config = require('./config'),
    configWebpack = config.webpack,
    baseConfig = require('./webpack.base.js');

var HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin-steamer"),
    CopyWebpackPlugin = require("copy-webpack-plugin-hash");


var devConfig = {
    output: {
        publicPath: configWebpack.defaultPath,
        path: path.join(configWebpack.path.dev),
        filename: "[name].js",
        chunkFilename: "chunk/[name].js",
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/,
                loaders: ['react-hot'],
                exclude: /node_modules/,
            },
            { 
                test: /\.js?$/,
                loader: 'babel',
                query: {
                    // cacheDirectory: './webpack_cache/',
                    plugins: ['transform-decorators-legacy'],
                    presets: [
                        'es2015-loose', 
                        'react',
                    ]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "url-loader?limit=1000&name=img/[name].[ext]",
                ],
                include: path.resolve(configWebpack.path.src)
            }
        ],
        noParse: [
            
        ]
    },
    resolve: {
        alias: {
            'redux': 'redux/dist/redux',
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        new CopyWebpackPlugin([
            {
                from: 'src/libs/',
                to: 'libs/'
            }
        ]),
        new ExtractTextPlugin("./css/[name].css", {filenamefilter: function(filename) {
            // 由于entry里的chunk现在都带上了js/，因此，这些chunk require的css文件，前面也会带上./js的路径
            // 因此要去掉才能生成到正确的路径/css/xxx.css，否则会变成/css/js/xxx.css
            return filename.replace('/js', '');
        }, disable: true}),
        new webpack.HotModuleReplacementPlugin()
    ],
    watch: true, //  watch mode
    // 是否添加source-map，可去掉注释开启
    // devtool: "#inline-source-map",
};

devConfig.addPlugins = function(plugin, opt) {
    devConfig.plugins.push(new plugin(opt));
};

configWebpack.html.forEach(function(page) {
    devConfig.addPlugins(HtmlResWebpackPlugin, {
        filename: page + ".html",
        template: "src/" + page + ".html",
        favicon: "src/favicon.ico",
        chunks: configWebpack.htmlres.dev[page],
        htmlMinify: null
    });
}); 


// 后面的obj会覆盖前面的obj
module.exports = merge.smart(baseConfig, devConfig);