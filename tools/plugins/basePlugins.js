`use strict`;

const path = require('path'),
	  os = require('os');

var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	ManifestPlugin = require('webpack-manifest-plugin');

module.exports = function(config, webpack) {

	var configWebpack = config.webpack,
		isProduction = config.env === 'production';

	var plugins = [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin(configWebpack.injectVar)
	];

	if (isProduction) {

		if (configWebpack.compress) {
	        plugins.push(new ParallelUglifyPlugin({
	            cacheDir: path.resolve('.cache'), 
	            workerCount: os.cpus().length,
	            uglifyJS: {
	                warnings: true
	            },
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