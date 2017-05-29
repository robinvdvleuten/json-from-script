// @flow
const unescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
};

const unescape = input =>
  input.replace(/&(?:amp|lt|gt|quot|#39);/g, m => unescapes[m] || m);

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
