global.plugin = function(pkg) {
	return require('./' + pkg);
	// let pkgMapping = {
	// 	requestSync: require('../common/requestSync').requestSync
	// };

	// return pkgMapping[pkg];
}