module.exports = node => {
  const { value, type } = node;

  if (type !== "comment") {
    return null;
  }

  const values = value.trim().split(/\s+/);

  if (!(values instanceof Array)) {
    return null;
  }

  if (values[0] !== "selective") {
    return null;
  }

  const [, ...args] = values;

  if (!args[0]) {
    return {
      name: "selective",
      attributes: "",
      parameters: {},
      node
    };
  }

  const params = args.reduce((accumulator, param) => {
    const parts = param.split("=");

    if (parts.length < 2) {
      parts.push(true);
    }

    accumulator[parts[0]] = parts[1];
    return accumulator;
  }, {});

  return {
    name: "selective",
    attributes: args.join(" "),
    parameters: params,
    node
  };
};
