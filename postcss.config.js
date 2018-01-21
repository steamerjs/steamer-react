var config = require('./config/project');
var PostcssImport = require('postcss-import');
var Autoprefixer = require('autoprefixer');
var Precss = require('precss');
var PostcssAsset = require('postcss-assets');

module.exports = {
	plugins: [
    	PostcssImport({
            path: [config.webpack.path.src]
        }),
        Precss(),
        Autoprefixer(),
        PostcssAsset()
  	]
};
