const path = require('path');

let SpritesmithPlugin = require('webpack-spritesmith');

module.exports = function(config, webpack) {

    let configWebpack = config.webpack;

    let plugins = [];

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

        let templatePath = require.resolve('spritesheet-templates-steamer/lib/templates/' + style + retinaTpl + '.template.handlebars');
        spritesConfig.customTemplates = {
            [`${sprites.key}${retinaTpl}`]: templatePath
        };


        if (spriteMode === 'retina') {
            spritesConfig.retina = '@2x';
            spritesConfig.target.css[0].push({
                format: `${sprites.key}`
            });
        }
        else {
            spritesConfig.target.css[0].push({
                format: `${sprites.key}${retinaTpl}`
            });
        }

        plugins.push(new SpritesmithPlugin(spritesConfig));
    });

    return plugins;
};