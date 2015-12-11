gulp = require('gulp');
config = require('../config.json');
browserSync = require('browser-sync');

gulp.task('server', function() {
  var bs = browserSync.create();

  bs.init({
    server: {
      baseDir: config.dest.path
    },
    files: config.dest.path + '/*'
  });
});
