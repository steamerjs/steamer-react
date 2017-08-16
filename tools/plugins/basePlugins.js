`use strict`;

const path = require('path'),
	  os = require('os');

var UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
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
	        plugins.push(new UglifyJSPlugin({
	        	parallel: {
			    	cache: true,
			    	workers: os.cpus().length,
			    },
			    warnings: true,
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