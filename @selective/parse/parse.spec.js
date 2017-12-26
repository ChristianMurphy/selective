const parse = require("./parse.js");

test("trim single quotes", () => {
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

test("trim double quotes", () => {
  const string =
    '.test {name: "test-name"; description: "test description"; recommended: warn}';
  expect(parse(string)).toEqual([
    {
      name: "test-name",
      description: "test description",
      recommended: "warn",
      selector: ".test"
    }
  ]);
});

test("error on missing curly", () => {
  const string = ".nope {";
  expect(() => parse(string)).toThrow();
});

test("error on unexpected property", () => {
  const string = ".test { nope: 'should not be here' }";
  expect(() => parse(string)).toThrow();
});

test("error on missing declaration", () => {
  const string =
    ".test { description: 'test description'; recommended: warn' }";
  expect(() => parse(string)).toThrow();
});
