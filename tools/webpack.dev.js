'use strict';

const path = require('path'),
      utils = require('steamer-webpack-utils'),
      webpack = require('webpack');

var config = require('../config/project'),
    configWebpack = config.webpack;

var HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    Clean = require('clean-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin-steamer"),
    CopyWebpackPlugin = require("copy-webpack-plugin-hash"),
    HappyPack = require('happypack'),
    SpritesmithPlugin = require('webpack-spritesmith'),
    PostcssImport = require('postcss-import'),
    Autoprefixer = require('autoprefixer');

var devConfig = {
    entry: configWebpack.entry,
    output: {
        publicPath: config.webserver,
        path: path.join(configWebpack.path.dev),
        filename: "[name].js",
        chunkFilename: "chunk/[name].js",
    },
    module: {
        loaders: [
            // { 
            //     test: /\.js$/,
            //     loaders: ['react-hot'],
            //     exclude: /node_modules/,
            // },
            { 
                test: /\.jsx$/,
                loader: 'happypack/loader?id=jsxHappy',
                // loader: 'babel',
                // query: {
                //     cacheDirectory: './.webpack_cache/',
                //     "plugins": [
                //         ["transform-decorators-legacy"],
                //         ["transform-react-jsx", { "pragma":"preact.h" }]
                //     ],
                //     presets: [
                //         'es2015-loose', 
                //     ]
                // },
                exclude: /node_modules/,
            },
            { 
                test: /\.js$/,
                loader: 'happypack/loader?id=jsHappy',
                // loader: 'babel',
                // query: {
                //     cacheDirectory: './.webpack_cache/',
                //     plugins: ['transform-decorators-legacy'],
                //     presets: [
                //         'es2015-loose', 
                //         'react',
                //     ]
                // },
                exclude: /node_modules/,
            },
            // {
            //     test: /\.css$/,
            //     // 单独抽出样式文件
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
            //     include: path.resolve(configWebpack.path.src)
            // },
            {
                test: /\.less$/,
                loader: "happypack/loader?id=lessHappy",         
                //ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
                // include: [path.resolve(configWebpack.path.src), 'node_modules'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "url-loader?limit=1000&name=img/[path]/[name].[ext]",
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
            'scroll': 'react-list-scroll/lib/',
            'scroll-p': path.join(configWebpack.path.src, '/page/common/components/scroll/index-p.js'),
            'pure-render-decorator': 'pure-render-deepCompare-decorator/lib/',
        }
    },
    plugins: [
        // remove previous dev folder
        new Clean(['dev'], {root: path.resolve()}),
        new CopyWebpackPlugin([
            {
                from: 'src/libs/',
                to: 'libs/[name].[ext]'
            }
        ]),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HappyPack({
            id: 'lessHappy',
            verbose: false,
            loaders: ['style!css?localIdentName=[name]-[local]-[hash:base64:5]!postcss!less?root=' + path.resolve('src')],
        }),
        new HappyPack({
            id: 'jsxHappy',
            verbose: false,
            loaders: [{
                path: 'babel',
                query: {
                    cacheDirectory: './.webpack_cache/',
                    "plugins": [
                        ["transform-decorators-legacy"],
                        ["transform-react-jsx", { "pragma":"preact.h" }]
                    ],
                    presets: [
                        ["es2015", {"loose": true}]
                    ]
                },
            }]
        }),
        new HappyPack({
            id: 'jsHappy',
            verbose: false,
            loaders: [{
                path: 'babel',
                query: {
                    cacheDirectory: './.webpack_cache/',
                    plugins: [
                        'react-hot-loader/babel',
                        'transform-decorators-legacy'
                    ],
                    presets: [
                        ["es2015", {"loose": true}],
                        'react',
                    ]
                },
            }],
        }),
        new ExtractTextPlugin("./css/[name].css", {filenamefilter: function(filename) {
            // 由于entry里的chunk现在都带上了js/，因此，这些chunk require的css文件，前面也会带上./js的路径
            // 因此要去掉才能生成到正确的路径/css/xxx.css，否则会变成/css/js/xxx.css
            return filename.replace('/js', '');
        }, disable: true}),
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
        favicon: "src/favicon.ico",
        // chunks: configWebpack.htmlres.dev[page],
        htmlMinify: null,
        entryLog: !key ? true : false,
        templateContent: function(tpl) {
            var regex = new RegExp("<script.*src=[\"|\']*(.+).*?[\"|\']><\/script>", "ig");
            tpl = tpl.replace(regex, function(script, route) {
                if (!!~script.indexOf('react.js') || !!~script.indexOf('react-dom.js')) {
                    return '';
                }
                return script;
            });
            return tpl;
        }
    });
}); 

configWebpack.sprites.forEach(function(folder) {
    utils.addPlugins(devConfig, SpritesmithPlugin, {
        src: {
            cwd: path.join(configWebpack.path.src, "img/sprites/" + folder),
            glob: '*.png'
        },
        target: {
            image: path.join(configWebpack.path.src, "css/sprites/sprite-" + folder + ".png"),
            css: path.join(configWebpack.path.src, "css/sprites/sprite-" + folder + ".less")
        },
        spritesmithOptions: {
            padding: 10
        },
        customTemplates: {
            'less': path.resolve(__dirname, './sprite-template/less.template.handlebars'),
        },
        apiOptions: {
            cssImageRef: "sprite-" + folder + ".png"
        }
    });
});

module.exports = devConfig;