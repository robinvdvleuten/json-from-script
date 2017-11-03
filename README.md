# json-from-script

Tiny _220b_ JSON parser for your [Content Security Policy](https://developers.google.com/web/fundamentals/security/csp/) aware script tags.

[![NPM version](https://img.shields.io/npm/v/json-from-script.svg)](https://www.npmjs.com/package/json-from-script)
[![Build Status](https://travis-ci.org/robinvdvleuten/json-from-script.svg?branch=master)](https://travis-ci.org/robinvdvleuten/json-from-script)

## Installation

```
$ yarn add json-from-script
```

Alternatively using npm:

```
$ npm i json-from-script --save
```

## Usage

[**Real Example on JSFiddle**](https://jsfiddle.net/robinvdvleuten/9jk7L3vx/) ➡️

When your HTML contains any script tag like this;

```html
<script type="application/json" class="data" data-attribute="foo">{&quot;bar&quot;:&quot;baz&quot;}</script>
```

You can parse it in your Javascript application like this;

```js
import jsonFromScript from 'json-from-script';

// Parsed will be { foo: { bar: 'baz' } }
const parsed = jsonFromScript();
```

## API

### `jsonFromScript(className, attribute)`

Creates a new instance of the parser with the given options. The following options
can alternatively be provided to configure the parser for your specific needs:

- `className <String>`: The class name of the script tags to parse. (default: __data__)
- `attribute <String>`: The data attribute to use when setting the attribute on the parsed object. (default: __attribute__)

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)
