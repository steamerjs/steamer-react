'use strict';

const path = require('path'),
      os = require('os'),
      utils = require('steamer-webpack-utils'),
      webpack = require('webpack'),
      merge = require('lodash.merge'),
      webpackMerge = require('webpack-merge');

var config = require('../config/project'),
    configWebpack = config.webpack,
    configWebpackMerge = config.webpackMerge,
    configCustom = config.custom,
    isProduction = config.env === 'production',
    isWindows = (os.type() === 'Windows_NT');

var Clean = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin-hash'),
    SpritesmithPlugin = require('webpack-spritesmith'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    UglifyJsParallelPlugin = require('webpack-uglify-parallel'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    NameAllModulesPlugin = require('name-all-modules-plugin');

var baseConfig = {
    context: configWebpack.path.src,
    entry: configWebpack.entry,
    output: {
        publicPath: isProduction ? configWebpack.cdn : configWebpack.webserver,
        path: isProduction ? path.join(configWebpack.path.dist, configWebpack.path.distCdn) : configWebpack.path.dev,
        filename: configWebpack.chunkhashName + '.js',
        chunkFilename: 'chunk/' + configWebpack.chunkhashName + '.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: './.cache/'
                },
                exclude: /node_modules/
            },
            { 
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    'plugins': [
                        ['transform-react-jsx', { 'pragma': 'h' }]
                    ],
                    cacheDirectory: './.cache/'
                },
                exclude: /node_modules/
            },
            {
                test: /\.ico$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        modules: [
            configWebpack.path.src,
            'node_modules',
            path.join(configWebpack.path.src, 'css/sprites')
        ],
        extensions: ['.js', '.jsx', '.css', '.scss', 'sass', '.less', '.styl', '.png', '.jpg', '.jpeg', '.ico', '.ejs', '.pug', '.handlebars', 'swf'],
        alias: {}
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new NameAllModulesPlugin()
    ],
    watch: !isProduction,
    devtool: isProduction ? configWebpack.sourceMap.production : configWebpack.sourceMap.development
};

/** *********** loaders 处理 *************/
// 样式loader
var commonLoaders = [
    {
        loader: 'cache-loader',
        options: {
            // provide a cache directory where cache items should be stored
            cacheDirectory: path.resolve('.cache')
        }
    },
    {
        loader: 'css-loader',
        options: {
            localIdentName: '[name]-[local]-[hash:base64:5]',
            module: config.webpack.cssModule,
            autoprefixer: true
        }
    },
    { 
        loader: 'postcss-loader' 
    }
];

var styleRules = {
    css: {
        test: /\.css$/,
        // 单独抽出样式文件
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: commonLoaders
        }),
        include: path.resolve(config.webpack.path.src)
    },
    less: {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: merge([], commonLoaders).concat([{
                loader: 'less-loader'
            }])
        })
    },
    stylus: {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: merge([], commonLoaders).concat([{
                loader: 'stylus-loader'
            }])
        })
    },
    sass: {
        test: /\.s(a|c)ss$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: merge([], commonLoaders).concat([{
                loader: 'sass-loader'
            }])
        })
    }
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
        loader: 'handlebars-loader' 
    },  
    ejs: {
        test: /\.ejs$/,
        loader: 'ejs-compiled-loader',
        query: {
            'htmlmin': true, // or enable here  
            'htmlminOptions': {
                removeComments: true
            }
        }
    }
};

// js方言
var jsRules = {
    ts: {
        test: /\.(tsx|ts)$/,
        loader: 'awesome-typescript-loader'
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

configWebpack.js.forEach((tpl) => {
    let rule = jsRules[tpl] || '';

    rule && baseConfig.module.rules.push(rule);
});

let imageLoader = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
        {
            loader: 'url-loader',
            query: {
                publicPath: isProduction ? configWebpack.imgCdn : configWebpack.webserver,
                limit: 1000,
                name: 'img/[path]/' + configWebpack.hashName + '.[ext]'
            }
        }
    ]
};

baseConfig.module.rules.push(imageLoader);

/** *********** plugins 处理 *************/
if (isProduction) {
    baseConfig.plugins.push(new webpack.DefinePlugin(configWebpack.injectVar));
    baseConfig.plugins.push(new WebpackMd5Hash());

    if (configWebpack.compress) {
        baseConfig.plugins.push(new UglifyJsParallelPlugin({
            workers: os.cpus().length, // usually having as many workers as cpu cores gives good results 
            // other uglify options 
            compress: {
                warnings: true
            }
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
        to: (item.dist || item.src) + (item.hash ? configWebpack.hashName : '[name]') + '.[ext]'
    }]));
});

configWebpack.sprites = (configWebpack.spriteMode === 'none') ? [] : configWebpack.sprites;

configWebpack.sprites.forEach(function(sprites) {
    let style = configWebpack.spriteStyle,
        extMap = {
            stylus: 'styl',
            less: 'less',
            sass: 'sass',
            scss: 'scss'
        },
        spriteMode = (~sprites.key.indexOf('_retina')) ? 'retinaonly' : configWebpack.spriteMode,
        retinaTplMap = {
            retinaonly: '_retinaonly',
            'normal': '',
            'retina': '_retina'
        },
        retinaTpl = retinaTplMap[spriteMode] || '';

    let spritesConfig = {
        src: {
            cwd: sprites.path,
            glob: '*.png'
        },
        target: {
            image: path.join(configWebpack.path.src, 'css/sprites/' + sprites.key + '.png'),
            css: [
                [
                    path.join(configWebpack.path.src, 'css/sprites/' + sprites.key + '.' + extMap[style]),
                    {format: sprites.key}
                ]
            ]
        },
        spritesmithOptions: {
            padding: 10
        },
        apiOptions: {
            cssImageRef: '~' + sprites.key + '.png'
        }
    };

    spritesConfig.customTemplates = {
        [sprites.key]: path.join(__dirname, '../node_modules/', './spritesheet-templates-steamer/lib/templates/' + style + retinaTpl + '.template.handlebars')
    };

    if (spriteMode === 'retina') {
        spritesConfig.retina = '@2x';
    }

    baseConfig.plugins.push(new SpritesmithPlugin(spritesConfig));
});

/** *********** base 与 user config 合并 *************/
var userConfig = {
    output: configCustom.getOutput(),
    module: configCustom.getModule(),
    resolve: configCustom.getResolve(),
    externals: configCustom.getExternals(),
    plugins: configCustom.getPlugins()
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