var PostcssImport = require('postcss-import'),
	Autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
    	PostcssImport(),
    	Autoprefixer() 
  	]
};