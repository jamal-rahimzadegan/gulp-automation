const { src, dest } = require("gulp");
const replace = require("gulp-replace");

async function replaceContent() {
  await src("./src/main.js")
    .pipe(replace("hello", "bye"))
    .pipe(dest("./src/replaced/replaced.js"));
}

module.exports = replaceContent;
