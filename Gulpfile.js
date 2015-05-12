'use strict';

var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
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

gulp.task('watch', [], function () {
  gulp.watch(['./app/**/*.jsx'], ['app', browserSync.reload]);
});

gulp.task('browsersync',['vendors','app'], function () {
    browserSync({
  		server: {
  			baseDir: './'
  		},
  		notify: false,
  		browser: ["google chrome"]
	});
});

gulp.task('default',['browsersync','watch'], function() {});
