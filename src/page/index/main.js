if (process.env.NODE_ENV !== 'production') {
    window.console.dev = function(msg) {
        console.log(msg);
    };
    // use it for hot reload
    require('./root/Root.hot');

    // enable it and don't forget to add back render() function
    // module.exports = require('./Root.dev');
}
else {
    window.console.dev = function(msg) {};
    require('./root/Root.prod');
}