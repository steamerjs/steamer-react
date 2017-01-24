var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var proxy = require('proxy-middleware');

var webpackConfig = require("./webpack.dev.js"),
	config = require("../config/project");
var port = config.port;

for (var key in webpackConfig.entry) {
	webpackConfig.entry[key].unshift('webpack-hot-middleware/client');
	webpackConfig.entry[key].unshift('react-hot-loader/patch');
}

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    hot: true,
	historyApiFallback: true,
	noInfo: true,
	stats: { 
		colors: true 
	},
}));
app.use(webpackHotMiddleware(compiler));
// 前端转发
app.use(config.route, proxy('http://localhost:' + port));
// 后台转发
app.use('/api/', proxy('http://localhost:3001'));

app.listen(port, function(err) {
	if (err) {
		console.error(err);
	}
	else {
		console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});