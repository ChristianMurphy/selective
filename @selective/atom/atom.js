const engine = require("unified-engine-atom");
const rehype = require("rehype");
const selective = require("@selective/rehype");
const { resolve } = require("path");

module.exports.provideLinter = () => {
  return {
    grammarScopes: ["text.html", "text.html.basic"],
    name: "selective",
    scope: "file",
    lintsOnChange: true,
    lint: editor => {
      const projectPath = atom.project.getPaths()[0];
      const configuration = {
        config: resolve(projectPath, "config.selective")
      };
      return engine({
        processor: rehype,
        plugins: selective(configuration)
      })(editor);
    }
  };
};

module.exports.activate = () => {
  if (!atom.inSpecMode()) {
    require("atom-package-deps").install("linter-selective");
  }
};
