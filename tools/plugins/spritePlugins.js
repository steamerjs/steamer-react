`use strict`;

const path = require('path');

var  SpritesmithPlugin = require('webpack-spritesmith');

module.exports = function(config, webpack) {

	var configWebpack = config.webpack;

	var plugins = [];

	configWebpack.sprites = (configWebpack.spriteMode === 'none') ? [] : configWebpack.sprites;

	configWebpack.sprites.forEach(function(sprites) {
	    let style = configWebpack.spriteStyle,
	        extMap = {
	            stylus: 'styl',
	            less: 'less',
	            sass: 'sass',
	            scss: 'scss'
	        },
	        spriteMode = (~sprites.key.indexOf('_retina')) ? 'retinaonly' : configWebpack.spriteMode,
	        retinaTplMap = {
	            retinaonly: '_retinaonly',
	            'normal': '',
	            'retina': '_retina'
	        },
	        retinaTpl = retinaTplMap[spriteMode] || '';

	    let spritesConfig = {
	        src: {
	            cwd: sprites.path,
	            glob: '*.png'
	        },
	        target: {
	            image: path.join(configWebpack.path.src, 'css/sprites/' + sprites.key + '.png'),
	            css: [
	                [
	                    path.join(configWebpack.path.src, 'css/sprites/' + sprites.key + '.' + extMap[style]),
	                    {format: sprites.key}
	                ]
	            ]
	        },
	        spritesmithOptions: {
	            padding: 10
	        },
	        apiOptions: {
	            cssImageRef: '~' + sprites.key + '.png'
	        }
	    };

	    spritesConfig.customTemplates = {
	        [sprites.key]: path.join(__dirname, '../../node_modules/', './spritesheet-templates-steamer/lib/templates/' + style + retinaTpl + '.template.handlebars')
	    };

	    if (spriteMode === 'retina') {
	        spritesConfig.retina = '@2x';
	    }

	    plugins.push(new SpritesmithPlugin(spritesConfig));
	});

	return plugins;
};