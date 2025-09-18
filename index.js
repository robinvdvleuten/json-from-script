export default function jsonFromScript(
  selector = 'script.data',
  attribute = 'data-attr',
  scope = document
) {
  return Array.from(
    // Only select <script> elements with the given class.
    scope.querySelectorAll(selector)
  ).reduce(function(data, element) {
    return (
      (data[element.getAttribute(attribute)] = JSON.parse(
        element.textContent
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#34;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
      )),
      data
    );
  }, {});
}
