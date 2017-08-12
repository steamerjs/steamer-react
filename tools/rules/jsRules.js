`use strict`;


module.exports = function(config) {

	var configWebpack = config.webpack;

	// js方言
	const jsRules = {
	    ts: {
	        test: /\.(tsx|ts)$/,
	        loader: 'awesome-typescript-loader'
	    }
	};

	var rules = [
	    {
	    	test: /\.js$/,
            loader: 'happypack/loader?id=1',
            exclude: /node_modules/
	    },
	    { 
	        test: /\.jsx$/,
	        loader: 'babel-loader',
	        options: {
	            'plugins': [
	                ['transform-react-jsx', { 'pragma': 'h' }]
	            ],
	            cacheDirectory: './.cache/'
	        },
	        exclude: /node_modules/
	    }
	];

	configWebpack.js.forEach((tpl) => {
	    let rule = jsRules[tpl] || '';
	    rule && rules.push(rule);
	});

	return rules;
};