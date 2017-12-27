# Selective lint

> Creates a [Rehype][] plugin from JSON rules to check for HTML anti patterns and reports issues back as [vFile][] messages

## Installation

```shell
# npm
npm install @selective/lint

# yarn
yarn add @selective/lint
```

## Usage

```javascript
rehype()
  .use(rehypePlugin, [
    {
      name: "test-name",
      description: "test description",
      recommended: "warn",
      selector: ".test"
    }
  ])
  .process(readFileSync("somefile.html"), err => {
    console.error(err);
  });
```

## References

* [Rehype][]
* [Unified Plugin API][]
* [vFile][]

[rehype]: https://github.com/rehypejs/rehype
[unified plugin api]: https://unifiedjs.github.io/create-a-plugin.html
[vfile]: https://github.com/vfile/vfile
