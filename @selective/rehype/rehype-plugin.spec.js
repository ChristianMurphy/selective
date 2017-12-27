const { readFileSync } = require("fs");
const { resolve } = require("path");
const rehype = require("rehype");
const rehypePlugin = require("./rehype-plugin");

test("should find issues", () => {
  rehype()
    .use(rehypePlugin, {
      config: "@selective/rehype-plugin/example/strict.selective"
    })
    .process(readFileSync(resolve(__dirname, "example", "bad.html")), err => {
      expect(err).toBeDefined();
    });
});

test("should find no issues", () => {
  rehype()
    .use(rehypePlugin, {
      config: "@selective/rehype-plugin/example/lax.selective"
    })
    .process(readFileSync(resolve(__dirname, "example", "bad.html")), err => {
      expect(err).toBeNull();
    });
});
