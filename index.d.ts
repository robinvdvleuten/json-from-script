/**
 * Hand-written declarations — bundler type generation is disabled.
 *
 * @template {Object.<string, unknown>} T
 * @param {string} [selector='script.data']
 * @param {string} [attribute='data-attr']
 * @param {Document} [scope=document]
 * @returns {T}
 */
export default function jsonFromScript<T extends {
  [x: string]: unknown;
}>(selector?: string, attribute?: string, scope?: Document): T;
