export function matchAccessibility(token) {
  const map = {
    'sr-only': 'position: absolute;\nwidth: 1px;\nheight: 1px;\npadding: 0;\nmargin: -1px;\noverflow: hidden;\nclip: rect(0, 0, 0, 0);\nwhite-space: nowrap;\nborder-width: 0;',
    'not-sr-only': 'position: static;\nwidth: auto;\nheight: auto;\npadding: 0;\nmargin: 0;\noverflow: visible;\nclip: auto;\nwhite-space: normal;',
    'pointer-events-none': 'pointer-events: none;',
    'pointer-events-auto': 'pointer-events: auto;',
    'select-none': 'user-select: none;',
    'select-text': 'user-select: text;',
    'select-all': 'user-select: all;',
    'select-auto': 'user-select: auto;',
    'cursor-auto': 'cursor: auto;',
    'cursor-default': 'cursor: default;',
    'cursor-pointer': 'cursor: pointer;',
    'cursor-wait': 'cursor: wait;',
    'cursor-text': 'cursor: text;',
    'cursor-move': 'cursor: move;',
    'cursor-not-allowed': 'cursor: not-allowed;',
    'scroll-smooth': 'scroll-behavior: smooth;',
    'scroll-auto': 'scroll-behavior: auto;'
  };

  if (map[token]) return map[token];

  return null;
}
