let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});