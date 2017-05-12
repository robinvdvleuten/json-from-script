// @flow
import unescape from 'lodash.unescape';

export default function jsonFromScript(
  className: string = 'data',
  attribute: string = 'attribute'
): { [attribute: string]: any } {
  return Array.prototype.reduce.call(
    document.getElementsByClassName(className),
    (data, element) => ({
      ...data,
      [element.getAttribute(`data-${attribute}`)]: JSON.parse(
        unescape(element.textContent)
      ),
    }),
    {}
  );
}
