const gulp = require("gulp");
const uglify = require("gulp-uglify");
const prompt = require("gulp-prompt");
const rename = require("gulp-rename");
const convertToKebabCase = require("./src/utils/convert-to-kebab-case");

gulp.task("scripts", async () => {
  return await gulp.src("src/*.js").pipe(uglify()).pipe(gulp.dest("build/js"));
});

gulp.task("watch", () => {
  gulp.watch("src/*.js", gulp.series("scripts"));
});

gulp.task("copy", async () => {
  await gulp.src("./package.json").pipe(
    prompt.prompt(
      {
        type: "input",
        name: "name",
        message: "Please enter a name for the component?",
      },
      ({ name }) => {
        name = convertToKebabCase(name);
        
        gulp
          .src("./src/components/template/*")
          .pipe(
            rename(function (path) {
              path.dirname = "/" + name;
              path.basename = name;
            })
          )
          .pipe(gulp.dest("./src/components"));
      }
    )
  );
});

gulp.task("default", gulp.series("scripts", "watch"));
