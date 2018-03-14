module.exports = function(className, attr) {
  return Array.from(
    document.getElementsByClassName(className || 'data')
  ).reduce(function(data, element) {
    return (data[
      element.getAttribute('data-' + (attr || 'attribute'))
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
