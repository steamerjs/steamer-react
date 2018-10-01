let config = require('./config/project');
let PostcssImport = require('postcss-import');
let Autoprefixer = require('autoprefixer');
let PostcssAsset = require('postcss-assets');

module.exports = {
    plugins: [
        PostcssImport({
            path: [config.webpack.path.src]
        }),
        Autoprefixer(),
        PostcssAsset({
            loadPaths: [config.webpack.path.src]
        })
    ]
};
