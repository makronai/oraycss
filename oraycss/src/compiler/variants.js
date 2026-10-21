import { breakpoints } from '../theme/tokens.js';

export const pseudoClassMap = {
  hover: ':hover',
  focus: ':focus',
  'focus-visible': ':focus-visible',
  'focus-within': ':focus-within',
  active: ':active',
  visited: ':visited',
  disabled: ':disabled',
  checked: ':checked',
  required: ':required',
  invalid: ':invalid',
  'read-only': ':read-only',
  first: ':first-child',
  last: ':last-child',
  odd: ':nth-child(odd)',
  even: ':nth-child(even)'
};

export const pseudoElementMap = {
  before: '::before',
  after: '::after',
  placeholder: '::placeholder'
};

export const mediaVariants = {
  'motion-safe': '@media (prefers-reduced-motion: no-preference)',
  'motion-reduce': '@media (prefers-reduced-motion: reduce)',
  'contrast-more': '@media (prefers-contrast: more)',
  'contrast-less': '@media (prefers-contrast: less)',
  print: '@media print'
};

/**
 * Split candidate into variants and base class
 * Handles colons inside arbitrary brackets safely, e.g. md:top-[calc(100%+1rem)]
 */
export function splitVariants(candidate) {
  const variants = [];
  let current = '';
  let inBracket = false;

  for (let i = 0; i < candidate.length; i++) {
    const char = candidate[i];
    if (char === '[') inBracket = true;
    else if (char === ']') inBracket = false;

    if (char === ':' && !inBracket) {
      if (current) {
        variants.push(current);
        current = '';
      }
    } else {
      current += char;
    }
  }

  return {
    variants,
    baseClass: current
  };
}

/**
 * Format variant into selector modifier and media wrappers
 */
export function processVariants(variants, escapedSelector, darkModeStrategy = 'media') {
  let selector = `.${escapedSelector}`;
  const mediaQueries = [];

  for (const v of variants) {
    if (breakpoints[v]) {
      mediaQueries.push(`@media (min-width: ${breakpoints[v]})`);
    } else if (pseudoClassMap[v]) {
      selector += pseudoClassMap[v];
    } else if (pseudoElementMap[v]) {
      selector += pseudoElementMap[v];
    } else if (v === 'dark') {
      if (darkModeStrategy === 'class') {
        selector = `.dark ${selector}`;
      } else {
        // Support class or media query
        selector = `.dark ${selector}`;
      }
    } else if (v === 'group-hover') {
      selector = `.group:hover ${selector}`;
    } else if (v === 'group-focus') {
      selector = `.group:focus ${selector}`;
    } else if (v === 'group-active') {
      selector = `.group:active ${selector}`;
    } else if (v === 'peer-hover') {
      selector = `.peer:hover ~ ${selector}`;
    } else if (v === 'peer-checked') {
      selector = `.peer:checked ~ ${selector}`;
    } else if (v === 'peer-focus') {
      selector = `.peer:focus ~ ${selector}`;
    } else if (mediaVariants[v]) {
      mediaQueries.push(mediaVariants[v]);
    }
  }

  return {
    finalSelector: selector,
    mediaQueries
  };
}
