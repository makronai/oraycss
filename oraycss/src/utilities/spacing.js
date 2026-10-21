import { spacing } from '../theme/tokens.js';

export function matchSpacing(token, arbitrary) {
  // Arbitrary spacing
  if (arbitrary) {
    const p = arbitrary.prefix;
    const v = arbitrary.value;
    if (p === 'p') return `padding: ${v};`;
    if (p === 'px') return `padding-left: ${v}; padding-right: ${v};`;
    if (p === 'py') return `padding-top: ${v}; padding-bottom: ${v};`;
    if (p === 'pt') return `padding-top: ${v};`;
    if (p === 'pr') return `padding-right: ${v};`;
    if (p === 'pb') return `padding-bottom: ${v};`;
    if (p === 'pl') return `padding-left: ${v};`;
    if (p === 'ps') return `padding-inline-start: ${v};`;
    if (p === 'pe') return `padding-inline-end: ${v};`;

    if (p === 'm') return `margin: ${v};`;
    if (p === 'mx') return `margin-left: ${v}; margin-right: ${v};`;
    if (p === 'my') return `margin-top: ${v}; margin-bottom: ${v};`;
    if (p === 'mt') return `margin-top: ${v};`;
    if (p === 'mr') return `margin-right: ${v};`;
    if (p === 'mb') return `margin-bottom: ${v};`;
    if (p === 'ml') return `margin-left: ${v};`;
    if (p === 'ms') return `margin-inline-start: ${v};`;
    if (p === 'me') return `margin-inline-end: ${v};`;

    if (p === 'gap') return `gap: ${v};`;
    if (p === 'gap-x') return `column-gap: ${v};`;
    if (p === 'gap-y') return `row-gap: ${v};`;

    if (p === 'space-x') return `& > :not([hidden]) ~ :not([hidden]) {\n  margin-left: ${v};\n}`;
    if (p === 'space-y') return `& > :not([hidden]) ~ :not([hidden]) {\n  margin-top: ${v};\n}`;
  }

  // Token-based Spacing regex
  const spaceRegex = /^(-)?(p|px|py|pt|pr|pb|pl|ps|pe|m|mx|my|mt|mr|mb|ml|ms|me|gap|gap-x|gap-y|space-x|space-y)-([0-9.]+|px|auto|full)$/;
  const match = token.match(spaceRegex);
  if (!match) return null;

  const [, isNeg, prop, valKey] = match;
  const rawVal = spacing[valKey] || valKey;
  const val = isNeg ? `calc(-1 * ${rawVal})` : rawVal;

  switch (prop) {
    case 'p': return `padding: ${val};`;
    case 'px': return `padding-left: ${val}; padding-right: ${val};`;
    case 'py': return `padding-top: ${val}; padding-bottom: ${val};`;
    case 'pt': return `padding-top: ${val};`;
    case 'pr': return `padding-right: ${val};`;
    case 'pb': return `padding-bottom: ${val};`;
    case 'pl': return `padding-left: ${val};`;
    case 'ps': return `padding-inline-start: ${val};`;
    case 'pe': return `padding-inline-end: ${val};`;

    case 'm': return `margin: ${val};`;
    case 'mx': return `margin-left: ${val}; margin-right: ${val};`;
    case 'my': return `margin-top: ${val}; margin-bottom: ${val};`;
    case 'mt': return `margin-top: ${val};`;
    case 'mr': return `margin-right: ${val};`;
    case 'mb': return `margin-bottom: ${val};`;
    case 'ml': return `margin-left: ${val};`;
    case 'ms': return `margin-inline-start: ${val};`;
    case 'me': return `margin-inline-end: ${val};`;

    case 'gap': return `gap: ${val};`;
    case 'gap-x': return `column-gap: ${val};`;
    case 'gap-y': return `row-gap: ${val};`;

    case 'space-x':
      return `& > :not([hidden]) ~ :not([hidden]) {\n  margin-left: ${val};\n}`;
    case 'space-y':
      return `& > :not([hidden]) ~ :not([hidden]) {\n  margin-top: ${val};\n}`;
    default:
      return null;
  }
}
