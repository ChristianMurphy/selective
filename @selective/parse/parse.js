const { parse } = require("postcss");
const knownDecl = ["name", "description", "recommended"];
const expectedProperties = ["selector", "name", "description", "recommended"];

/**
 * typedef {object} rule
 * @property {string} selector - CSS selector
 * @property {string} name - Name of the rule, lowercase dash separated
 * @property {string} description - Sentence describing the anti-pattern
 * @property {string} recommended - Recommended reporting level for this rule
 */

/**
 * Takes a selective lint (css-like) configuration and produces a {rule}.
 * @param {string} configText - Configuration text.
 * @returns {rule[]} List of rules from config file.
 */
module.exports = configText => {
  const configTree = parse(configText);
  const rules = [];

  configTree.walkRules(rule => {
    // collect selector from the rule
    const newRule = {
      selector: rule.selector
    };

    // find each of the options from the rule
    rule.walkDecls(({ prop, value, error }) => {
      if (!knownDecl.includes(prop)) {
        error(`unknown configuration option ${prop}`);
      }
      // assign value to json property, trims spacing and quote marks from value
      newRule[prop] = value.replace(/^[\s'"]*|[\s'"]*$/g, "");
    });

    // find any required properties that may be missing
    const tempKeyList = Object.keys(newRule);
    expectedProperties
      .filter(key => !tempKeyList.includes(key))
      .forEach(missingKey => rule.error(`missing ${missingKey}`));

    rules.push(newRule);
  });

  return rules;
};
