gulp = require('gulp');
del = require('del');
config = require('../config.json');

gulp.task('clean', function() {
  del([config.dest.path]);
});
