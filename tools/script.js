const webpack = require('webpack');

let isProduction = process.env.NODE_ENV === 'production';

const feature = require('./feature/feature');

if (feature.installDependency()) {
    return;
}

if (!isProduction) {
    require('./server');
}
else if (isProduction) {

    compilerRun(require('./webpack.base'));
}

function compilerRun(config) {
    let compiler = webpack(config);

    compiler.run(function(err, stats) {
        if (!err) {
            console.log(stats.toString({
                assets: true,
                cached: false,
                colors: true,
                children: false,
                errors: true,
                warnings: true,
                version: true,
                modules: false,
                publicPath: true,
            }));
        }
        else {
            console.log(err);
        }
    });
}
