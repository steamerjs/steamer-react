"use strict";

// 用于处理模板拷贝

const path = require('path'),
	  utils = require('steamer-webpack-utils'),
	  config = require('../config/project'),
	  configWebpack = config.webpack;

var npmArgvs = utils.getNpmArgvs();


let tpl = npmArgvs.tpl || npmArgvs.t || 'index',
	destination = npmArgvs.path || npmArgvs.p || 'index';

let destFolder = path.join(configWebpack.path.src, "page", destination),
	srcFolder = path.join(process.cwd(), "tools/template/" + tpl);

utils.copyTemplate(srcFolder, destFolder);
utils.walkAndReplace(destFolder, [".js", ".html"], {title: destination});