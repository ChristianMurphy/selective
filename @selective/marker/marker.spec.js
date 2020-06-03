const marker = require("./marker");

test("should ignore non-comments", () => {
  const node = { type: "element" };
  const result = marker(node);
  expect(result).toBe(null);
});

test("parse comment with no params", () => {
  const node = { type: "comment", value: "selective" };
  const result = marker(node);
  expect(result).toEqual({
    name: "selective",
    attributes: "",
    parameters: {},
    node,
  });
});

test("parse comment with short param ", () => {
  const node = { type: "comment", value: "selective test" };
  const result = marker(node);
  expect(result).toEqual({
    name: "selective",
    attributes: "test",
    parameters: {
      test: true,
    },
    node,
  });
});

test("parse comment with long param", () => {
  const node = { type: "comment", value: "selective test=test" };
  const result = marker(node);
  expect(result).toEqual({
    name: "selective",
    attributes: "test=test",
    parameters: {
      test: "test",
    },
    node,
  });
});

test("parse comment with multiple params", () => {
  const node = {
    type: "comment",
    value: "selective test=test short long=longer",
  };
  const result = marker(node);
  expect(result).toEqual({
    name: "selective",
    attributes: "test=test short long=longer",
    parameters: {
      test: "test",
      short: true,
      long: "longer",
    },
    node,
  });
});
