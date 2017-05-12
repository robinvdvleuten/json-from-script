# json-from-script

Parse any JSON objects from your CSP aware script tags.

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

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)
