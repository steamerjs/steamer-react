'use strict';

var webpack = require('webpack'),
	config = require('./config'),
	isProduction = (config.env === '__PROD__');
	// gutil = require('gulp-util');


if (isProduction) {
	var compiler = webpack(require('./webpack.pub'));
	compiler.run(function(err, stats) {
	    if (!err) {
	    	console.log(stats.toString({
	            chunks: false, // Makes the build much quieter
	            colors: true
	        }));
	    }
	    else {
	    	console.log(err);
	    }
	});
}
else {
	require('./webpack.server');
}