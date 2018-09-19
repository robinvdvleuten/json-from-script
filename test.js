import cases from 'jest-in-case';
import jsonFromScript from './index';

cases(
  'jsonFromScript',
  ({ name, selector, attribute, value }) => {
    document.body.innerHTML = name;
    expect(jsonFromScript(selector, attribute)).toEqual(value);
  },
  {
    '<script type="application/json" class="data" data-attr="foo">{&quot;bar&quot;:&quot;baz&quot;}</script>': {
      value: { foo: { bar: 'baz' } },
    },
    '<script type="application/json" class="foo" data-attr="bar">&quot;baz&quot;</script>': {
      selector: 'script.foo',
      value: { bar: 'baz' },
    },
    '<script type="application/json" class="data" data-prop="foo">&quot;bar&quot;</script>': {
      attribute: 'data-prop',
      value: { foo: 'bar' },
    },
    '<div class="data" data-attr="foo">&quot;bar&quot;</div>': {
      value: {},
    },
  }
);
