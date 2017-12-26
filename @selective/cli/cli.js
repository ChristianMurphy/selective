const rehype = require("rehype");
const report = require("vfile-reporter");
const { readFileSync } = require("fs");
const config = require("@selective/parse")(
  readFileSync("./example/config.selective")
);
const lint = require("@selective/lint")(config);

rehype()
  .use(lint)
  .process(readFileSync("./example/bad.html"), function(err, file) {
    console.log(report(err || file));
  });
