'use strict';

process.env.NODE_ENV = "__PROD__";

var webpack = require('webpack');

    var fs = require('fs');

var compiler = webpack(require('./webpack.dev'));
compiler.run(function(err, stats) {
    if (!err) {
        const jsonStats = stats.toJson();
        // print asset stats
        // fs.writeFileSync("stats.txt", JSON.stringify(jsonStats, " " , 4))
        
        console.log(stats.toString({
            cached: true,
            chunks: false, // Makes the dist much quieter
            colors: true,
            children: false, // supress some plugin output
        }));

        if (jsonStats.errors.length > 0) {
            console.log('Webpack compiler encountered errors.')
            console.log(jsonStats.errors.join('\n'))
            // return reject(new Error('Webpack compiler encountered errors'))
        } else if (jsonStats.warnings.length > 0) {
            console.log('Webpack compiler encountered warnings.')
            debug(jsonStats.warnings.join('\n'))
        }
    }
    else {
        console.log(err);
    }
});