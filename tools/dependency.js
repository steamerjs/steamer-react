'use strict';

var project = require('../config/project'),
	pkgJson = require('../package.json'),
	merge = require('lodash.merge'),
	spawnSync = require('child_process').spawnSync,
	utils = require('steamer-webpack-utils');

var dependency = {
	template: {
		html: {
			'html-loader': '^0.4.5'
		},
		handlebars: {
			'handlebars-loader': '^1.5.0',
			'handlebars': '^4.0.10',
		},
		pug: {
			'pug-loader': '^2.3.0',
			'pug': '^2.0.0-rc.2'
		},
		ejs: {
			'ejs-compiled-loader': '^1.1.0',
			'ejs': '^2.5.6',
		}

	},
	style: {
		css: {
			'style-loader': '^0.18.2',
			'css-loader': "^0.28.4",
		},
		less: {
			'style-loader': '^0.18.2',
			'css-loader': "^0.28.4",
			"less": "^2.7.2",
    		"less-loader": "^4.0.4",
		},
		sass: {
			'style-loader': '^0.18.2',
			'css-loader': "^0.28.4",
			"node-sass": "^4.5.3",
    		"sass-loader": "^6.0.6",
		},
		scss: {
			'style-loader': '^0.18.2',
			'css-loader': "^0.28.4",
			"node-sass": "^4.5.3",
    		"sass-loader": "^6.0.6",
		},
		stylus: {
			'style-loader': '^0.18.2',
			'css-loader': "^0.28.4",
			"stylus": "^0.54.5",
    		"stylus-loader": "^3.0.1",
		}
	}
};


module.exports = {
	installDependency: function() {
		var dependencies = merge({}, pkgJson.dependencies, pkgJson.devDependencies);

		var installDep = {},
			cmd = '';

		project.webpack.template.forEach((item1) => {
			let dep = dependency['template'][item1] || {};
			Object.keys(dep).forEach((item2) => {
				if (!dependencies[item2]) {
					installDep[item2] = dependency['template'][item1][item2];
				}
			});
		});

		project.webpack.style.forEach((item1) => {
			let dep = dependency['style'][item1] || {};
			Object.keys(dep).forEach((item2) => {
				if (!dependencies[item2]) {
					installDep[item2] = dependency['style'][item1][item2];
				}
			});
		});

		Object.keys(installDep).forEach((item) => {
			cmd += (item + '@' + installDep[item] + ' ');
		});

		if (cmd) {
			utils.info("Start installing missing dependencies. Please wait......");
			spawnSync("npm", ['install', "--save-dev", cmd], { stdio: 'inherit', shell: true });
			utils.info("Dependencies installation complete. Please run your command again.");
			return true;
		}
		else {
			return false;
		}
	}
};

