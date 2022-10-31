const { src, dest } = require("gulp");
const prompt = require("gulp-prompt");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const { COPY_DATA } = require("./constants");
const convertToKebabCase = require("../utils/convert-to-kebab-case");
const convertPascalCase = require("../utils/convert-to-pascal-case");

async function generateComponent() {
  await src(COPY_DATA.initiator).pipe(
    prompt.prompt(COPY_DATA, ({ name }) => {
      renameFiles(name).pipe(replaceContent(name)).pipe(saveFile());
    })
  );
}

function renameFiles(name) {
  name = convertToKebabCase(name);

  return src(COPY_DATA.src).pipe(
    rename(function (path) {
      path.dirname = "/" + name;
      path.basename = name;
    })
  );
}

function replaceContent(name) {
  name = convertPascalCase(name);
  return replace("TemplateComponent", name);
}

function saveFile() {
  return dest(COPY_DATA.dest);
}

module.exports = generateComponent;
