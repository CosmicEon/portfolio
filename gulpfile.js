const gulp = require("gulp");
const babel = require("gulp-babel");
const changed = require("gulp-changed");
const concat = require("gulp-concat");
const deporder = require("gulp-deporder");
const htmlclean = require("gulp-htmlclean");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");

const dir = {
  src: "./src/",
  dest: "./dist/"
};

/* html */
gulp.task("html:main", () => {
  return gulp
    .src(dir.src + "/*.html")
    .pipe(changed("../"))
    .pipe(htmlclean())
    .pipe(gulp.dest("../"));
});

gulp.task("html:views", () => {
  return gulp
    .src(dir.src + "views/**/*.html")
    .pipe(changed(dir.dest + "views/"))
    .pipe(htmlclean())
    .pipe(gulp.dest(dir.dest + "views/"));
});

/* css */
gulp.task("scss", () => {
  return gulp
    .src(dir.src + "styles/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("styles.css"))
    .pipe(gulp.dest(dir.dest + "css"));
});

/* js */
gulp.task("js", () => {
  return gulp
    .src(dir.src + "scripts/**/*.js")
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(deporder()) // reads dependencies on js files
    .pipe(concat("scripts.js"))
    .pipe(uglify())
    .pipe(gulp.dest(dir.dest + "js/"));
});

/* assets */
gulp.task("assets:fonts", () => {
  return gulp
    .src(dir.src + "assets/fonts/*.*")
    .pipe(changed(dir.dest + "assets/fonts/"))
    .pipe(gulp.dest(dir.dest + "assets/fonts/"));
});

gulp.task("assets:images", () => {
  return gulp
    .src(dir.src + "assets/images/**/*")
    .pipe(changed(dir.dest + "assets/images/"))
    .pipe(gulp.dest(dir.dest + "assets/images/"));
});

gulp.task("assets", ["assets:fonts", "assets:images"]);

/* watch */
gulp.task("dev:watch", () => {
  gulp.watch(dir.src + "/*.html", ["html:main"]);
  gulp.watch(dir.src + "views/**/*.html", ["html:views"]);
  gulp.watch(dir.src + "styles/**/*", ["scss"]);
  gulp.watch(dir.src + "scripts/**/*", ["js"]);
});

/* Dev mode */
// assets task is not used after rearrange
gulp.task("dev", ["dev:watch"]);
