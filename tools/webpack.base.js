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
    UglifyJsParallelPlugin = require('webpack-uglify-parallel'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    NpmInstallPlugin  = require('npm-install-webpack-plugin-steamer');

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
                    cacheDirectory: './.webpack_cache/',
                },
                exclude: /node_modules/,
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
        new NpmInstallPlugin({
            // Use --save or --save-dev
            dev: true,
            // Install missing peerDependencies
            peerDependencies: true,
            // Reduce amount of console logging
            quiet: false,
        })
    ],
    watch: isProduction ? false : true,
    devtool: isProduction ? configWebpack.sourceMap.production : configWebpack.sourceMap.development
};

/************* loaders 处理 *************/
// 样式loader
var styleRules = {
    css: {
        test: /\.css$/,
        // 单独抽出样式文件
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        root: config.webpack.path.src,
                        module: config.webpack.cssModule,
                        autoprefixer: true,
                    }
                },
                { loader: 'postcss-loader' },
            ]
        }),
        include: path.resolve(config.webpack.path.src)
    },
    less: {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        module: config.webpack.cssModule,
                        autoprefixer: true,
                    }
                },
                { loader: 'postcss-loader' },
                {
                    loader:  'less-loader',
                    options: {
                        paths: [
                            config.webpack.path.src,
                            "node_modules"
                        ]
                    }
                }
            ]
        }),
    },
    stylus: {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        module: config.webpack.cssModule,
                        autoprefixer: true,
                    }
                },
                { loader: 'postcss-loader' },
                { 
                    loader:  'stylus-loader',
                    options: {
                        paths: [
                            config.webpack.path.src,
                            "node_modules"
                        ]
                    }
                },
            ]
        }),
    },
    sass: {
        test: /\.s(a|c)ss$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        module: config.webpack.cssModule,
                        autoprefixer: true,
                    }
                },
                { loader: 'postcss-loader' },
                { 
                    loader:  'sass-loader',
                    options: {
                        includePaths: [
                            config.webpack.path.src,
                            "node_modules"
                        ]
                    }
                },
            ]
        }),
    },
};

// 模板loader
var templateRules = {
    html: {
        test: /\.html$/,
        loader: 'html-loader'
    },
    pug: {
        test: /\.pug$/, 
        loader: 'pug-loader'
    },
    handlebars: { 
        test: /\.handlebars$/, 
        loader: "handlebars-loader" 
    },  
    ejs: {
        test: /\.ejs$/,
        loader: "ejs-compiled-loader",
        query: {
            'htmlmin': true, // or enable here  
            'htmlminOptions': {
                removeComments: true
            }
        }
    }
};

configWebpack.style.forEach((style) => {
    style = (style === 'scss') ? 'sass' : style;
    let rule = styleRules[style] || '';
    rule && baseConfig.module.rules.push(rule);
});

configWebpack.template.forEach((tpl) => {
    let rule = templateRules[tpl] || '';
    rule && baseConfig.module.rules.push(rule);
});

let imageLoader = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
        {
            loader: "url-loader",
            query: {
                limit: 1000,
                name: "img/[path]/" + configWebpack.hashName + ".[ext]"
            },
        },
    ]
};

if (isProduction) {
    // 生产环境下图片压缩
    
    if (configWebpack.imgCompress) {
        imageLoader.loaders.push(
            {
                loader: 'image-webpack-loader',
                options: {
                    gifsicle: {
                        interlaced: false,
                    },
                    optipng: {
                        optimizationLevel: 7,
                    },
                    pngquant: {
                        quality: '65-90',
                        speed: 4
                    },
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    }
                }
            }
        );
    }
}

baseConfig.module.rules.push(imageLoader);

/************* plugins 处理 *************/
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
            less: "less",
            sass: "sass",
            scss: "scss"
        },
        spriteMode = (!!~sprites.key.indexOf('_retina')) ? "retinaonly" : configWebpack.spriteMode,
        retinaTplMap = {
            retinaonly: "_retinaonly",
            "normal": "",
            "retina": "_retina",
        },
        retinaTpl = retinaTplMap[spriteMode] || "";


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

    spritesConfig.customTemplates = {
        [sprites.key]: path.join(__dirname, '../node_modules/', './spritesheet-templates-steamer/lib/templates/' + style + retinaTpl + '.template.handlebars')
    };

    if (spriteMode === "retina") {
        spritesConfig.retina = "@2x";
    }

    baseConfig.plugins.push(new SpritesmithPlugin(spritesConfig));
});

/************* base 与 user config 合并 *************/
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