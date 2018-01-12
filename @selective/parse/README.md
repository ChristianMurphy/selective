# ![selective parse](docs/selective-parse.png)

[![NPM Version](https://img.shields.io/npm/v/@selective/parse.svg)](https://www.npmjs.com/package/@selective/parse)
[![Linux Build Status](https://travis-ci.org/ChristianMurphy/selective.svg?branch=master)](https://travis-ci.org/ChristianMurphy/selective)
[![Windows Build status](https://ci.appveyor.com/api/projects/status/5vcbepc478hkyt2f/branch/master?svg=true)](https://ci.appveyor.com/project/ChristianMurphy/selective/branch/master)

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

## References

* [PostCSS API](https://api.postcss.org/)
