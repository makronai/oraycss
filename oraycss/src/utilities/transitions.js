import { transitions } from '../theme/tokens.js';

export function matchTransitions(token, arbitrary) {
  // Arbitrary transition duration/timing
  if (arbitrary) {
    if (arbitrary.prefix === 'duration') return `transition-duration: ${arbitrary.value};`;
    if (arbitrary.prefix === 'delay') return `transition-delay: ${arbitrary.value};`;
    if (arbitrary.prefix === 'ease') return `transition-timing-function: ${arbitrary.value};`;
  }

  // Base transition presets
  const transMap = {
    transition: 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
    'transition-all': 'transition-property: all;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
    'transition-colors': 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
    'transition-opacity': 'transition-property: opacity;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
    'transition-shadow': 'transition-property: box-shadow;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
    'transition-transform': 'transition-property: transform;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;',
    'transition-none': 'transition-property: none;'
  };
  if (transMap[token]) return transMap[token];

  // Duration
  if (token.startsWith('duration-')) {
    const durKey = token.replace('duration-', '');
    if (transitions.duration[durKey]) {
      return `transition-duration: ${transitions.duration[durKey]};`;
    }
  }

  // Timing function
  if (token.startsWith('ease-')) {
    const easeKey = token.replace('ease-', '');
    if (transitions.timing[easeKey]) {
      return `transition-timing-function: ${transitions.timing[easeKey]};`;
    }
  }

  // Delay
  if (token.startsWith('delay-')) {
    const delKey = token.replace('delay-', '');
    if (transitions.duration[delKey]) {
      return `transition-delay: ${transitions.duration[delKey]};`;
    }
  }

  return null;
}
