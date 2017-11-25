const os = require('os');

let UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    ManifestPlugin = require('webpack-manifest-plugin');

module.exports = function(config, webpack) {

    let configWebpack = config.webpack,
        isProduction = config.env === 'production';

    let plugins = [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin(configWebpack.injectVar)
    ];

    if (isProduction) {

        if (configWebpack.compress) {
            plugins.push(new UglifyJSPlugin({
                cache: true,
                parallel: os.cpus().length,
                uglifyOptions: {
                    warnings: false,
                }
            }));
        }

        if (configWebpack.manifest) {
            plugins.push(new ManifestPlugin());
        }
    }
    else {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
};
