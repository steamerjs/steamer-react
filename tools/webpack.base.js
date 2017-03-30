'use strict';

const path = require('path'),
      os = require('os'),
      utils = require('steamer-webpack-utils'),
      webpack = require('webpack'),
      webpackMerge = require('webpack-merge');

var config = require('../config/project'),
    configWebpack = config.webpack,
    configWebpackMerge = config.webpackMerge,
    configCustom = config.custom,
    env = process.env.NODE_ENV,
    isProduction = env === 'production';

var Clean = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require("copy-webpack-plugin-hash"),
    SpritesmithPlugin = require('webpack-spritesmith'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    UglifyJsParallelPlugin = require('webpack-uglify-parallel');

var baseConfig = {
    context: configWebpack.path.src,
    entry: configWebpack.entry,
    output: {
        publicPath: isProduction ? configWebpack.cdn : configWebpack.webserver,
        path: isProduction ? path.join(configWebpack.path.dist, configWebpack.path.distCdn) : configWebpack.path.dev,
        filename: configWebpack.chunkhashName + ".js",
        chunkFilename: "chunk/" + configWebpack.chunkhashName + ".js",
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    // verbose: false,
                    cacheDirectory: './.webpack_cache/',
                    presets: [
                        ["es2015", {"loose": true}],
                        'react',
                    ]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader",
                options: {
                    limit: 1000,
                    name: "img/[path]/" + configWebpack.hashName + ".[ext]"
                },
            },
            {
                test: /\.ico$/,
                loader: "url-loader",
                options: {
                    name: "[name].[ext]"
                },
            },
        ],
    },
    resolve: {
        modules: [
            configWebpack.path.src,
            "node_modules",
            path.join(configWebpack.path.src, "css/sprites")
        ],
        extensions: [".js", ".jsx", ".css", ".scss", ".less", ".styl", ".png", ".jpg", ".jpeg", ".ico", ".ejs", ".pug", ".handlebars", "swf"],
        alias: {}
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    watch: isProduction ? false : true,
    devtool: isProduction ? configWebpack.sourceMap.production : configWebpack.sourceMap.development
};

if (isProduction) {
    baseConfig.plugins.push(new webpack.DefinePlugin(configWebpack.injectVar));
    baseConfig.plugins.push(new WebpackMd5Hash());

    if (configWebpack.compress) {
        baseConfig.plugins.push(new UglifyJsParallelPlugin({
            workers: os.cpus().length, // usually having as many workers as cpu cores gives good results 
            // other uglify options 
            compress: {
                warnings: false,
            },
        }));
    }
}
else {
    baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (configWebpack.clean) {
    baseConfig.plugins.push(new Clean([isProduction ? configWebpack.path.dist : configWebpack.path.dev], {root: path.resolve()}));
}

configWebpack.static.forEach((item) => {
    baseConfig.plugins.push(new CopyWebpackPlugin([{
        from: item.src,
        to: (item.dist || item.src) + (item.hash ? configWebpack.hashName : "[name]") + '.[ext]'
    }]));
});

configWebpack.sprites = (configWebpack.spriteMode === "none") ? [] : configWebpack.sprites;

configWebpack.sprites.forEach(function(sprites) {
    let style = configWebpack.spriteStyle,
        extMap = {
            stylus: "styl",
            less: "less"
        },
        spriteMode = configWebpack.spriteMode,
        retinaTpl = (spriteMode === "retinaonly")? "_retinaonly" : "";


    let spritesConfig = {
        src: {
            cwd: sprites.path,
            glob: '*.png'
        },
        target: {
            image: path.join(configWebpack.path.src, "css/sprites/" + sprites.key + ".png"),
            css: path.join(configWebpack.path.src, "css/sprites/" + sprites.key + "." + extMap[style]),
        },
        spritesmithOptions: {
            padding: 10
        },
        apiOptions: {
            cssImageRef: "~" + sprites.key + ".png"
        }
    };

    if (spriteMode === "retinaonly") {
        spritesConfig.customTemplates = {
            [style]: path.join(__dirname, '../tools/', './sprite-template/' + style + retinaTpl + '.template.handlebars')
        };
    }
    else {
        spritesConfig.cssTemplate = style + retinaTpl + ".template.handlebars";
    }

    if (spriteMode === "retina") {
        spritesConfig.retina = "@2x";
    }

    baseConfig.plugins.push(new SpritesmithPlugin(spritesConfig));
});

var userConfig = {
    output: configCustom.getOutput(),
    module: configCustom.getModule(),
    resolve: configCustom.getResolve(),
    externals: configCustom.getExternals(),
    plugins: configCustom.getPlugins(),
};

var otherConfig = configCustom.getOtherOptions();

for (let key in otherConfig) {
    userConfig[key] = otherConfig[key];
}

baseConfig = configWebpackMerge.mergeProcess(baseConfig);

var webpackConfig = webpackMerge.smartStrategy(
    configWebpackMerge.smartStrategyOption
)(baseConfig, userConfig);

// console.log(JSON.stringify(webpackConfig, null, 4));

module.exports = webpackConfig;