const git = require("gulp-git");
const promptUser = require("../shared/utils/prompt-user");
const convertToKebabCase = require("../shared/utils/convert-to-kebab-case");


const updateTitle = () => {
//     in index.html
}

const updatePackageJson = () => {
    // package name, etc
}


async function initProject() {
    const URL = "https://github.com/jamal-rahimzadegan/custom-webpack.git";

    const handleResult = (err) => {
        return !!err ? console.error("err: ", err) : console.log("Generated !!!");
    };

    const generateProject = (projectName) => {
        const projectFolderName = convertToKebabCase(projectName)
        git.clone(URL, {args: `./${projectFolderName}`});
    };

    await promptUser("Please enter the name of the project?", generateProject, handleResult);
}

module.exports = initProject;
