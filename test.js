import cases from 'jest-in-case';
import jsonFromScript from './index';

cases(
  'jsonFromScript',
  ({ name, className, attribute, value }) => {
    document.body.innerHTML = name;
    expect(jsonFromScript(className, attribute)).toEqual(value);
  },
  {
    '<script type="application/json" class="data" data-attr="foo">{&quot;bar&quot;:&quot;baz&quot;}</script>': {
      value: { foo: { bar: 'baz' } },
    },
    '<script type="application/json" class="foo" data-attr="bar">&quot;baz&quot;</script>': {
      className: 'foo',
      value: { bar: 'baz' },
    },
    '<script type="application/json" class="data" data-prop="foo">&quot;bar&quot;</script>': {
      attribute: 'prop',
      value: { foo: 'bar' },
    },
    '<div class="data" data-attr="foo">&quot;bar&quot;</div>': {
      value: {},
    },
  }
);
