'use strict';

var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    source = require('vinyl-source-stream');


var vendors = [
  'react',
  'react-router',
  'bootstrap',
  'jquery'
];


gulp.task('vendors', function () {
    var stream = browserify({
            debug: false,
            require: vendors
        });

    stream.bundle()
          .pipe(source('vendors.js'))
          .pipe(gulp.dest('assets/js'));

    return stream;
});



gulp.task('app', function () {
    var stream = browserify({
            entries: ['./app/app.jsx'],
            transform: [babelify],
            debug: false,
            extensions: ['.jsx'],
            fullPaths: false
        });

    vendors.forEach(function(vendor) {
        stream.external(vendor);
    });

    return stream.bundle()
                 .pipe(source('app.js'))
                 .pipe(gulp.dest('assets/js'));

});

gulp.task('less', function () {
	return gulp.src('./less/styles.less')
		.pipe(less())
		.pipe(concat("styles.css"))
		.pipe(gulp.dest('assets/css'))
});

gulp.task('watch', [], function () {
  gulp.watch(['./app/**/*.jsx'], ['app', browserSync.reload]);
  gulp.watch(['./less/**/*.less'], ['less', browserSync.reload]);
  gulp.watch(['./index.html'], [browserSync.reload]);
});

gulp.task('browsersync',['vendors','less','app'], function () {
    browserSync({
  		server: {
  			baseDir: './'
  		},
  		notify: false,
  		browser: ["google chrome"]
	});
});

gulp.task('default',['browsersync','watch'], function() {});
