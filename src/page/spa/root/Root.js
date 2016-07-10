if ("__DEV_NODE__" === process.env.NODE_ENV || "__NODE_DEV__" === process.env.NODE_ENV) {
	module.exports = require('./Root.dev');
}
else if ("__DEV__" === process.env.NODE_ENV) {
	module.exports = require('./Root.dev_browser');
}
else if ("__PROD__" === process.env.NODE_ENV) {
	module.exports = require('./Root.prod_browser');
}
else if ("__NODE_PROD__") {
	module.exports = require('./Root.prod');
}
