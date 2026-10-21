/**
 * CSS Selector escaping and candidate normalization
 */

/**
 * Escape special CSS characters in class names for valid CSS selectors
 */
export function escapeClassName(className) {
  return className.replace(/([:#[\].,%()+/\\$!*^=@`~?])/g, '\\$1');
}

/**
 * Check if candidate has arbitrary value syntax [value]
 */
export function hasArbitraryValue(token) {
  return /\[([^\]]+)\]/.test(token);
}

/**
 * Extract arbitrary value and property prefix
 * e.g. 'w-[37rem]' => { prefix: 'w', value: '37rem' }
 * e.g. 'bg-[#101014]' => { prefix: 'bg', value: '#101014' }
 * e.g. 'grid-cols-[auto_1fr_auto]' => { prefix: 'grid-cols', value: 'auto 1fr auto' }
 */
export function parseArbitraryValue(token) {
  const match = token.match(/^(.*?)-\[([^\]]+)\]$/);
  if (!match) return null;

  let [, prefix, rawVal] = match;
  // Convert underscores to spaces inside arbitrary values if not escaped, e.g. auto_1fr_auto -> auto 1fr auto
  let value = rawVal.replace(/_/g, ' ');

  return { prefix, value };
}
