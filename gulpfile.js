var gulp = require('gulp');
var concat = require('gulp-concat');
var sort = require('./gulp-sort.js');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

//...

var paths = {
    scripts: 'src/*.js'
};

gulp.task('combine-js', function () {
    return gulp.src( paths.scripts )
        .pipe( sort() )
        .pipe( uglify() )
        .pipe( concat( "all.js" ) )
        .pipe( gulp.dest( "build/js" ) );
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.scripts, ['combine-js']);
    gulp.watch('src/**').on('change', livereload.changed);
});

//...

gulp.task('default', ['combine-js', 'watch']);