const { task, src, watch, series, dest } = require("gulp");
const uglify = require("gulp-uglify");
const generateComponent = require("./src/gulp/tasks/generate-component");
const replaceContent = require("./src/gulp/tasks/replace-content");
const initProject = require("./src/gulp/tasks/init-project");

task("scripts", async () => {
  return await src("src/*.js").pipe(uglify()).pipe(dest("build/js"));
});

task("watch", () => watch("src/*.js", series("scripts")));

task("replace", replaceContent);

task("init-project", initProject);

task("generate-component", generateComponent);

task("default", series("scripts", "watch"));
