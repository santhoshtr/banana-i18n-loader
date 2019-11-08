[![npm][npm]][npm-url]

# banana-i18n-loader

A webpack loader for [banana-i18n](https://github.com/wikimedia/banana-i18n) message files.

This loader resolves the fallback messages when certain messages are not localized yet. For example, in `fr` locale suppose only 5 messages are localized while the source locale `en` has 10 messages. The fr.json provided by this loader will have 10 messages and 5 messages that are not localized will be taken from en.json

The locale fallback is based on banana-i18n fallback chain logic.

## Getting Started

To begin, you'll need to install `banana-i18n-loader`:

```console
$ npm install banana-i18n-loader --save-dev
```

**index.js**

```js
import fr from '@/i18n/fr.json';
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/,
        include: [path.resolve(__dirname, "i18n")],
        use: [
          {
            loader: 'banana-i18n-loader',
          },
        ],
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/banana-i18n-loader.svg
[npm-url]: https://npmjs.com/package/banana-i18n-loader
