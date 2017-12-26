const parse = require("./parse.js");

test("reads a valid rule", () => {
  const string =
    ".test {name: 'test-name'; description: 'test description'; recommended: warn}";
  expect(parse(string)).toEqual([
    {
      name: "test-name",
      description: "test description",
      recommended: "warn",
      selector: ".test"
    }
  ]);
});
