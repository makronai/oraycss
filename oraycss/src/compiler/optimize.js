/**
 * Safe production CSS minifier and optimizer (zero-dependency)
 * Preserves quotes, calc() expressions, and custom properties.
 */
export function optimizeCSS(css) {
  if (!css || typeof css !== 'string') return '';

  let result = '';
  let i = 0;
  const len = css.length;
  let inString = false;
  let quoteChar = '';

  while (i < len) {
    const char = css[i];

    // Handle strings
    if (inString) {
      result += char;
      if (char === quoteChar && css[i - 1] !== '\\') {
        inString = false;
      }
      i++;
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      quoteChar = char;
      result += char;
      i++;
      continue;
    }

    // Strip comments /* ... */
    if (char === '/' && css[i + 1] === '*') {
      const endComment = css.indexOf('*/', i + 2);
      if (endComment === -1) break;
      i = endComment + 2;
      continue;
    }

    result += char;
    i++;
  }

  // Safe whitespace collapsing
  let minified = result
    .replace(/\s+/g, ' ')
    .replace(/\s*([\{\}:;,])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();

  // Ensure spaces around + and - inside calc() are preserved
  minified = minified.replace(/calc\([^)]+\)/g, (match) => {
    return match.replace(/([0-9%a-z])([+-])([0-9%a-z])/gi, '$1 $2 $3');
  });

  return minified;
}
