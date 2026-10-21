import { shadows } from '../theme/tokens.js';

export function matchEffects(token, arbitrary) {
  // Arbitrary shadow
  if (arbitrary && arbitrary.prefix === 'shadow') {
    return `box-shadow: ${arbitrary.value};`;
  }
  if (arbitrary && arbitrary.prefix === 'opacity') {
    return `opacity: ${arbitrary.value};`;
  }
  if (arbitrary && arbitrary.prefix === 'blur') {
    return `filter: blur(${arbitrary.value});`;
  }
  if (arbitrary && arbitrary.prefix === 'backdrop-blur') {
    return `-webkit-backdrop-filter: blur(${arbitrary.value});\nbackdrop-filter: blur(${arbitrary.value});`;
  }

  // Shadow scale
  if (token === 'shadow') return `box-shadow: ${shadows.DEFAULT};`;
  if (token.startsWith('shadow-')) {
    const key = token.replace('shadow-', '');
    if (shadows[key]) {
      return `box-shadow: ${shadows[key]};`;
    }
  }

  // Opacity scale
  const opMatch = token.match(/^opacity-([0-9]+)$/);
  if (opMatch) {
    const num = parseInt(opMatch[1], 10);
    return `opacity: ${num / 100};`;
  }

  // Blur scale
  const blurMap = {
    'blur-none': 'filter: blur(0);',
    'blur-sm': 'filter: blur(4px);',
    'blur': 'filter: blur(8px);',
    'blur-md': 'filter: blur(12px);',
    'blur-lg': 'filter: blur(16px);',
    'blur-xl': 'filter: blur(24px);',
    'blur-2xl': 'filter: blur(40px);',
    'blur-3xl': 'filter: blur(64px);',
    'backdrop-blur-none': '-webkit-backdrop-filter: blur(0);\nbackdrop-filter: blur(0);',
    'backdrop-blur-sm': '-webkit-backdrop-filter: blur(4px);\nbackdrop-filter: blur(4px);',
    'backdrop-blur': '-webkit-backdrop-filter: blur(8px);\nbackdrop-filter: blur(8px);',
    'backdrop-blur-md': '-webkit-backdrop-filter: blur(12px);\nbackdrop-filter: blur(12px);',
    'backdrop-blur-lg': '-webkit-backdrop-filter: blur(16px);\nbackdrop-filter: blur(16px);',
    'backdrop-blur-xl': '-webkit-backdrop-filter: blur(24px);\nbackdrop-filter: blur(24px);',
    'backdrop-blur-2xl': '-webkit-backdrop-filter: blur(40px);\nbackdrop-filter: blur(40px);'
  };
  if (blurMap[token]) return blurMap[token];

  // Mix blend mode
  if (token.startsWith('mix-blend-')) {
    return `mix-blend-mode: ${token.replace('mix-blend-', '')};`;
  }

  return null;
}
