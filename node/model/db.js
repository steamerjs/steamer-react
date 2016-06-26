var db = require('../config/mongo'),
	wrap = require('co-monk');

module.exports = wrap(db.get('hw'));