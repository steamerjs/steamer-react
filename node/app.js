'use strict';


const koa = require('koa');
const mount = require('koa-mount');
const logger = require('koa-logger');
const render = require('koa-swig');
const serve = require('koa-static');
const router = require('./config/router');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const path = require('path');
const app = koa();

// 指向静态文件夹
console.log(path.resolve(path.resolve('view/')));
app.context.render = render({
	root: path.resolve(path.resolve('view/')),
	autoescape: true,
	cache: false,
	ext: 'html'
});

// 处理静态文件
app.use(serve(path.resolve('static/')));

//使用logger日志库
app.use(logger());

app.use(bodyParser());

//路由处理，首页指定用index函数处理，但需要先经过validate函数校验
app.use(mount('/', router.RULE));

// 监听3001端口
var port = 3001;
app.listen(port, function(err) {
	if (err) {
		console.error(err);
	}
	else {
		console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
