// @ts-check

/**
 * @template {Object.<string, unknown>} T
 * 
 * @param {string} [selector='script.data']
 * @param {string} [attribute='data-attr']
 * @param {Document} [scope=document]
 * @returns {T}
 */
export default function jsonFromScript(
  selector = 'script.data',
  attribute = 'data-attr',
  scope = document
) {
  return Array.from(
    // Only select <script> elements with the given class.
    scope.querySelectorAll(selector)
  ).reduce(function(data, element) {
    var attr = element.getAttribute(attribute);
    
    return (
      attr && (data[attr] = JSON.parse(
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
