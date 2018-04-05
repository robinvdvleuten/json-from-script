export default function jsonFromScript(className, attribute) {
  return Array.from(
    document.getElementsByClassName(className || 'data')
  ).reduce(function(data, element) {
    return (data[
      element.getAttribute('data-' + (attribute || 'attribute'))
    ] = JSON.parse(
      element.textContent
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    )), data;
  }, {});
};
