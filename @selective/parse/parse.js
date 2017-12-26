const { parse } = require("postcss");
const knownDecl = ["name", "description", "recommended"];

module.exports = configText => {
  const configTree = parse(configText);
  const rules = [];

  configTree.walkRules(rule => {
    const newRule = {
      selector: rule.selector
    };

    rule.walkDecls(({ prop, value, error }) => {
      if (!knownDecl.includes(prop)) {
        error(`unknown configuration option ${prop}`);
      }
      // assign value to json property, trims spacing and quote marks from value
      newRule[prop] = value.replace(/^[\s'"]*|[\s'"]*$/g, "");
    });

    rules.push(newRule);
  });

  return rules;
};
