const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task("scripts", async () => {
  return await gulp.src("src/*.js").pipe(uglify()).pipe(gulp.dest("build/js"));
});

gulp.task("watch", () => {
  gulp.watch("src/*.js", gulp.series("scripts"));
});

gulp.task("copy", async () => {
  await gulp
    .src("./src/components/template/*")
    .pipe(gulp.dest("./src/components/new-template"));
});

gulp.task("default", gulp.series("scripts", "watch"));
