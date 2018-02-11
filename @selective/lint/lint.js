const { selectAll } = require("hast-util-select");
const rule = require("unified-lint-rule");

/**
 * Takes in a list of rules and returns a rehype compatible plugin function.
 * @param {rule[]} rules - List of selective lint rules.
 * @returns {rehypePluginSelectiveLint[]} List of rehype plugins for that can handle checking.
 */
module.exports = rules =>
  rules.map(({ selector, name, description }) =>
    rule(`selective:${name}`, (tree, file) => {
      const matches = selectAll(selector, tree);

      if (matches.length > 0) {
        for (const match of matches) {
          file.message(description, match.position);
        }
      }
    })
  );
