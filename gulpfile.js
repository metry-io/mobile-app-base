var requireDir = require('require-dir'),
    gulp = require('gulp');

requireDir('./gulp/tasks');

gulp.task('default', ['resources', 'styles-debug', 'html', 'gettext-compile', 'server', 'watch']);
gulp.task('bundle-release', ['resources', 'build-release', 'styles-release', 'html', 'gettext-compile']);
gulp.task('bundle', ['resources', 'build', 'styles-debug', 'html', 'gettext-compile']);
