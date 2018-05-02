const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

let config = require('../config/project');
let configWebpack = config.webpack;
let configWebpackMerge = config.webpackMerge;
let configCustom = config.custom;
let isProduction = config.env === 'production';

let baseConfig = {
    mode: isProduction ? 'production' : 'development',
    context: configWebpack.path.src,
    entry: configWebpack.entry,
    output: {
        publicPath: isProduction ? configWebpack.cdn : configWebpack.webserver,
        path: isProduction ? configWebpack.path.dist : configWebpack.path.dev,
        filename: `js/${configWebpack.chunkhashName}.js`,
        chunkFilename: 'chunk/' + configWebpack.chunkhashName + '.js'
    },
    module: {
        rules: []
    },
    resolve: {
        modules: [
            configWebpack.path.src,
            'node_modules',
            path.join(configWebpack.path.src, 'css/sprites')
        ],
        extensions: [
            '.ts', '.tsx', '.js', '.jsx', '.css', '.scss', 'sass', '.less', '.styl',
            '.png', '.jpg', '.jpeg', '.ico', '.ejs', '.pug', '.art', '.handlebars', 'swf', 'svg',
        ],
        // alias: {}
    },
    plugins: [],
    optimization: {},
    watch: !isProduction,
    devtool: isProduction ? configWebpack.sourceMap.production : configWebpack.sourceMap.development,
    performance: {
        hints: isProduction ? 'warning' : false,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js') || assetFilename.endsWith('.css');
        }
    }
};

/** *********** 处理脚手架基础rules & plugins *************/
let rules = fs.readdirSync(path.join(__dirname, 'rules'));
let plugins = fs.readdirSync(path.join(__dirname, 'plugins'));

let baseConfigRules = [];
let baseConfigPlugins = [];

rules.forEach((rule) => {
    baseConfigRules = baseConfigRules.concat(require(`./rules/${rule}`)(config));
});

plugins.forEach((plugin) => {
    baseConfigPlugins = baseConfigPlugins.concat(require(`./plugins/${plugin}`)(config, webpack));
});

baseConfig.module.rules = baseConfigRules;
baseConfig.plugins = baseConfigPlugins;
baseConfig.optimization = require('./optimization')(config, webpack);

// console.log(rules, plugins);

/** *********** base 与 user config 合并 *************/
let userConfig = {
    output: configCustom.getOutput(),
    module: configCustom.getModule(),
    resolve: configCustom.getResolve(),
    externals: configCustom.getExternals(),
    plugins: configCustom.getPlugins(),
};

let otherConfig = configCustom.getOtherOptions();

for (let key in otherConfig) {
    if (otherConfig.hasOwnProperty(key)) {
        userConfig[key] = otherConfig[key];
    }
}

baseConfig = configWebpackMerge.mergeProcess(baseConfig);

let webpackConfig = webpackMerge.smartStrategy(
    configWebpackMerge.smartStrategyOption
)(baseConfig, userConfig);

// console.log(JSON.stringify(webpackConfig, null, 4));

module.exports = webpackConfig;
