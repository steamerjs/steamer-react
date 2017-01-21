'use strict';

const path = require('path'),
      utils = require('steamer-webpack-utils'),
      webpack = require('webpack');

var config = require('./config'),
    configWebpack = config.webpack;

var HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    Clean = require('clean-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin-steamer"),
    WebpackMd5Hash = require('webpack-md5-hash'),
    PostcssImport = require('postcss-import'),
    Autoprefixer = require('autoprefixer');

var prodConfig = {
    entry: {
        "js/page1": path.resolve("src/js/page1"),
        "js/page2": path.resolve("src/js/page2"),
        "js/page3": path.resolve("src/js/page3"),
    },
    output: {
        publicPath: configWebpack.cdn,
        path: path.resolve(configWebpack.path.build),
        filename: "[name]-" + configWebpack.chunkhash + ".js",
        chunkFilename: "chunk/[name]-" + configWebpack.chunkhash + ".js",
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
                    "url-loader?limit=100&name=images/[path]/[name]-" + configWebpack.hash + ".[ext]",
                    // 压缩png图片
                    // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
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
    },
    plugins: [
        // remove previous build folder
        new Clean(['dist'], {root: path.resolve()}),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new ExtractTextPlugin("./css/[name]-" + configWebpack.contenthash + ".css", {filenamefilter: function(filename) {
            // 由于entry里的chunk现在都带上了js/，因此，这些chunk require的css文件，前面也会带上./js的路径
            // 因此要去掉才能生成到正确的路径/css/xxx.css，否则会变成/css/js/xxx.css
            return filename.replace('/js', '');
        }}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new WebpackMd5Hash(),
        new webpack.NoErrorsPlugin()
    ],
    watch: false, //  watch mode
};

configWebpack.html.forEach(function(page, key) {
    utils.addPlugins(prodConfig, HtmlResWebpackPlugin, {
        mode: "html",
        filename: "./" + page + ".html",
        template: "src/" + page + ".html",
        entryLog: !key ? true : false,
        htmlMinify: {
            removeComments: true,
            collapseWhitespace: true,
        }
    });
}); 

module.exports = prodConfig;