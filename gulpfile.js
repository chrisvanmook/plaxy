(function () {
    /* global require, console */
    // generated on 2015-04-24 using generator-web-initium 0.1.0
    'use strict';

    var gulp = require('gulp'),
        $ = require('gulp-load-plugins')();

    var config = {
        src: './src',
        dist: './dist'
    };

    gulp.task('js', function () {
        return gulp.src(config.src + '/plaxy.js')
            .pipe($.uglify())
            .pipe($.rename('plaxy.min.js'))
            .pipe(gulp.dest(config.dist))
    });

    gulp.task('sass', function () {
        return gulp.src(config.src + '/plaxy.scss')
            .pipe($.sass({
                includePaths: [config.src_dir + 'bower_components/**/*.scss'],
                errLogToConsole: true
            }))
            .pipe($.autoprefixer(
                'last 2 version', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
            ))
            .pipe($.minifyCss())
            .pipe($.rename('plaxy.min.css'))
            .pipe(gulp.dest(config.dist))
    });

    gulp.task('build', ['js', 'sass']);

    gulp.task('default', ['build'], function () {
        gulp.watch([config.src + '/*.scss'], ['sass']);
        gulp.watch([config.src + '/*.js'], ['js']);
    })

})();