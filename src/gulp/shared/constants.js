
const INPUT_PROMPT = {
  type: "input",
  name: "userInput",
  initiator: "package.json",
};

const COPY_PROMPT_INFO = {
  ...INPUT_PROMPT,
  message: "Please enter a name for the component?",
  src: "./src/components/template/*",
  dest: "./src/components",
};

module.exports = {
  INPUT_PROMPT,
  COPY_PROMPT_INFO,
};
