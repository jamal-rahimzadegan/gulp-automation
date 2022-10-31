const { task, src, watch, series, dest } = require("gulp");
const uglify = require("gulp-uglify");
const generateComponent = require("./src/tasks/generate-component");
const replaceContent = require("./src/tasks/replace-content");

task("scripts", async () => {
  return await src("src/*.js").pipe(uglify()).pipe(dest("build/js"));
});

task("watch", () => watch("src/*.js", series("scripts")));

task("replace", replaceContent);

task("generate-component", generateComponent);

task("default", series("scripts", "watch"));
