'use strict';

// require("babel-register")({
//     ignore: /node_modules/,
//     optional: ["es7.objectRestSpread", "runtime"]
// });

const path = require('path'),
      webpack = require('webpack');

var config = require('./config/config'),
    nodeModulesPath = path.join(__dirname, 'node_modules'),
    parentNodeModulePath = path.join(path.dirname(__dirname), 'node_modules');

/**
 * [nodeConfig config for backend]
 * @type {Object}
 */
var nodeConfig = {
    entry: {
        index: [path.join(config.path.node, "/asset/index.js")],
        detail: [path.join(config.path.node, "/asset/detail.js")],
        comment: [path.join(config.path.node, "/asset/comment.js")],
    },
    output: {
        publicPath: config.defaultPath,
        path: path.join(config.path.pub),
        filename: "node/[name].js",
    },
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: '/webpack_cache/',
                    plugins: [
                        'transform-decorators-legacy',
                        [
                            "transform-runtime", {
                                "polyfill": false,
                                "regenerator": true
                            }
                        ]
                    ],
                    presets: [
                        'es2015-loose', 
                        'react',
                    ]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: "ignore-loader",
            },
            // {
            //     test: /\.less$/,
            //     loader: "style-loader!css-loader!less-loader",
            //     include: [parentNodeModulePath, nodeModulesPath, path.resolve(config.path.src)]
            // },
            {
                test: /\.scss$/,
                loader: "ignore-loader",
                // include: [parentNodeModulePath, nodeModulesPath, path.resolve(config.path.src)]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ],
        noParse: [
            
        ]
    },
    resolve: {
        moduledirectories:['node_modules', config.path.src],
        extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "png", "jpg", "jpeg", "ico"],
        alias: {
            'Root': path.join(config.path.src, '/page/spa/root/Root'),
            'routes': path.join(config.path.src, '/page/spa/root/route_server'),
            'configureStore': path.join(config.path.src, '/page/spa/stores/configureStore.js'),
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
            'requestSync': path.join(config.path.node, '/common/requestSync'),
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            "isNode": true,
            "console.dev": (process.env.NODE_ENV === "__NODE_DEV__") ? 
                            function(msg) { console.log(msg); } :
                            function(msg) {}
        }),
        new webpack.BannerPlugin("module.exports = ", {entryOnly : true, raw: true}),
        // new webpack.IgnorePlugin(/\.(css|less|scss)$/)
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.NoErrorsPlugin()
    ],
    watch: true, //  watch mode
};

module.exports = nodeConfig;