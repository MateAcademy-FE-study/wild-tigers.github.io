let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync");

gulp.task("sass", function() {
  gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("copy:html", function() {
  return gulp.src("./src/*.html").pipe(gulp.dest("./build"));
});

gulp.task("copy:img", function() {
  return gulp.src("./src/img/*").pipe(gulp.dest("./build/img"));
});

gulp.task("serv", function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    },
    notify: false
  });
  browserSync.watch("./build", browserSync.reload);
});

gulp.task("default", ["sass", "copy:html", "copy:img", "serv"], function() {
  gulp.watch("./src/scss/**/*.scss", ["sass"]);
});
