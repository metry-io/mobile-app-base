gulp = require('gulp');
config = require('../config.json');
assign = require('lodash.assign');
browserify = require('browserify');
watchify = require('watchify');
gutil = require('gulp-util');
buffer = require('vinyl-buffer');
source = require('vinyl-source-stream');
sourcemaps = require('gulp-sourcemaps');

var customOpts = {
  entries: [config.scripts.main],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

b.transform('brfs');

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.path));
}

gulp.task('browserify', bundle);

gulp.task('watch_scripts', ['browserify'], function() {
  b.on('update', bundle);
  b.on('log', gutil.log);
});

gulp.task('watch_html', function() {
  gulp.watch([config.html.main], ['html']);
});

gulp.task('watch_styles', function() {
  gulp.watch([config.styles.all], ['styles-debug']);
});

gulp.task('watch_resources', function() {
  gulp.watch([config.resources.main], ['resources']);
});

gulp.task('watch_translations', function() {
  return gulp.watch([config.translations.compile.source], ['gettext-compile']);
});

gulp.task('watch', [
  'watch_scripts',
  'watch_html',
  'watch_styles',
  'watch_translations',
  'watch_resources'
]);
