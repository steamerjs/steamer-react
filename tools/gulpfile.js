var fs = require('fs');
var gulp = require("gulp");
var run = require('run-sequence');
var merge = require('merge-stream');
var replace = require('gulp-replace');
var gutil = require('gulp-util');

// 合图
var spritesmith = require('gulp.spritesmith-multi');
var config = require('./config.js');

gulp.task('sprites', function (cb) {
	var spriteData = gulp.src(config.gulp.path.src + '/img/sprites/**/*.png')
                        // .on('data', function(files) {
                        //     gutil.log(gutil.colors.green("sprites start: " + files.path));
                        // })
                        .pipe(spritesmith({
                            spritesmith: function(options) {
                                options.imgPath = config.gulp.sprites.imgPath + options.imgName;

                                options.cssName = options.cssName.replace('.css', '.less');
                                // customized generated css template
                                options.cssTemplate = config.gulp.sprites.tplpath; //'./sprite-template/less.template.handlebars';

                            }
                      	}))
                        // .on('finish', function() {
                        //     gutil.log(gutil.colors.green("sprites done"));
                        // });
	
  	// Pipe image stream through image optimizer and onto disk
  	var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(gulp.dest(config.gulp.sprites.imgDest));

  	// Pipe CSS stream through CSS optimizer and onto disk
  	var cssStream = spriteData.css
    .pipe(gulp.dest(config.gulp.sprites.cssDest));

  	// Return a merged stream to handle both `end` events
  	return merge(imgStream, cssStream);
});

gulp.task('dist', ['sprites'], function(cb) {
	cb();
});

gulp.task('default', function() {
	run('dist');
});

run('default');