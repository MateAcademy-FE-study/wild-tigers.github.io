let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('default', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});