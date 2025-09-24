# json-from-script

A tiny (276B) JSON parser for your CSP aware script tags.

[![NPM version](https://img.shields.io/npm/v/json-from-script.svg)](https://www.npmjs.com/package/json-from-script)
[![Build Status](https://github.com/robinvdvleuten/json-from-script/actions/workflows/ci.yml/badge.svg)](https://github.com/robinvdvleuten/json-from-script/actions/workflows/ci.yml)
[![licenses](https://licenses.dev/b/npm/json-from-script)](https://licenses.dev/npm/json-from-script)

Modern front-ends often need a tiny bit of server-rendered data to kick-start hydration or to configure a widget. The usual answer is an inline `<script>` that hydrates a global variable—but that approach triggers strict [Content Security Policies](https://developers.google.com/web/fundamentals/security/csp/), can’t be cached independently, and forces you to hand-roll parsing and error handling for every page. **json-from-script** smooths out that workflow by treating `<script type="application/json">` tags as a simple, declarative data transport that is safe under CSP.

## Installation

```
$ npm install --save json-from-script
```

## Usage

When your HTML contains any script tag like this:

```html
<script type="application/json" class="data" data-attr="foo">{&quot;bar&quot;:&quot;baz&quot;}</script>
```

You can parse it in your JavaScript application like this:

```js
import jsonFromScript from 'json-from-script';

// Parsed will be { foo: { bar: 'baz' } }
const parsed = jsonFromScript();
```

Behind the scenes the helper scans the DOM for matching script tags, reads their `data-*` attributes, and returns a single object that is ready to feed into your app state or view models.

## API

### `jsonFromScript(selector, attribute)`

Parses every script element that matches the given selector and merges the JSON contents into a single object keyed by a data attribute.

- `selector <String>`: CSS selector for the script tags to parse. Defaults to `script.data` which targets `<script>` elements with the `data` class.
- `attribute <String>`: Name of the data attribute used to derive the property name on the returned object. Defaults to `data-attr`, which reads the value from `data-attr="..."` on each script tag.

The helper returns the aggregated object. If no matching scripts are found the result is an empty object. Invalid JSON will throw the same error you would get from `JSON.parse`, making it easy to catch misconfigured script blocks during development.

## License

MIT © [Robin van der Vleuten](https://robinvdvleuten.nl)
