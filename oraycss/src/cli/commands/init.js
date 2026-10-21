import fs from 'node:fs';
import path from 'node:path';

export function runInit(options = {}) {
  const cwd = process.cwd();
  console.log('\x1b[1m\x1b[32mInitializing OrayCSS in\x1b[0m', cwd);

  const configPath = path.join(cwd, 'oray.config.js');
  if (fs.existsSync(configPath)) {
    console.log('\x1b[33mNotice:\x1b[0m oray.config.js already exists. Preserving existing file.');
  } else {
    const configContent = `/** @type {import('oraycss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx,vue,svelte,astro}'
  ],
  output: './dist/oray.css',
  preflight: true,
  darkMode: 'media', // 'media' | 'class'
  theme: {
    // Custom theme overrides
  },
  safelist: []
};
`;
    fs.writeFileSync(configPath, configContent, 'utf8');
    console.log('\x1b[32m✓\x1b[0m Created \x1b[1moray.config.js\x1b[0m');
  }

  // Create src/oray.css if src directory exists and file not present
  const srcDir = path.join(cwd, 'src');
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  const cssPath = path.join(srcDir, 'oray.css');
  if (!fs.existsSync(cssPath)) {
    const cssContent = `/* OrayCSS Starter Stylesheet */
@oray preflight;
@oray theme;
@oray utilities;

/* Add your custom CSS below */
`;
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log('\x1b[32m✓\x1b[0m Created \x1b[1msrc/oray.css\x1b[0m');
  }

  console.log(`
\x1b[1m\x1b[32mOrayCSS setup complete!\x1b[0m

Next steps:
  1. Add OrayCSS utility classes into your HTML or components.
  2. Compile your stylesheet:
     $ \x1b[36mnpx oraycss build\x1b[0m
  3. Or start watch mode while developing:
     $ \x1b[36mnpx oraycss watch\x1b[0m
`);
  return true;
}
