const gulp = require("gulp");
const prompt = require("gulp-prompt");
const {INPUT_PROMPT} = require("../constants");

function promptUser(message, cb) {

    return gulp.src(INPUT_PROMPT.initiator).pipe(
        prompt.prompt({...INPUT_PROMPT, message}, ({userInput}) => {
            cb(userInput);
        })
    );
}

module.exports = promptUser;
