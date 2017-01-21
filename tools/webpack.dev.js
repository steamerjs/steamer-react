'use strict';

const path = require('path'),
      utils = require('steamer-webpack-utils'),
      webpack = require('webpack');

var config = require('./config'),
    configWebpack = config.webpack;

var HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin-steamer"),
    PostcssImport = require('postcss-import'),
    Autoprefixer = require('autoprefixer');

var devConfig = {
    entry: {
        "js/page1": path.resolve("src/js/page1"),
        "js/page2": path.resolve("src/js/page2"),
        "js/page3": path.resolve("src/js/page3"),
    },
    output: {
        publicPath: configWebpack.webserver,
        path: path.join(configWebpack.path.dev),
        filename: "[name].js",
        chunkFilename: "chunk/[name].js",
    },
    module: {
        loaders: [
            { 
                test: /\.js$/,
                loader: 'babel',
                query: {
                    cacheDirectory: './.webpack_cache/',
                    presets: [
                        ["es2015", {"loose": true}]
                    ]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,     
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?localIdentName=[name]-[local]-[hash:base64:5]!less-loader?root=" + path.resolve('src')),
                // include: [path.resolve(configWebpack.path.src), 'node_modules'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "url-loader?limit=100&name=images/[path]/[name].[ext]",
                ],
                include: path.resolve(configWebpack.path.src)
            },
            {
                test: /\.ico$/,
                loader: "url-loader?name=[name].[ext]",
                include: path.resolve(configWebpack.path.src)
            },
        ],
        noParse: [
            
        ]
    },
    postcss: function(webpack) { 
        return [
            PostcssImport(),
            Autoprefixer() 
        ]
    },
    resolve: {
        root: [
            path.resolve(configWebpack.path.src)
        ],
        moduledirectories:['node_modules', configWebpack.path.src],
        extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "less", "png", "jpg", "jpeg", "ico"],
        alias: {
            
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin("./css/[name].css", {filenamefilter: function(filename) {
            // 由于entry里的chunk现在都带上了js/，因此，这些chunk require的css文件，前面也会带上./js的路径
            // 因此要去掉才能生成到正确的路径/css/xxx.css，否则会变成/css/js/xxx.css
            return filename.replace('/js', '');
        }}),
        new webpack.NoErrorsPlugin()
    ],
    watch: true, //  watch mode
    // 是否添加source-map，可去掉注释开启
    // devtool: "#inline-source-map",
};

configWebpack.html.forEach(function(page, key) {
    utils.addPlugins(devConfig, HtmlResWebpackPlugin, {
        mode: "html",
        filename: page + ".html",
        template: "src/" + page + ".html",
        // chunks: configWebpack.htmlres.dev[page],
        htmlMinify: null,
        entryLog: !key ? true : false,
        templateContent: function(tpl) {
            return tpl;
        }
    });
}); 

module.exports = devConfig;