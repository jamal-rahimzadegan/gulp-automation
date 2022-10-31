const COPY_DATA = {
  type: "input",
  name: "name",
  message: "Please enter a name for the component?",
  initiator: "package.json",
  src: "./src/components/template/*",
  dest: "./src/components",
};

module.exports = {
  COPY_DATA,
};
