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

export default (
  className: string,
  attribute: string
): { [attribute: string]: any } =>
  Array.prototype.reduce.call(
    document.getElementsByClassName(className || 'data'),
    (data, element) => {
      data[
        element.getAttribute(`data-${attribute || 'attribute'}`)
      ] = JSON.parse(unescape(element.textContent));
      return data;
    },
    {}
  );
