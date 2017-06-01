export default (className, attribute) =>
  Array.prototype.reduce.call(
    document.getElementsByClassName(className || 'data'),
    (data, element) => {
      data[
        element.getAttribute(`data-${attribute || 'attribute'}`)
      ] = JSON.parse(
        element.textContent
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
      );

      return data;
    },
    {}
  );
