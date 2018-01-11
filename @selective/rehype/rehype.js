const linter = require("@selective/lint");
const parse = require("@selective/parse");
const { readFileSync } = require("fs");
const { resolve } = require("path");

module.exports = (
  { config = "selective.config" } = { config: "selective.config" }
) => {
  const configFile = readFileSync(resolve(process.cwd(), config));
  const rules = parse(configFile);
  return linter(rules);
};
