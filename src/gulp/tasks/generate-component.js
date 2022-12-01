const { src, dest } = require("gulp");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const { COPY_PROMPT_INFO } = require("../shared/constants");
const convertToKebabCase = require("../shared/utils/convert-to-kebab-case");
const convertPascalCase = require("../shared/utils/convert-to-pascal-case");
const promptUser = require("../shared/utils/prompt-user");

async function generateComponent() {
  const replaceContent = (name) => {
    return replace("TemplateComponent", convertPascalCase(name));
  };

  const renameFiles = (name) => {
    name = convertToKebabCase(name);

    return src(COPY_PROMPT_INFO.src).pipe(
      rename(function (path) {
        path.dirname = "/" + name;
        path.basename = name;
      })
    );
  };

  await promptUser(COPY_PROMPT_INFO.message, (name) => {
    renameFiles(name).pipe(replaceContent(name)).pipe(dest(COPY_PROMPT_INFO.dest));
  });
}

module.exports = generateComponent;
