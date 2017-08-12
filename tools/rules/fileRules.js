`use strict`;



module.exports = function(config) {

	var configWebpack = config.webpack,
		isProduction = config.env === 'production';

	var rules = [
		{
            test: /\.ico$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]'
            }
        },
        {
		    test: /\.(jpe?g|png|gif|svg)$/i,
		    loaders: [
		        {
		            loader: 'url-loader',
		            options: {
		                publicPath: isProduction ? configWebpack.imgCdn : configWebpack.webserver,
		                limit: 1000,
		                name: 'img/[path]/' + configWebpack.hashName + '.[ext]'
		            }
		        }
		    ]
		}
	];

	return rules;
};