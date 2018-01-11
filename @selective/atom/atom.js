const engine = require("unified-engine-atom");
const rehype = require("rehype");
const selective = require("@selective/rehype");

module.exports.provideLinter = function() {
  return {
    grammarScopes: ["text.html", "text.html.basic"],
    name: "selective",
    scope: "file",
    lintsOnChange: true,
    lint: engine({
      processor: rehype,
      plugins: [selective]
    })
  };
};
