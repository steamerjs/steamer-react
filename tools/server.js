var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var proxy = require('http-proxy-middleware');

var webpackConfig = require("./webpack.base.js"),
	config = require("../config/project"),
	configWebpack = config.webpack,
	port = configWebpack.port,
	route = Array.isArray(configWebpack.route) ? configWebpack.route : [configWebpack.route],
	apiPort = configWebpack['api-port'],
	apiRoute = configWebpack['api-route'];

for (var key in webpackConfig.entry) {
	webpackConfig.entry[key].unshift('webpack-hot-middleware/client?reload=true&dynamicPublicPath=true&path=__webpack_hmr')
	webpackConfig.entry[key].unshift('react-hot-loader/patch');
}

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	stats: { 
		colors: true 
	},
	publicPath: configWebpack.webserver
}));
app.use(webpackHotMiddleware(compiler));

// 静态资源转发
route.forEach((rt) => {
	app.use(rt, proxy({target: `http://127.0.0.1:${port}`, pathRewrite: {[`^${rt}`] : '/'}}));
});

// 后台转发
apiRoute.forEach((rt) => {
	app.use(rt, proxy({target: `http://127.0.0.1:${apiPort}`}));
});

app.listen(port, function(err) {
	if (err) {
		console.error(err);
	}
	else {
		console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});