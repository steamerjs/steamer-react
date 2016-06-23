'use strict';

const fs = require('fs'),
	  path = require('path');

module.exports = {
	getHtmlFile: function(srcPath) {
		// read html filename from 
		var srcFiles = fs.readdirSync(srcPath);

		srcFiles = srcFiles.filter((item, index) => {
		    return !!~item.indexOf('.html');
		});

		srcFiles = srcFiles.map((item, index) => {
		    return item.replace('.html', '');
		});

		return srcFiles;
	},
	getAliasPath: function(parentFolder, childFolder, pathName) {
		// get alias path, may from parent node_module / child node_module
		let modulePath = path.join(parentFolder, pathName);

		if (fs.existsSync(modulePath + '.js') || fs.existsSync(path.join(modulePath, 'index.js'))) {
			return modulePath;
		}

		return path.join(childFolder, pathName);
	}
};