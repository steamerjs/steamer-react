var fs = require('fs');
var gulp = require("gulp");
var run = require('run-sequence');
var merge = require('merge-stream');
var replace = require('gulp-replace');
// 合图
// var spritesmith = require('gulp.spritesmith');
var spritesmith = require('gulp.spritesmith-multi');

var config = require('./config/config.js');

gulp.task('sprites', function (cb) {
	var spriteData = gulp.src(config.gulpPath.src + 'img/sprites/**/*.png')
                        .pipe(spritesmith({
                            spritesmith: function(options) {
                                options.imgPath = config.sprites.imgPath + options.imgName;

                                options.cssName = options.cssName.replace('.css', '.less');
                                // customized generated css template
                                options.cssTemplate = './config/less.template.handlebars';
                            }
                      	}));
	
  	// Pipe image stream through image optimizer and onto disk
  	var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(gulp.dest(config.sprites.imgDest));

  	// Pipe CSS stream through CSS optimizer and onto disk
  	var cssStream = spriteData.css
    .pipe(gulp.dest(config.sprites.cssDest));

  	// Return a merged stream to handle both `end` events
  	return merge(imgStream, cssStream);
});

gulp.task('dist', ['sprites'], function(cb) {
	cb();
});

gulp.task('default', function() {
	run('dist');
});