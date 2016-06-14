if ("production" !== process.env.NODE_ENV) {
	window.console.dev = function(msg) {
		console.log(msg);
	};
	module.exports = require('./Root.dev');
}
else {
	window.console.dev = function(msg) {};
	module.exports = require('./Root.prod');
}
