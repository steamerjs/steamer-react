const path = require('path');
const webpack = require('webpack');
let config = require('../config/project');
let configWebpack = config.webpack;

let isProduction = config.env === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        vendors: configWebpack.dll.entry
    },
    output: {
        path: path.join(configWebpack.path.src, 'libs'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
    },
    plugins: [
        new webpack.DllPlugin({
            context: configWebpack.path.src,
            path: './tools/manifest.dll.json',
            name: '[name]'
        })
    ]
};
