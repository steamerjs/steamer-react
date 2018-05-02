if (process.env.NODE_ENV !== 'production') {
    window.console.dev = function(msg) {
        console.log(msg);
    };
    // use it for hot reload
    module.exports = require('./root/Root.hot');

    // enable it and don't forget to add back render() function
    // module.exports = require('./Root.dev');
}
else {
    window.console.dev = function(msg) {};
    module.exports = require('./root/Root.prod');
}
