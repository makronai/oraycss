import fs from 'node:fs';
import path from 'node:path';
import { resolveConfig } from '../../theme/config.js';
import { scanContentFiles } from '../../content/scan.js';
import { compile } from '../../compiler/compile.js';

export async function runBuild(options = {}) {
  const cwd = process.cwd();
  const config = await resolveConfig(options.config);

  const outputPath = path.resolve(cwd, options.output || config.output || 'dist/oray.css');
  const inputPath = options.input ? path.resolve(cwd, options.input) : null;

  let inputCss = '';
  if (inputPath && fs.existsSync(inputPath)) {
    inputCss = fs.readFileSync(inputPath, 'utf8');
  }

  // Scan content files
  const contentPatterns = options.content ? options.content.split(',') : config.content;
  const files = scanContentFiles(contentPatterns, cwd);
  const sources = [];

  for (const file of files) {
    try {
      sources.push(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      // Skip unreadable files
    }
  }

  const isMinify = options.minify !== undefined ? options.minify : !!config.minify;

  // Run compiler
  const result = compile(sources, {
    theme: config.theme,
    preflight: config.preflight,
    darkMode: config.darkMode,
    safelist: config.safelist,
    minify: isMinify,
    inputCss
  });

  // Ensure output directory exists
  const outDir = path.dirname(outputPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, result.css, 'utf8');

  const sizeKb = (result.stats.bytes / 1024).toFixed(2);
  const relOut = path.relative(cwd, outputPath);

  console.log(`\x1b[32m✓\x1b[0m \x1b[1mOrayCSS Build Complete\x1b[0m in \x1b[36m${result.stats.durationMs}ms\x1b[0m`);
  console.log(`  Scanned:    \x1b[33m${files.length}\x1b[0m files`);
  console.log(`  Candidates: \x1b[33m${result.stats.candidatesCount}\x1b[0m unique tokens`);
  console.log(`  Rules:      \x1b[32m${result.stats.rulesCount}\x1b[0m generated CSS rules`);
  console.log(`  Output:     \x1b[1m${relOut}\x1b[0m (\x1b[35m${sizeKb} KB\x1b[0m${isMinify ? ' minified' : ''})`);

  if (options.verbose) {
    console.log('\n\x1b[1mCategory breakdown:\x1b[0m');
    for (const [cat, count] of Object.entries(result.stats.diagnostics.categoryCounts)) {
      console.log(`  - ${cat}: ${count}`);
    }
  }

  return result;
}
