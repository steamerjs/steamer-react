'use strict';

const path = require('path'),
      utils = require('steamer-webpack-utils'),
      webpack = require('webpack'),
      webpackMerge = require('webpack-merge'),
      customConfig = require('../config/webpack.custom');

var config = require('../config/project'),
    configWebpack = config.webpack;

var CopyWebpackPlugin = require("copy-webpack-plugin-hash");

console.log(configWebpack.path.src);
var baseConfig = {
	context: configWebpack.path.src,
    entry: configWebpack.entry,
    output: {
        publicPath: config.webserver,
        path: path.join(configWebpack.path.dev),
        filename: "[name].js",
        chunkFilename: "chunk/[name].js",
    },
    module: {
        rules: [
            // { 
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     options: {
            //         cacheDirectory: './.webpack_cache/',
            //         presets: [
            //             ["es2015", {"loose": true}],
            //         ]
            //     },
            //     exclude: /node_modules/,
            // },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            // root: configWebpack.path.src
                            // module: true
                        }
                    },
                    { loader: 'postcss-loader' },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            // module: true
                        }
                    },
                    { loader: 'postcss-loader' },
                    {
                        loader:  'less-loader',
                        options: {
                            paths: [
                            	configWebpack.path.src,
                            	"node_modules"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader",
                options: {
                    limit: 1000,
                    name: "img/[path]/" + configWebpack.hashName + ".[ext]"
                },
                include: configWebpack.path.src
            },
            {
                test: /\.ico$/,
                loader: "url-loader",
                options: {
                    name: "[name].[ext]"
                },
                include: configWebpack.path.src
            },
        ],
    },
    resolve: {
        modules: [
            configWebpack.path.src,
            "node_modules"
        ],
        extensions: [".js", ".jsx", ".css", ".scss", ".less", ".styl", ".png", ".jpg", ".jpeg", ".ico", ".ejs", ".pug", ".handlebars"],
        alias: {
            'react/lib/ReactMount': 'react-dom/lib/ReactMount',
            'redux': 'redux/dist/redux',
            'react-redux': 'react-redux/dist/react-redux',
            'utils': path.join(configWebpack.path.src, '/js/common/utils'),
            'sutils': 'steamer-browserutils/index',
            'spin': path.join(configWebpack.path.src, '/js/common/spin'),
            'spinner': path.join(configWebpack.path.src, '/page/common/components/spinner/index.js'),
            'spinner-p': path.join(configWebpack.path.src, '/page/common/components/spinner/index-p.js'),
            'net': 'steamer-net/index',
            'touch': path.join(configWebpack.path.src, '/page/common/components/touch/index.js'),
            'touch-p': path.join(configWebpack.path.src, '/page/common/components/touch/index-p.js'),
            'scroll': 'react-list-scroll/dist/',
            'scroll-p': 'react-list-scroll/dist/pindex',
        	'pure-render-decorator': 'pure-render-deepCompare-decorator/dist/',
        	'pure-render-immutable-decorator': 'pure-render-immutable-decorator/dist'
        }
    },
    plugins: [
    	new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'libs/',
                to: 'libs/' + configWebpack.hashName + '.[ext]'
            }
        ]),
    ],
};

var finalConfig = webpackMerge.smartStrategy({
    "module.rules": "prepend"
})(baseConfig, customConfig);

// console.log(JSON.stringify(finalConfig, null, 2));

module.exports = finalConfig;