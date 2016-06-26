var request = require('request');

exports.requestSync = function(option) {
	return function(callback) {
		request(option, function (error, response, body) {
		    	callback(error, response);
		});
	};
} ;