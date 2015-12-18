'use strict';

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var imageResize = require('gulp-image-resize');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var jsxcs = require('gulp-jscs');
var os = require('os');
var parallel = require('concurrent-transform');
var rename = require('gulp-rename');

var vendors = [
  'react',
  'react-router',
  'bootstrap',
  'jquery',
  'lodash'
];


gulp.task('jscs', function() {
  gulp.src(['app/**/*.jsx', 'Gulpfile.js'])
  .pipe(plumber())
  .pipe(jsxcs({esnext: true}));
});

gulp.task('vendors', function() {
  var stream = browserify({
    debug: false,
    require: vendors
  });

  stream.bundle()
        .pipe(source('vendors.js'))
        .pipe(gulp.dest('assets/js'));

  return stream;
});

gulp.task('app', function() {
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
  .pipe(plumber())
  .pipe(source('app.js'))
  .pipe(gulp.dest('assets/js'));

});

gulp.task('fonts', function() {
  gulp.src(['node_modules/font-awesome/fonts/**/*.*'])
  .pipe(gulp.dest('assets/fonts'));
});

gulp.task('less', function() {
  return gulp.src('./less/styles.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', [], function() {
  gulp.watch(['./app/**/*.jsx'], ['app', browserSync.reload]);
  gulp.watch(['./less/**/*.less'], ['less', browserSync.reload]);
  gulp.watch(['./index.html'], [browserSync.reload]);
});

gulp.task('browsersync', ['vendors', 'less', 'fonts', 'app'], function() {
  browserSync({
    server: {
      baseDir: './'
    },
    notify: false,
    browser: ['google chrome']
  });
});

gulp.task('images', function() {
  gulp.src('assets/images/fullSize/*.{JPG}')
    .pipe(changed('assets/images/fullSize/'))
    .pipe(rename(function(path) { path.basename += '-thmb'; }))
    .pipe(gulp.dest('assets/images/thumbnails/'));
});

gulp.task('images', function() {
  gulp.src('assets/images/fullSize/*.{jpg,png}')
    .pipe(changed('assets/images/fullSize/'))
    .pipe(parallel(
      imageResize({ width: 300 }),
      os.cpus().length
    ))
    .pipe(rename(function(path) { path.basename += '-thmb'; }))
    .pipe(gulp.dest('assets/images/thumbnails/'));
});

gulp.task('default', ['browsersync', 'watch'], function() {});
