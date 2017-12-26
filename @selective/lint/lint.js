const { selectAll } = require("hast-util-select");

/**
 * Takes in a list of rules and returns a rehype compatible plugin function.
 * @param {rule[]} rules - List of selective lint rules.
 * @returns {rehypePluginSelectiveLint} Rehype plugin for that can handle checking.
 */
module.exports = rules => {
  /**
   * @function rehypePluginSelectiveLint
   * @param {Object} tree - HAST object.
   * @param {Object} file - Vfile object.
   * @returns {void} Pass through.
   */
  return (tree, file) => {
    for (const { selector, name, description } of rules) {
      const matches = selectAll(selector, tree);

      if (matches.length > 0) {
        for (const match of matches) {
          file.message(description, match.position, name);
        }
      }
    }
  };
};
