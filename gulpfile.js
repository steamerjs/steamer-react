var fs = require('fs');
var gulp = require("gulp");
var run = require('run-sequence');
var merge = require('merge-stream');
var replace = require('gulp-replace');
// 合图
// var spritesmith = require('gulp.spritesmith');
var spritesmith = require('gulp.spritesmith-multi');

var Config = {
	env: 'dist' // dist | pub | offline
};
// 基准文件夹路径
Config.filePath = {
    src: './src/',
	// dev: './dev/',
	dist: './dist/',
	pub: './pub/',
	tmp: './tmp/',
	rev: './rev/',
  offline: './offline/',
};
// 合图
Config.sprites = {
    // imgPath: '../../../css/sprites/sprites.png',
    imgPath: '../../../css/sprites/',
    imgName: 'sprites.png',
    cssName: 'sprites.scss',
    imgDest: Config.filePath.src + 'css/sprites/',
    cssDest: Config.filePath.src + 'css/sprites/'
};

gulp.task('sprites', function (cb) {
	var spriteData = gulp.src(Config.filePath.src + 'img/sprites/**/*.png')
                        .pipe(spritesmith({
                            spritesmith: function(options) {
                                options.imgPath = Config.sprites.imgPath + options.imgName;

                                options.cssName = options.cssName.replace('.css', '.scss');
                                // customized generated css template
                                options.cssTemplate = './config/scss.template.handlebars';
                            }
                      	}));
	
  	// Pipe image stream through image optimizer and onto disk
  	var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(gulp.dest(Config.sprites.imgDest));

  	// Pipe CSS stream through CSS optimizer and onto disk
  	var cssStream = spriteData.css
    .pipe(gulp.dest(Config.sprites.cssDest));

  	// Return a merged stream to handle both `end` events
  	return merge(imgStream, cssStream);
});

gulp.task('dist', ['sprites'], function(cb) {
	cb();
});

gulp.task('default', function() {
	run('dist');
});