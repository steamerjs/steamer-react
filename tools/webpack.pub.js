'use strict';

'use strict';

const path = require('path'),
      utils = require('./utils'),
      webpack = require('webpack');

var config = require('./config'),
    nodeModulesPath = path.join(__dirname, 'node_modules');

var HtmlResWebpackPlugin = require('html-res-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin-steamer");
var CopyWebpackPlugin = require("copy-webpack-plugin-hash");

var configWebpack = config.webpack;

/**
 * [prodConfig config for production mode]
 * @type {Object}
 */
var prodConfig = {
    entry: {
        'js/index': [path.join(configWebpack.path.src, "/page/index/main.js")],
        'js/spa': [path.join(configWebpack.path.src, "/page/spa/main.js")],
    },
    output: {
        publicPath: configWebpack.cdn,
        path: path.join(configWebpack.path.pub),
        filename: "[name]" + configWebpack.chunkhash + ".js",
        // chunkFilename: "chunk/[name]" + config.chunkhash + ".js",
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
                test: /\.css$/,
                // extract style and make it stand-alone css file
                // for dev environment, inline style can be hot reload
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
                    "url-loader?limit=1000&name=img/[name]" + configWebpack.hash + ".[ext]",
                    // 压缩png图片
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
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
        	// use production version of redux
            'redux': 'redux/dist/redux.min',
            'react-redux': 'react-redux/dist/react-redux',
            'utils': path.join(configWebpack.path.src, '/js/common/utils'),
            'spin': path.join(configWebpack.path.src, '/js/common/spin'),
            'spinner': path.join(configWebpack.path.src, '/page/common/components/spinner/'),
            'report': path.join(configWebpack.path.src, '/js/common/report'),
            'touch': path.join(configWebpack.path.src, '/page/common/components/touch/'),
            'scroll':path.join(configWebpack.path.src, '/page/common/components/scroll/'),
            'pure-render-decorator': path.join(configWebpack.path.src, '/js/common/pure-render-decorator'),
        }
    },
    plugins: [
        // remove old pub folder
        new Clean(['pub'], {root: path.resolve()}),
        // inject process.env.NODE_ENV so that it will recognize if (process.env.NODE_ENV === "__PROD__")
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("__PROD__")
            }
        }),
        new CopyWebpackPlugin([
		    {
		        from: 'src/libs/',
		        to: 'libs/'
		    }
		], {
            namePattern: "[name]-[contenthash:6].js"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        // make css file standalone
        new ExtractTextPlugin("./css/[name]-[contenthash:6].css", {filenamefilter: function(filename) {
            // 由于entry里的chunk现在都带上了js/，因此，这些chunk require的css文件，前面也会带上./js的路径
            // 因此要去掉才能生成到正确的路径/css/xxx.css，否则会变成/css/js/xxx.css
            return filename.replace('/js', '');
        }}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin()
    ],
    // use external react library
    externals: {
    	'react': "React",
        'react-dom': "ReactDOM",
    },
    // disable watch mode
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

module.exports = prodConfig;