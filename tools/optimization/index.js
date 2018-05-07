let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function(config, webpack) {
    let configWebpack = config.webpack;
    let optimization = {
        minimizer: []
    };

    if (configWebpack.compress) {
        optimization.minimizer.push(new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
        }));
        optimization.minimizer.push(
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    reduceIdents: false,
                    autoprefixer: false,
                },
            })
        );
    }

    return optimization;
};
