const linter = require("@selective/lint");
const parse = require("@selective/parse");
const marker = require("@selective/marker");
const control = require("unified-message-control");
const { readFileSync } = require("fs");
const { isAbsolute, resolve } = require("path");

module.exports = (
  { config = "config.selective" } = { config: "config.selective" }
) => {
  const configPath = isAbsolute(config)
    ? config
    : resolve(process.cwd(), config);
  const configFile = readFileSync(configPath);
  const rules = parse(configFile);
  return linter(rules).concat([
    [control, { name: "selective", marker, test: "comment" }]
  ]);
};
