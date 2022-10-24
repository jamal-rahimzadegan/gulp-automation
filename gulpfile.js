const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task("scripts", async () => {
  return await gulp.src("src/*.js").pipe(uglify()).pipe(gulp.dest("build/js"));
});

gulp.task("watch", function () {
  gulp.watch("src/*.js", gulp.series("scripts"));
});

gulp.task("default", gulp.series("scripts", "watch"));
