'use strict';

const path = require('path'),
      utils = require('./utils'),
      webpack = require('webpack');

var config = require('./config'),
    configWebpack = config.webpack;

var HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin-steamer"),
    CopyWebpackPlugin = require("copy-webpack-plugin-hash");

var devConfig = {
    entry: {
        'js/index': [path.join(configWebpack.path.src, "/page/index/main.js")],
        'js/spa': [path.join(configWebpack.path.src, "/page/spa/main.js")],
    },
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
                test: /\.css$/,
                // 单独抽出样式文件
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
                include: path.resolve(configWebpack.path.src)
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
                include: path.resolve(configWebpack.path.src)
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "url-loader?limit=1000&name=img/[name].[ext]",
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
    resolve: {
        moduledirectories:['node_modules', configWebpack.path.src],
        extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "png", "jpg", "jpeg", "ico"],
        alias: {
            'redux': 'redux/dist/redux',
            'react-redux': 'react-redux/dist/react-redux',
            'utils': path.join(configWebpack.path.src, '/js/common/utils'),
            'spin': path.join(configWebpack.path.src, '/js/common/spin'),
            'spinner': path.join(configWebpack.path.src, '/page/common/components/spinner/'),
            'net': path.join(configWebpack.path.src, '/js/common/net'),
            'touch': path.join(configWebpack.path.src, '/page/common/components/touch/'),
            'scroll':path.join(configWebpack.path.src, '/page/common/components/scroll/'),
            'pure-render-decorator': path.join(configWebpack.path.src, '/js/common/pure-render-decorator'),
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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

module.exports = devConfig;