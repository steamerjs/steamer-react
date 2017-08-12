`use strict`;

const path = require('path');

var Clean = require('clean-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin-hash'),
	WriteFilePlugin = require('write-file-webpack-plugin'),
    FileWebpackPlugin = require('file-webpack-plugin'),
    HappyPack = require('happypack'),
    HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config, webpack) {

	var configWebpack = config.webpack,
		isProduction = config.env === 'production';

	var plugins = [
		new HappyPack({
            id: '1',
            verbose: false,
            loaders: [{
                path: 'babel-loader',
                options: {
                    cacheDirectory: './.cache/'
                }
            }]
        }),
        new HappyPack({
            id: '2',
            verbose: false,
            loaders: [{
                path: 'babel-loader',
                options: {
		            'plugins': [
		                ['transform-react-jsx', { 'pragma': 'h' }]
		            ],
		            cacheDirectory: './.cache/'
		        },
            }]
        }),
        new ExtractTextPlugin({
            filename: (getPath) => {
              return getPath('css/' + config.webpack.contenthashName + '.css').replace('css/js', 'css');
            },
            allChunks: true,
            disable: !((isProduction || !config.webpack.extractCss))
        }),
        
	];

	if (isProduction) {
		var useCdn = configWebpack.useCdn || true;

	    if (useCdn) {
	        plugins.push(new FileWebpackPlugin({
	            'after-emit': [
	                {
	                    from: path.join(configWebpack.path.dist, '**/*'),
	                    to: path.join(configWebpack.path.dist, 'cdn/'),
	                    action: 'move',
	                    options: {
	                        cwd: configWebpack.path.dist,
	                        absolute: true,
	                        ignore: [
	                            '*.html',
	                            '**/*.html'
	                        ]
	                    }
	                },
	                {
	                    from: path.join(configWebpack.path.dist, '*.html'),
	                    to: path.join(configWebpack.path.dist, 'webserver/'),
	                    action: 'move',
	                    options: {
	                        cwd: configWebpack.path.dist,
	                        absolute: true,
	                    }
	                }
	            ]
	        }));
	    }
	}
	else {
		if (configWebpack.showSource) {
	        plugins.push(new WriteFilePlugin());
	    }
	}

	if (configWebpack.clean) {
	    plugins.push(new Clean([isProduction ? configWebpack.path.dist : configWebpack.path.dev], {root: path.resolve()}));
	}

	if (config.webpack.promise) {
		plugins.push(new webpack.ProvidePlugin({
            Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise'
        }));	
	}

	configWebpack.static.forEach((item) => {
	    plugins.push(new CopyWebpackPlugin([{
	        from: item.src,
	        to: (item.dist || item.src) + (item.hash ? configWebpack.hashName : '[name]') + '.[ext]'
	    }]));
	});

	config.webpack.html.forEach(function(page, key) {
        plugins.push(new HtmlResWebpackPlugin({
            removeUnMatchedAssets: true,
            mode: 'html',
            filename: page.key + '.html',
            template: page.path,
            favicon: 'src/favicon.ico',
            htmlMinify: null,
            entryLog: !key,
            cssPublicPath: isProduction ? config.webpack.cssCdn : config.webpack.webserver,
            templateContent: function(tpl) {
                if (isProduction) {
                    return tpl;
                }

                var regex = new RegExp('<script.*src=["|\']*(.+).*?["|\']><\/script>', 'ig');

                tpl = tpl.replace(regex, function(script, route) {
                    if (!!~script.indexOf('react.js') || !!~script.indexOf('react-dom.js')) {
                        return '';
                    }
                    return script;
                });
                return tpl;
            }
        }));
    }); 

	return plugins;
};