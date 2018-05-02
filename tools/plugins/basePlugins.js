const os = require('os');

let ManifestPlugin = require('webpack-manifest-plugin');

module.exports = function(config, webpack) {

    let configWebpack = config.webpack;
    let isProduction = config.env === 'production';

    let plugins = [
        new webpack.DefinePlugin(configWebpack.injectVar)
    ];

    if (isProduction) {
        if (configWebpack.manifest) {
            plugins.push(new ManifestPlugin());
        }
    }
    else {
        plugins.push(new webpack.NoEmitOnErrorsPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
};
