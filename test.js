const cases = require('jest-in-case');
const jsonFromScript = require('./index');

cases(
  'jsonFromScript',
  ({ name, className, attribute, value }) => {
    document.body.innerHTML = name;
    expect(jsonFromScript(className, attribute)).toEqual(value);
  },
  {
    '<script type="application/json" class="data" data-attribute="foo">{&quot;bar&quot;:&quot;baz&quot;}</script>': {
      value: { foo: { bar: 'baz' } },
    },
    '<script type="application/json" class="foo" data-attribute="bar">&quot;baz&quot;</script>': {
      className: 'foo',
      value: { bar: 'baz' },
    },
    '<script type="application/json" class="data" data-property="foo">&quot;bar&quot;</script>': {
      attribute: 'property',
      value: { foo: 'bar' },
    },
  }
);
