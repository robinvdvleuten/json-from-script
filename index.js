module.exports = function(className, attr) {
  return Array.from(
    document.getElementsByClassName(className || 'data')
  ).reduce(function(data, el) {
    return (data[el.getAttribute('data-' + (attr || 'attribute'))] = JSON.parse(
      el.textContent
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    )), data;
  }, {});
};
