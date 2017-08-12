`use strict`;

const path = require('path'),
	  os = require('os');

var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

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

	    var useCdn = configWebpack.useCdn || true;

	    if (useCdn) {
	        plugins.push(new FileWebpackPlugin({
	            'after-emit': [
	                {
	                    from: path.join(configWebpack.path.dist, '**/*'),
	                    to: path.join(configWebpack.path.dist, 'cdn/'),
	                    action: 'move',
	                    options: {
	                        cwd: configWebpack.path.dist,
	                        absolute: true,
	                        ignore: [
	                            '*.html',
	                            '**/*.html'
	                        ]
	                    }
	                },
	                {
	                    from: path.join(configWebpack.path.dist, '*.html'),
	                    to: path.join(configWebpack.path.dist, 'webserver/'),
	                    action: 'move',
	                    options: {
	                        cwd: configWebpack.path.dist,
	                        absolute: true,
	                    }
	                }
	            ]
	        }));
	    }
	}
	else {
		plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	return plugins;
};