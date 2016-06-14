var path = require('path');
var webpack = require('webpack');
/**
 * [config basic configuration]
 * @type {Object}
 */
var config = {
    html: ['index', 'spa'],
    env: process.env.NODE_ENV,
    path: {
        src: path.resolve(__dirname, "src"),
        dist: path.resolve(__dirname, "dist"),
        pub: path.resolve(__dirname, "pub"),
    },
    chunkhash: (process.env.NODE_ENV) ? "-[chunkhash:6]" : "",
    hash: (process.env.NODE_ENV) ? "-[hash:6]" : "",
    defaultPath: "//localhost:9000/",
    cdn: "//localhost:8000/"
};
var nodeModulesPath = path.join(__dirname, 'node_modules');

var HtmlResWebpackPlugin = require('html-res-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var WebpackMd5Hash = require('webpack-md5-hash');


/**
 * [devConfig config for development mode]
 * @type {Object}
 */
var devConfig = {
    entry: {
        index: [path.join(config.path.src, "/page/index/main.js")],
        spa: [path.join(config.path.src, "/page/spa/main.js")],
    },
    output: {
        publicPath: config.defaultPath,
        path: path.join(config.path.dist),
        filename: "js/[name]" + config.chunkhash + ".js",
        chunkFilename: "js/chunk/[name]" + config.chunkhash + ".js",
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
                loader: "style-loader!css-loader",
                include: path.resolve(config.path.src)
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
                include: [nodeModulesPath, path.resolve(config.path.src)]
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader",
                include: [nodeModulesPath, path.resolve(config.path.src)]
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
            // {
            //     test: /\.js?$/,
            //     loader: BabelRemoveDuplicatePlugin,
            // }
            // {
            //     test: require.resolve("react"),
            //     loader: 'expose?React!react'
            // },
        ],
        noParse: [
            
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "png", "jpg", "jpeg", "ico"],
        alias: {
            // 'react-dom': path.join(nodeModulesPath, '/react/lib/reactDom'),
            // 'react-dom': path.join(nodeModulesPath, '/react-dom/dist/react-dom'),
            'redux': path.join(nodeModulesPath, '/redux/dist/redux'),
            'react-redux': path.join(nodeModulesPath, '/react-redux/dist/react-redux'),
            'utils': path.join(config.path.src, '/js/common/utils'),
            'spin': path.join(config.path.src, '/js/common/spin'),
            'spinner': path.join(config.path.src, '/page/common/components/spinner/'),
            'report': path.join(config.path.src, '/js/common/report'),
            'classnames': path.join(nodeModulesPath, '/classnames'),
            // 'tab': path.join(config.path.src, '/js/common/tab'),
            'touch': path.join(config.path.src, '/page/common/components/touch/'),
            'scroll':path.join(config.path.src, '/page/common/components/scroll/'),
            'immutable-pure-render-decorator': path.join(config.path.src, '/js/common/immutable-pure-render-decorator'),
            'pure-render-decorator': path.join(config.path.src, '/js/common/pure-render-decorator'),
        }
    },
    externals: {
        // 'react': "React",
    },
    plugins: [
        new WebpackMd5Hash(),
        new CopyWebpackPlugin([
            {
                from: 'src/libs/badjs.js',
                to: 'libs/badjs.js'
            }
        ]),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("./css/[name]" + config.chunkhash + ".css"),
        new webpack.NoErrorsPlugin()
    ],
    watch: true, //  watch mode
    // devtool: "#inline-source-map",
};

devConfig.addPlugins = function(plugin, opt) {
    devConfig.plugins.push(new plugin(opt));
};

config.html.forEach(function(page) {
    devConfig.addPlugins(HtmlResWebpackPlugin, {
        filename: page + ".html",
        template: "src/" + page + ".html",
        // favicon: "src/favicon.ico",
        jsHash: "[name]" + config.chunkhash + ".js",
        cssHash:  "[name]" + config.chunkhash + ".css",
        isHotReload: (config.env === 'production') ? false : true,
        templateContent: function(tpl) {
            // 生产环境不作处理
            if (!this.options.isWatch) {
                return tpl;
            }
            // 开发环境先去掉外链react.js
            var regex = new RegExp("<script.*src=[\"|\']*(.+).*?[\"|\']><\/script>", "ig");
            tpl = tpl.replace(regex, function(script, route) {
                // console.log(script, !!~script.indexOf('react.js'));
                if (!!~script.indexOf('react.js')) {
                    return '';
                }
                return script;
            });
            return tpl;
        }, 
        // htmlMinify: null
        htmlMinify: (process.env.NODE_ENV) ? {
            removeComments: true,
            collapseWhitespace: true,
        } : null
    });
}); 

var prodConfig = {};
Object.assign(prodConfig, devConfig);

if (config.env === 'production') {
    prodConfig.output.publicPath = config.cdn;
    prodConfig.output.path = path.join(config.path.pub);

    // remove old pub folder
    prodConfig.addPlugins(Clean, ['pub']); 

    
    prodConfig.plugins[0] = new CopyWebpackPlugin([
        {
            from: 'src/libs/',
            to: 'libs/'
        }
    ]);

    // file compression
    prodConfig.addPlugins(webpack.optimize.UglifyJsPlugin, {
        compress: {
            warnings: false
        }
    });

    // inject process.env.NODE_ENV so that it will recognize if (process.env.NODE_ENV === "production")
    prodConfig.addPlugins(webpack.DefinePlugin, {
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    });

    prodConfig.addPlugins(webpack.optimize.DedupePlugin);
    prodConfig.addPlugins(webpack.optimize.OccurrenceOrderPlugin, true);

    // use production version of redux
    prodConfig.resolve.alias.redux = path.join(nodeModulesPath, '/redux/dist/redux.min');

    // extract style and make it stand-alone css file
    prodConfig.module.loaders.shift();
    prodConfig.module.loaders[1].loader = ExtractTextPlugin.extract("style-loader", "css-loader");
    prodConfig.module.loaders[2].loader = ExtractTextPlugin.extract("style-loader", "css-loader!less-loader");
    prodConfig.module.loaders[3].loader = ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader");
    prodConfig.addPlugins(ExtractTextPlugin, "./css/[name]" + config.chunkhash + ".css");
    
    // 压缩png图片
    prodConfig.module.loaders[5].loaders.push('image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}');
    // use external react library
    prodConfig.externals = Object.assign(prodConfig.externals, {
        'react': "React",
        'react-dom': "ReactDOM",
    });

    // disable watch mode
    prodConfig.watch = false;
    // do not use devtool in produciton mode
    // prodConfig.devtool = null;
    
}
else {
    // enable hot reload plugin
    devConfig.addPlugins(webpack.HotModuleReplacementPlugin);
}

module.exports = (config.env === 'production') ? prodConfig : devConfig;