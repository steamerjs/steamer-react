if(process.env.NODE_ENV != 'production'){
    module.exports = require('./root/App.dev.js');
} else {
    module.exports = require('./root/App.js');
}