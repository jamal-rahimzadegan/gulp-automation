const git = require("gulp-git");
const promptUser = require("./utils/prompt-user");

async function cloneRepo() {
  const url = "https://github.com/jamal-rahimzadegan/custom-webpack.git";

  const handleResult = (err) => {
    return !!err ? console.error("err: ", err) : console.log("Generated !!!");
  };

  const generateProject = (projectName) => {
    git.clone(url, { args: `./${projectName}` });
  };

  await promptUser("Name of project?", generateProject, handleResult);
}

module.exports = cloneRepo;
