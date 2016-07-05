'use strict';

const path = require('path'),
      utils = require('./config/utils'),
      webpack = require('webpack');

var config = require('./config/config'),
    nodeModulesPath = path.join(__dirname, 'node_modules'),
    parentNodeModulePath = path.join(path.dirname(__dirname), 'node_modules');

var HtmlResWebpackPlugin = require('html-res-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 * [devConfig config for development mode]
 * @type {Object}
 */
var devConfig = {
    entry: {
        "js/index": [path.join(config.path.src, "/page/index/main.js")],
        "js/spa": [path.join(config.path.src, "/page/spa/main.js")],
    },
    output: {
        publicPath: config.defaultPath,
        path: path.join(config.path.dist),
        filename: "[name]" + config.chunkhash + ".js",
        chunkFilename: "chunk/[name]" + config.chunkhash + ".js",
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
                    cacheDirectory: false,//'/webpack_cache/',
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
                loader: "style-loader!css-loader",
                include: path.resolve(config.path.src)
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
                include: [parentNodeModulePath, nodeModulesPath, path.resolve(config.path.src)]
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader",
                include: [parentNodeModulePath, nodeModulesPath, path.resolve(config.path.src)]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "url-loader?limit=1000&name=img/[name]" + config.hash + ".[ext]",
                ],
                include: path.resolve(config.path.src)
            },
            {
                test: /\.ico$/,
                loader: "url-loader?name=[name].[ext]",
                include: path.resolve(config.path.src)
            },
            { 
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,  
                loader: 'url-loader?importLoaders=1&limit=10000&name=fonts/[name]' + config.hash + '.[ext]' 
            },
        ],
        noParse: [
            
        ]
    },
    resolve: {
        moduledirectories:['node_modules', config.path.src],
        extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "png", "jpg", "jpeg", "ico"],
        alias: {
            'redux': 'redux/dist/redux',
            'react-redux': 'react-redux/dist/react-redux',
            'classnames': 'classnames',
            'utils': path.join(config.path.src, '/js/common/utils'),
            'spin': path.join(config.path.src, '/js/common/spin'),
            'spinner': path.join(config.path.src, '/page/common/components/spinner/'),
            'report': path.join(config.path.src, '/js/common/report'),
            'touch': path.join(config.path.src, '/page/common/components/touch/'),
            'scroll':path.join(config.path.src, '/page/common/components/scroll/'),
            'immutable-pure-render-decorator': path.join(config.path.src, '/js/common/immutable-pure-render-decorator'),
            'pure-render-decorator': path.join(config.path.src, '/js/common/pure-render-decorator'),
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        // new CopyWebpackPlugin([
        //     {
        //         from: 'src/libs/',
        //         to: 'libs/'
        //     }
        // ]),
    ],
    watch: true, //  watch mode
    // devtool: "#inline-source-map",
};

devConfig.addPlugins = function(plugin, opt) {
    devConfig.plugins.push(new plugin(opt));
};

let pageMapping = {
    'spa': {
        'js/spa': {
            attr:{
                js: "",
                css: "offline",
            }
        },
    },
    'index': {
        'js/index': {
            attr:{
                js: "",
                css: "offline",
            }
        },
    }
};

config.html.forEach(function(page) {
    devConfig.addPlugins(HtmlResWebpackPlugin, {
        filename: page + ".html",
        template: "src/" + page + ".html",
        favicon: "src/favicon.ico",
        chunks: pageMapping[page],
        templateContent: function(tpl) {
            // 生产环境不作处理
            if (!this.webpackOptions.watch) {
                return tpl;
            }
            // 开发环境先去掉外链react.js
            var regex = new RegExp("<script.*src=[\"|\']*(.+).*?[\"|\']><\/script>", "ig");
            tpl = tpl.replace(regex, function(script, route) {
                if (!!~script.indexOf('react.js') || !!~script.indexOf('react-dom.js')) {
                    return '';
                }
                return script;
            });
            return tpl;
        }, 
        htmlMinify: null
    });
}); 

devConfig.addPlugins(webpack.HotModuleReplacementPlugin);

devConfig.addPlugins(webpack.DefinePlugin, {
    "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    },
    "isNode": false,
    "console.dev": function(msg) { console.log(msg); }
});

module.exports = devConfig;