const { src, dest } = require("gulp");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const { PROMPT_DATA } = require("./shared/constants");
const convertToKebabCase = require("./utils/convert-to-kebab-case");
const convertPascalCase = require("./utils/convert-to-pascal-case");
const promptUser = require("./utils/prompt-user");

async function generateComponent() {
  const replaceContent = (name) => {
    return replace("TemplateComponent", convertPascalCase(name));
  };

  const renameFiles = (name) => {
    name = convertToKebabCase(name);

    return src(PROMPT_DATA.src).pipe(
      rename(function (path) {
        path.dirname = "/" + name;
        path.basename = name;
      })
    );
  };

  await promptUser("", (name) => {
    renameFiles(name).pipe(replaceContent(name)).pipe(dest(PROMPT_DATA.dest));
  });
}

module.exports = generateComponent;
