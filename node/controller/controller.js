"use strict";

var data = require('../model/model');
// var hw = require('../model/db');
var requestSync = require('../common/requestSync').requestSync;
var htmlparser = require("htmlparser");
var htmlToText = require('html-to-text');
var CGI_PATH = require('../config/cgiPath');
var nodeUtils = require('../common/nodeUtils');

const fs = require('fs'),
	  path = require('path');

exports.index = function* () {
    yield* this.render('index', {content: 'tencent news'});
};

// exports.create = function* () {
// 	yield hw.insert({
// 		id: 1,
// 		content: "heyman"
// 	});
// 	this.body = "success";
// };

// exports.list = function* () {
// 	var id = this.query.id;
// 	var numPerPage = 5;
// 	var blogList = data.blogList;

// 	if (id) {
// 		blogList = blogList.slice((id - 1) * numPerPage, numPerPage * id);
// 	}

// 	this.set('Access-Control-Allow-Origin', 'http://localhost:8008');
// 	// this.set('Access-Control-Allow-Origin', 'http://localhost:9000');
// 	this.set('Access-Control-Allow-Credentials', true);
// 	this.body = {
// 		retcode: 0,
// 		data: blogList
// 	};
// };

// exports.detail = function* () {
// 	var blogDetail = data.blogDetail;
// 	var id = this.query.id;
// 	var blog = {};

// 	for (let item of blogDetail) {
// 		if (item.id == parseInt(id)) {
// 			blog = item;
// 			break;
// 		}
// 	}

// 	this.set('Access-Control-Allow-Origin', 'http://localhost:8008');
// 	// this.set('Access-Control-Allow-Origin', 'http://localhost:9000');
// 	this.set('Access-Control-Allow-Credentials', true);
// 	this.body = {
// 		retcode: 0,
// 		data: blog
// 	};
// };
// 

exports.list = function* () {
		
	let query = this.request.query,
		urlParam = '?chlid=' + query.chlid + '&refer=' + query.refer 
					+ '&otype=' + query.otype + '&callback=' + query.callback
					+ '&=t' + query.t;


	var res = yield requestSync({
		uri: CGI_PATH['GET_TOP_NEWS'] + urlParam,
		method: 'GET'
	});
	
	this.set('Access-Control-Allow-Origin', 'http://localhost:9000');
	this.set('Access-Control-Allow-Credentials', true);

	this.body = res.body;
};

exports.detail = function* () {
	var res = yield requestSync({
		uri: "http://view.inews.qq.com/a/" + this.request.body.news_id //this.request.body.url
	});

	var text = htmlToText.fromString(res.body, {
	    ignoreImage: false,
	    ignoreHref: false,
	});

	this.set('Access-Control-Allow-Origin', 'http://localhost:9000');
	this.set('Access-Control-Allow-Credentials', true);
	
	this.body = {
		ret: 0,
		content: text
	};
};

exports.comment = function* () {
		
	let query = this.request.query,
		urlParam = '?chlid=' + query.chlid + '&refer=' + query.refer 
					+ '&otype=' + query.otype + '&callback=' + query.callback
					+ '&=t' + query.t;


	var res = yield requestSync({
		uri: CGI_PATH['GET_TOP_NEWS'] + urlParam,
		method: 'GET'
	});
	
	this.set('Access-Control-Allow-Origin', 'http://localhost:9000');
	this.set('Access-Control-Allow-Credentials', true);

	this.body = res.body;
};


exports.spa = function* () {
	let dir = path.dirname(path.resolve()),
		appPath = path.join(dir, '/pub/node/index.js');


	if (fs.existsSync(appPath)) {
		var ReactRender = require(appPath);
		yield ReactRender(this.request, this.response);
		this.body = this.response.body;
	}
	else {
		this.body = "spa list";
	}
};

exports.spaDetail = function* () {
	let dir = path.dirname(path.resolve()),
		appPath = path.join(dir, '/pub/node/detail.js');


	if (fs.existsSync(appPath)) {
		var ReactRender = require(appPath);
		this.request.params = this.params;
		yield ReactRender(this.request, this.response);
		this.body = this.response.body;
	}
	else {
		this.body = "spa detail";
	}
};

exports.spaComment = function* () {
	let dir = path.dirname(path.resolve()),
		appPath = path.join(dir, '/pub/node/comment.js');


	if (fs.existsSync(appPath)) {
		var ReactRender = require(appPath);
		this.request.params = this.params;
		yield ReactRender(this.request, this.response);
		this.body = this.response.body;
	}
	else {
		this.body = "spa comment";
	}
};