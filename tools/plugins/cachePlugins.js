`use strict`;

var WebpackMd5Hash = require('webpack-md5-hash');


module.exports = function(config, webpack) {

	var configWebpack = config.webpack;

	var plugins = [
		new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 10
        }),
        new WebpackMd5Hash()
	];
	
	return plugins;
};