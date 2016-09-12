'use strict';
const path = require('path'),
	  utils = require('./utils'),
	  webpack = require('webpack');

var config = require('./config'),
	configWebpack = config.webpack;

var HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin-steamer"),
    CopyWebpackPlugin = require("copy-webpack-plugin-hash");


var baseConfig = {
	entry: {
		'js/index': [path.join(configWebpack.path.src, "/page/index/main.js")],
        'js/spa': [path.join(configWebpack.path.src, "/page/spa/main.js")]
    },
    output: {

    },
    module: {
    	loaders: [
    		// cacheDirectory: webpack_cache 是啥？
    		// { 
      //           test: /\.js?$/,
      //           loader: 'babel',
      //           query: {
      //               // cacheDirectory: './webpack_cache/',
      //               plugins: ['transform-decorators-legacy'],
      //               presets: [
      //                   'es2015-loose', 
      //                   'react',
      //               ]
      //           },
      //           exclude: /node_modules/,
      //       },
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
                test: /\.ico$/,
                loader: "url-loader?name=[name].[ext]",
                include: path.resolve(configWebpack.path.src)
            }
    	],
    	noParse: [
    		
    	]
    },
    resolve: {
        moduledirectories:['node_modules', configWebpack.path.src],
        extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "png", "jpg", "jpeg", "ico"],
        alias: {
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
        new webpack.NoErrorsPlugin()
	]

};

module.exports = baseConfig;