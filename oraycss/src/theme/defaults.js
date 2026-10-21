import {
  semanticColors,
  palette,
  spacing,
  typography,
  radii,
  shadows,
  breakpoints,
  transitions
} from './tokens.js';

export const defaultTheme = {
  semanticColors,
  palette,
  colors: {
    ...semanticColors.dark,
    ...palette
  },
  spacing,
  ...typography,
  borderRadius: radii,
  boxShadow: shadows,
  screens: breakpoints,
  transitionDuration: transitions.duration,
  transitionTimingFunction: transitions.timing
};

export const defaultConfig = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx,vue,svelte,astro,md,mdx}'
  ],
  output: './dist/oray.css',
  preflight: true,
  darkMode: 'media', // 'media' | 'class'
  theme: defaultTheme,
  safelist: []
};
