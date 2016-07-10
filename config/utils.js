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
	}
};