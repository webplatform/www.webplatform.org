'use strict';

var args   = require('yargs').argv;
var gulp   = require('gulp');
var gulpif = require('gulp-if');

var jsFiles = './src/files/js/**/*.js';
var isProduction = args.env === 'production';

gulp.task('minify', ['lint'], function () {
  var uglify = require('gulp-uglify');

  return gulp.src(jsFiles)
    .pipe(gulpif(isProduction, uglify())) // only minify if --env=production
    .pipe(gulp.dest('./out/js/'));
});

gulp.task('beautify', function () {
  var beautify = require('gulp-beautify');

  return gulp.src(jsFiles)
    .pipe(beautify({indentSize: 2, keepArrayIndentation: true}))
    .pipe(gulp.dest('./src/files/js/'));
});

gulp.task('lint', ['beautify'], function () {
  var jshint = require('gulp-jshint');

  return gulp.src(jsFiles)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter());
});

gulp.task('default', ['lint']);