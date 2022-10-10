const gulp = require("gulp");
const uglify = require("gulp-uglify");

const minifyJs = async () => {
  return await gulp.src("src/*.js").pipe(uglify()).pipe(gulp.dest("build/js"));
};

gulp.task("minify-js", minifyJs);

gulp.task("default", gulp.series("minify-js"));
