var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var config = require('../config.json');
var collapse = require('bundle-collapser/plugin');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('build-release', function() {
  var b = browserify({
    entries: [config.scripts.main],
    debug: false
  });

  b.plugin(collapse);
  b.transform('brfs');
  b.transform('browserify-ngannotate', {ext: '.js'});
  b.transform('uglifyify');

  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.scripts.targetName))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.dest.path));
});

gulp.task('build', function() {
  var b = browserify({
    entries: [config.scripts.main],
    debug: false
  });

  b.transform('brfs');

  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.scripts.targetName))
    .pipe(buffer())
    .pipe(gulp.dest(config.dest.path));
});
