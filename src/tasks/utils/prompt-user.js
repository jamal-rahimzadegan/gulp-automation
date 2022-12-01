const gulp = require("gulp");
const prompt = require("gulp-prompt");
const { PROMPT_DATA } = require("../shared/constants");

function promptUser(message, cb) {
  const promptData = PROMPT_DATA;

  if (message) promptData[message] = message;

  return gulp.src(PROMPT_DATA.initiator).pipe(
    prompt.prompt(promptData, ({ name }) => {
      cb(name);
    })
  );
}

module.exports = promptUser;
