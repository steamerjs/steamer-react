'use strict';

var project = require('../config/project'),
	pkgJson = require('../package.json'),
	merge = require('lodash.merge'),
	spawnSync = require('child_process').spawnSync;

// console.log(project.webpack.style);
// console.log(project.webpack.template);

var dependencies = merge({}, pkgJson.dependencies, pkgJson.devDependencies);

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

// console.log(dependencies);

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

console.log(cmd);

if (cmd) {
	spawnSync("npm", ['install', "--save-dev", cmd], { stdio: 'inherit', shell: true });
}

