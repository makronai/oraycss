/**
 * Zero-dependency glob matcher using native Regular Expressions
 */

/**
 * Expand `{html,js,jsx}` brace groups in glob pattern
 */
export function expandBraces(pattern) {
  const braceRegex = /\{([^}]+)\}/;
  const match = braceRegex.exec(pattern);
  if (!match) return [pattern];

  const parts = match[1].split(',');
  const prefix = pattern.slice(0, match.index);
  const suffix = pattern.slice(match.index + match[0].length);

  const results = [];
  for (const part of parts) {
    results.push(...expandBraces(`${prefix}${part.trim()}${suffix}`));
  }
  return results;
}

/**
 * Convert a glob string into a RegExp
 */
export function globToRegex(globStr) {
  // Normalize windows backslashes
  let normalized = globStr.replace(/\\/g, '/');

  // Strip leading ./
  if (normalized.startsWith('./')) {
    normalized = normalized.slice(2);
  }

  // Escape special regex characters except * and ?
  let regexStr = '^';
  let i = 0;
  while (i < normalized.length) {
    const char = normalized[i];
    if (char === '*' && normalized[i + 1] === '*') {
      if (normalized[i + 2] === '/') {
        regexStr += '(?:.+/)?';
        i += 3;
      } else {
        regexStr += '.*';
        i += 2;
      }
    } else if (char === '*') {
      regexStr += '[^/]*';
      i++;
    } else if (char === '?') {
      regexStr += '[^/]';
      i++;
    } else if (['.', '+', '^', '$', '(', ')', '[', ']', '{', '}', '|'].includes(char)) {
      regexStr += '\\' + char;
      i++;
    } else {
      regexStr += char;
      i++;
    }
  }
  regexStr += '$';

  return new RegExp(regexStr);
}

/**
 * Test whether a relative file path matches a pattern or list of patterns
 */
export function matchesPattern(filePath, patterns) {
  const normPath = filePath.replace(/\\/g, '/').replace(/^\.\//, '');
  const patternList = Array.isArray(patterns) ? patterns : [patterns];

  for (const pat of patternList) {
    const expanded = expandBraces(pat);
    for (const exp of expanded) {
      const rx = globToRegex(exp);
      if (rx.test(normPath)) return true;
    }
  }
  return false;
}
