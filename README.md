# json-from-script

A tiny (276B) JSON parser for your [Content Security Policy](https://developers.google.com/web/fundamentals/security/csp/) aware script tags.

[![NPM version](https://img.shields.io/npm/v/json-from-script.svg)](https://www.npmjs.com/package/json-from-script)
[![Build Status](https://github.com/robinvdvleuten/json-from-script/actions/workflows/ci.yml/badge.svg)](https://github.com/robinvdvleuten/json-from-script/actions/workflows/ci.yml)
[![licenses](https://licenses.dev/b/npm/json-from-script)](https://licenses.dev/npm/json-from-script)

## Installation

```
$ npm install --save json-from-script
```

## Usage

When your HTML contains any script tag like this;

```html
<script type="application/json" class="data" data-attr="foo">{&quot;bar&quot;:&quot;baz&quot;}</script>
```

You can parse it in your Javascript application like this;

```js
import jsonFromScript from 'json-from-script';

// Parsed will be { foo: { bar: 'baz' } }
const parsed = jsonFromScript();
```

## API

### `jsonFromScript(selector, attribute)`

Creates a new instance of the parser with the given options. The following options
can alternatively be provided to configure the parser for your specific needs:

- `selector <String>`: The selector for the script tags to parse. (default: __script.data__)
- `attribute <String>`: The data attribute to use when setting the attribute on the parsed object. (default: __data-attr__)

## License

MIT © [Robin van der Vleuten](https://robinvdvleuten.nl)
