var monk = require('monk');
module.exports = monk('localhost/hw');


// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');

// var url = 'mongodb://localhost:27017/hw';
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server.");
//   db.close();
// });