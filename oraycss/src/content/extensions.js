export const DEFAULT_EXTENSIONS = [
  '.html',
  '.htm',
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.mjs',
  '.cjs',
  '.vue',
  '.svelte',
  '.astro',
  '.md',
  '.mdx',
  '.php'
];

export const IGNORED_DIRECTORIES = new Set([
  'node_modules',
  '.git',
  '.svn',
  '.hg',
  'dist',
  'build',
  '.aistudio',
  '.next',
  '.nuxt',
  '.turbo',
  '.cache',
  'coverage'
]);
