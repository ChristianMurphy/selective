# ![Selective Marker](docs/selective-marker.png)

[![NPM Version](https://img.shields.io/npm/v/@selective/marker.svg)](https://www.npmjs.com/package/@selective/marker)
[![Linux Build Status](https://travis-ci.org/ChristianMurphy/selective.svg?branch=master)](https://travis-ci.org/ChristianMurphy/selective)
[![Windows Build status](https://ci.appveyor.com/api/projects/status/5vcbepc478hkyt2f/branch/master?svg=true)](https://ci.appveyor.com/project/ChristianMurphy/selective/branch/master)

> Parse selective rule comments from HTML, compatible [`unified-message-control`](https://github.com/unifiedjs/unified-message-control).

## Installation

```shell
# npm
npm install @selective/marker

# yarn
yarn add @selective/marker
```

## Usage

<!-- eslint-disable no-console -->

```javascript
const marker = require("@selective/marker");

const hastNode = {
  type: "comment",
  value: "selective ignore test"
};

const result = marker(hastNode);

console.log(result);
// {
//   name: "selective",
//   attributes: "ignore test",
//   parameters: {
//     ignore: true,
//     test: true
//   },
//   {
//     type: "comment",
//     value: "selective ignore test"
//   }
// }
```

## References

* [Hast][]
* [Unified Message Control][]
* [Mdast Comment Marker][]

[hast]: https://github.com/syntax-tree/hast
[unified message control]: https://github.com/unifiedjs/unified-message-control
[mdast comment marker]: https://github.com/syntax-tree/mdast-comment-marker
