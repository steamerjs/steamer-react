if ("__DEV_NODE__" === process.env.NODE_ENV || "__NODE_DEV__" === process.env.NODE_ENV) {
	module.exports = require('./configureStore.dev');
}
else if ("__DEV__" === process.env.NODE_ENV) {
	module.exports = require('./configureStore.dev_browser');
}
else if ("__PROD__" === process.env.NODE_ENV) {
	module.exports = require('./configureStore.prod_browser');
}
else if ("__NODE_PROD__") {
	module.exports = require('./configureStore.prod');
}
