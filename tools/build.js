'use strict';

process.env.NODE_ENV = "__PROD__";

var webpack = require('webpack'),
	config = require('./config');

var compiler = webpack(require('./webpack.prod'));
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