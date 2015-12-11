var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config.json');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

gulp.task('styles-release', function() {
  gulp.src(config.styles.main)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(autoprefixer({
      browsers: config.styles.autoprefixerOptions
    }))
    .pipe(rename(config.styles.targetName))
    .pipe(gulp.dest(config.dest.path));
});

gulp.task('styles-debug', function() {
  gulp.src(config.styles.main)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: config.styles.autoprefixerOptions
    }))
    .pipe(rename(config.styles.targetName))
    .pipe(gulp.dest(config.dest.path));
});
