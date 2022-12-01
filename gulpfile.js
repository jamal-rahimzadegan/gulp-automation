const { task, src, watch, series, dest } = require("gulp");
const uglify = require("gulp-uglify");
const generateComponent = require("./src/gulp/tasks/generate-component");
const replaceContent = require("./src/gulp/tasks/replace-content");
const cloneRepo = require("./src/gulp/tasks/clone-repo");

task("scripts", async () => {
  return await src("src/*.js").pipe(uglify()).pipe(dest("build/js"));
});

task("watch", () => watch("src/*.js", series("scripts")));

task("replace", replaceContent);

task("clone-repo", cloneRepo);

task("generate-component", generateComponent);

task("default", series("scripts", "watch"));
