const lint = require("./lint");

test("should return a list of functions", () => {
  expect(lint([])).toBeInstanceOf(Array);
});
