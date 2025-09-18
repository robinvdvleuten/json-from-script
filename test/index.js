// @ts-check
import { JSDOM } from 'jsdom';
import { test } from 'uvu'
import * as assert from 'uvu/assert';
import jsonFromScript from '../src/index.js';

const { window } = new JSDOM();

test.before(() => {
  // @ts-ignore
	global.window = window;
	global.document = window.document;
})

test.before.each(() => {
  document.body.innerHTML = '';
});

test('named entities', () => {
  document.body.innerHTML = '<script type="application/json" class="data" data-attr="foo">{&quot;bar&quot;:&quot;baz&quot;}</script>';
  assert.equal(jsonFromScript('script.data'), { foo: { bar: 'baz' } });
});

test('numbered entities', () => {
  document.body.innerHTML = '<script type="application/json" class="data" data-attr="foo">{&#34;bar&#34;:&#34;baz&#34;}</script>';
  assert.equal(jsonFromScript('script.data'), { foo: { bar: 'baz' } });
});

test('custom selector', () => {
  document.body.innerHTML = '<script type="application/json" class="foo" data-attr="bar">&quot;baz&quot;</script>';
  assert.equal(jsonFromScript('script.foo'), { bar: 'baz' });
});

test('custom attribute', () => {
  document.body.innerHTML = '<script type="application/json" class="data" data-prop="foo">&quot;bar&quot;</script>';
  assert.equal(jsonFromScript('script.data', 'data-prop'), { foo: 'bar' });
});

test('no attribute', () => {
  document.body.innerHTML = '<script type="application/json" class="data">&quot;bar&quot;</script>';
  assert.equal(jsonFromScript('script.data'), {});
});

test('no script tag', () => {
  document.body.innerHTML = '<div class="data" data-attr="foo">&quot;bar&quot;</div>';
  assert.equal(jsonFromScript('script.data'), {});
});

test.run();
