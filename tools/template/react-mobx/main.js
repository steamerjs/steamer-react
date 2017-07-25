if(process.env.NODE_ENV != 'production'){
    module.exports = require('./root/App.dev.jsx');
} else {
    module.exports = require('./root/App.jsx');
}