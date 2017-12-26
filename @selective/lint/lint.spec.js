const lint = require("./lint");

test("should return function", () => {
  expect(lint([])).toBeInstanceOf(Function);
});
