let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync");
let nunjucksRender = require("gulp-nunjucks-render");


gulp.task("sass", function() {
  gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.reload({ stream: true }));
});

// gulp.task("", function() {
//   return gulp.src("./src/*.html").pipe(gulp.dest("./build"));
// });

gulp.task("nunjucks", function() {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src("./src/pages/**/*.html")
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: ["./src/templates"]
        })
      )
      // output files in app folder
      .pipe(gulp.dest("./build"))
  );
});

gulp.task("copy:img", function() {
  return gulp.src("./src/img/**/*").pipe(gulp.dest("./build/img"));
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

gulp.task("default", ["sass", "nunjucks", "copy:img", "serv"], function() {
  gulp.watch("./src/scss/**/*.scss", ["sass"]);
  gulp.watch("./src/templates/**/*.html", ["nunjucks"]);
  gulp.watch("./src/img/**/*", ["copy:img"]);
});