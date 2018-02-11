const linter = require("@selective/lint");
const parse = require("@selective/parse");
const marker = require("@selective/marker");
var control = require("unified-message-control");
const { readFileSync } = require("fs");
const { resolve } = require("path");

module.exports = (
  { config = "config.selective" } = { config: "config.selective" }
) => {
  const configFile = readFileSync(resolve(process.cwd(), config));
  const rules = parse(configFile);
  return linter(rules).concat([
    [control, { name: "selective", marker, test: "comment" }]
  ]);
};
