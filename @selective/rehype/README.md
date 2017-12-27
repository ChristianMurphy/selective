# Selective Command Line Interface

>

## Installation

```shell
# npm
npm install @selective/rehype

# yarn
yarn add @selective/rehype
```

## Rehype CLI Usage

in _package.json_

```json
{
  "devDependencies": {
    "rehype": "^5.0.0".
    "@selective/rehype"
  },
  "rehypeConfig": {

  }
}
```

## Programmatic Usage

```javascript
rehype()
  .use(rehypePlugin, {
    config: "@selective/rehype-plugin/example/strict.selective"
  })
  .process(readFileSync(resolve(__dirname, "example", "bad.html")), err => {
    console.error(err);
  });
```

## References

* [Rehype](https://github.com/rehypejs/rehype)
* [Unified Plugin API](https://unifiedjs.github.io/create-a-plugin.html)
* [vFile](https://github.com/vfile/vfile)
