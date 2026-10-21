import { spacing } from '../theme/tokens.js';

export function matchTransforms(token, arbitrary) {
  // Arbitrary transforms
  if (arbitrary) {
    if (arbitrary.prefix === 'translate-x') return `transform: translateX(${arbitrary.value});`;
    if (arbitrary.prefix === '-translate-x') return `transform: translateX(calc(-1 * ${arbitrary.value}));`;
    if (arbitrary.prefix === 'translate-y') return `transform: translateY(${arbitrary.value});`;
    if (arbitrary.prefix === '-translate-y') return `transform: translateY(calc(-1 * ${arbitrary.value}));`;
    if (arbitrary.prefix === 'scale') return `transform: scale(${arbitrary.value});`;
    if (arbitrary.prefix === 'rotate') return `transform: rotate(${arbitrary.value});`;
    if (arbitrary.prefix === '-rotate') return `transform: rotate(-${arbitrary.value});`;
  }

  // Translates: translate-x-*, -translate-x-*, translate-y-*, -translate-y-*
  const transMatch = token.match(/^(-)?translate-(x|y)-([0-9.]+|full|px|1\/2)$/);
  if (transMatch) {
    const [, isNeg, axis, valKey] = transMatch;
    let val = spacing[valKey] || valKey;
    if (valKey === 'full') val = '100%';
    if (valKey === '1/2') val = '50%';
    const finalVal = isNeg ? `-${val}` : val;
    return `transform: translate${axis.toUpperCase()}(${finalVal});`;
  }

  // Scale: scale-100, scale-95, scale-105, etc.
  const scaleMatch = token.match(/^scale-([0-9]+)$/);
  if (scaleMatch) {
    const num = parseInt(scaleMatch[1], 10);
    return `transform: scale(${num / 100});`;
  }
  const scaleAxisMatch = token.match(/^scale-(x|y)-([0-9]+)$/);
  if (scaleAxisMatch) {
    const [, axis, val] = scaleAxisMatch;
    const num = parseInt(val, 10);
    return `transform: scale${axis.toUpperCase()}(${num / 100});`;
  }

  // Rotate: rotate-45, -rotate-45, rotate-90, etc.
  const rotMatch = token.match(/^(-)?rotate-([0-9]+)$/);
  if (rotMatch) {
    const [, isNeg, deg] = rotMatch;
    const finalDeg = isNeg ? `-${deg}deg` : `${deg}deg`;
    return `transform: rotate(${finalDeg});`;
  }

  // Transform origin
  const originMap = {
    'origin-center': 'transform-origin: center;',
    'origin-top': 'transform-origin: top;',
    'origin-top-right': 'transform-origin: top right;',
    'origin-right': 'transform-origin: right;',
    'origin-bottom-right': 'transform-origin: bottom right;',
    'origin-bottom': 'transform-origin: bottom;',
    'origin-bottom-left': 'transform-origin: bottom left;',
    'origin-left': 'transform-origin: left;',
    'origin-top-left': 'transform-origin: top left;'
  };
  if (originMap[token]) return originMap[token];

  return null;
}
