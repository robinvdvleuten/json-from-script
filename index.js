export default function jsonFromScript(className, attribute) {
  return Array.from(
    // Only select <script> elements with the given class.
    document.querySelectorAll('script.' + (className || 'data'))
  ).reduce(function(data, element) {
    return (data[
      element.getAttribute('data-' + (attribute || 'attr'))
    ] = JSON.parse(
      element.textContent
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    )), data;
  }, {});
}
