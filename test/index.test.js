import jsonFromScript from '../src';

const createResponse = (status, statusText, response) =>
  new window.Response(response, {
    status,
    statusText,
    headers: {
      'content-type': 'application/json',
    },
  });

describe('json-from-script', () => {
  it("should return a JSON object for a document's script tag", () => {
    document.body.innerHTML = `
      <script type="application/json" class="data" data-attribute="foo">{&quot;bar&quot;:&quot;baz&quot;}</script>
    `;

    expect(jsonFromScript()).toEqual({ foo: { bar: 'baz' } });
  });

  it('should return a JSON object for a custom class', () => {
    document.body.innerHTML = `
      <script type="application/json" class="foo" data-attribute="bar">&quot;baz&quot;</script>
    `;

    expect(jsonFromScript('foo')).toEqual({ bar: 'baz' });
  });

  it('should return a JSON object for a custom attribute', () => {
    document.body.innerHTML = `
      <script type="application/json" class="data" data-property="foo">&quot;bar&quot;</script>
    `;

    expect(jsonFromScript('data', 'property')).toEqual({ foo: 'bar' });
  });
});
