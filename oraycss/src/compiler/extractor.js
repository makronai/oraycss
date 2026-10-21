/**
 * Fast, zero-dependency candidate extractor for HTML, JSX, TSX, Vue, Svelte, Astro
 */

/**
 * Extract balanced bracket contents like [37rem] or [calc(100%+1rem)]
 */
function extractBalancedCandidate(input, startIndex) {
  let depth = 0;
  let j = startIndex;
  while (j < input.length) {
    const char = input[j];
    if (char === '[') depth++;
    else if (char === ']') {
      depth--;
      if (depth === 0) {
        j++;
        break;
      }
    } else if (depth === 0 && /\s|"|'|`|>|<|;|\{|\}/.test(char)) {
      break;
    }
    j++;
  }
  return input.slice(startIndex, j);
}

/**
 * Extract candidates from a string of code
 */
export function extractCandidates(sourceCode) {
  if (!sourceCode || typeof sourceCode !== 'string') return new Set();

  const candidates = new Set();

  // Pattern 1: HTML class, JSX className, Vue :class attributes
  const attrRegex = /(?:class|className)\s*=\s*["'`{]([^"'`}]*)["'`}]/g;
  let match;
  while ((match = attrRegex.exec(sourceCode)) !== null) {
    const classList = match[1];
    const tokens = classList.split(/\s+/);
    for (const token of tokens) {
      const trimmed = token.trim();
      if (trimmed && isValidCandidate(trimmed)) {
        candidates.add(trimmed);
      }
    }
  }

  // Pattern 2: Template literals and utility calls like clsx('...', "...")
  const stringLiteralRegex = /["'`]\s*([a-zA-Z0-9_\-:/#[\].,%()!+ ]{2,})\s*["'`]/g;
  while ((match = stringLiteralRegex.exec(sourceCode)) !== null) {
    const tokens = match[1].split(/\s+/);
    for (const token of tokens) {
      const trimmed = token.trim();
      if (trimmed && isValidCandidate(trimmed)) {
        candidates.add(trimmed);
      }
    }
  }

  // Pattern 3: Fallback scanner for custom tags or markdown with brackets
  const bracketCandidateRegex = /([a-zA-Z0-9_\-:]+\[[^\]\s"']+\])/g;
  while ((match = bracketCandidateRegex.exec(sourceCode)) !== null) {
    const token = match[1].trim();
    if (token && isValidCandidate(token)) {
      candidates.add(token);
    }
  }

  return candidates;
}

/**
 * Basic candidate validation to filter out obvious non-CSS tokens
 */
export function isValidCandidate(token) {
  if (token.length > 120) return false;
  if (/^https?:\/\//.test(token)) return false;
  if (token.includes(' ') || token.includes('\n') || token.includes('\t')) return false;
  if (token.startsWith('<') || token.endsWith('>')) return false;
  if (token.startsWith('//') || token.startsWith('/*')) return false;
  if (/^[0-9]+$/.test(token)) return false; // purely numbers
  if (token.startsWith('=') || token.endsWith('=')) return false;
  return true;
}
