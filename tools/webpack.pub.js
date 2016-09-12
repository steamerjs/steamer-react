'use strict';

const path = require('path'),
      webpack = require('webpack'),
      merge = require('webpack-merge');

var config = require('./config'),
    configWebpack = config.webpack,
    baseConfig = require('./webpack.base.js');

var HtmlResWebpackPlugin = require('html-res-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin-steamer");
var CopyWebpackPlugin = require("copy-webpack-plugin-hash");

var prodConfig = {
    output: {
        publicPath: configWebpack.cdn,
        path: path.join(configWebpack.path.pub),
        filename: "[name]-" + configWebpack.chunkhash + ".js",
        chunkFilename: "chunk/[name]-" + configWebpack.chunkhash + ".js",
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: '/webpack_cache/',
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
                    "url-loader?limit=1000&name=img/[name]" + configWebpack.hash + ".[ext]",
                    // 压缩png图片
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ],
                include: path.resolve(configWebpack.path.src)
            }
        ],
        noParse: [
            
        ]
    },
    resolve: {
        alias: {
        	// 使用压缩版本redux
            'redux': 'redux/dist/redux.min'
        }
    },
    plugins: [
        // remove previous pub folder
        new Clean(['pub'], {root: path.resolve()}),
        // inject process.env.NODE_ENV so that it will recognize if (process.env.NODE_ENV === "__PROD__")
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(config.env)
            }
        }),
        new CopyWebpackPlugin([
		    {
		        from: 'src/libs/',
		        to: 'libs/'
		    }
		], {
            namePattern: "[name]-" + configWebpack.contenthash + ".js"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("./css/[name]-" + configWebpack.contenthash + ".css", {filenamefilter: function(filename) {
            // 由于entry里的chunk现在都带上了js/，因此，这些chunk require的css文件，前面也会带上./js的路径
            // 因此要去掉才能生成到正确的路径/css/xxx.css，否则会变成/css/js/xxx.css
            return filename.replace('/js', '');
        }}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    // 使用外链
    externals: {
    	'react': "React",
        'react-dom': "ReactDOM",
    },
    watch: false, //  watch mode
};

prodConfig.addPlugins = function(plugin, opt) {
    prodConfig.plugins.push(new plugin(opt));
};

configWebpack.html.forEach(function(page) {
    prodConfig.addPlugins(HtmlResWebpackPlugin, {
        filename: page + ".html",
        template: "src/" + page + ".html",
        favicon: "src/favicon.ico",
        chunks: configWebpack.htmlres.pub[page],
        htmlMinify: {
            removeComments: true,
            collapseWhitespace: true,
        }
    });
}); 


module.exports = merge(baseConfig, prodConfig);
