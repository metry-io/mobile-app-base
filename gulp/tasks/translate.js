var gulp = require('gulp');
var gettext = require('gulp-angular-gettext');
var config = require('../config.json');

gulp.task('gettext-extract', function() {
  return gulp.src(config.translations.extract.source)
    .pipe(gettext.extract('template.pot'))
    .pipe(gulp.dest(config.translations.extract.dest));
});

gulp.task('gettext-compile', function() {
  return gulp.src(config.translations.compile.source)
    .pipe(gettext.compile({
      format: 'json'
    }))
    .pipe(gulp.dest(config.dest.path));
});
