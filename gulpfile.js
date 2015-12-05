var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('default', function circle_Task() {
    return gulp.src('less/circle.less')
    .pipe(less()).pipe(gulp.dest('css'));
});