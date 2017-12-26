# selective parse

> Converts selective's css-like domain specific language to a list of JSON rules

## Installation

```shell
# npm
npm install @selective/parse

# yarn
yarn add @selective/parse
```

## Usage

<!-- eslint-disable no-console -->

```javascript
const parse = require("@selective/parse");

const rules = parse(
  ".test {name: 'test-name'; description: 'test description'; recommended: warn}"
);

console.log(rules);
// [
//   {
//     name: "test-name",
//     description: "test description",
//     recommended: "warn",
//     selector: ".test"
//   }
// ]
```
