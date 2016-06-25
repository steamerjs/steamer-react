if ("production" !== process.env.NODE_ENV) {
	window.console.dev = function(msg) {
		console.log(msg);
	};
	module.exports = require('./Root.dev');
}
else {
	module.exports = require('./Root.prod');
}
