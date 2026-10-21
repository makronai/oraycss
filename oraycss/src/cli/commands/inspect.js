import fs from 'node:fs';
import path from 'node:path';
import { resolveConfig } from '../../theme/config.js';
import { scanContentFiles } from '../../content/scan.js';
import { compile } from '../../compiler/compile.js';

export async function runInspect(options = {}) {
  const cwd = process.cwd();
  console.log('\x1b[1m\x1b[36mOrayCSS Project Inspector\x1b[0m\n');

  const config = await resolveConfig(options.config);
  const files = scanContentFiles(config.content, cwd);

  console.log(`\x1b[1mContent Patterns:\x1b[0m`);
  for (const p of config.content) {
    console.log(`  - ${p}`);
  }

  console.log(`\n\x1b[1mMatched Files (${files.length}):\x1b[0m`);
  for (const f of files.slice(0, 15)) {
    console.log(`  • ${path.relative(cwd, f)}`);
  }
  if (files.length > 15) {
    console.log(`  ... and ${files.length - 15} more files`);
  }

  const sources = [];
  for (const file of files) {
    try {
      sources.push(fs.readFileSync(file, 'utf8'));
    } catch (e) {}
  }

  const result = compile(sources, {
    theme: config.theme,
    preflight: config.preflight,
    darkMode: config.darkMode,
    safelist: config.safelist,
    minify: false
  });

  const d = result.stats.diagnostics;
  const sizeKb = (result.stats.bytes / 1024).toFixed(2);

  console.log(`\n\x1b[1m\x1b[32mInspection Summary:\x1b[0m`);
  console.log(`  Total Candidates:      ${d.totalCandidates}`);
  console.log(`  Recognized Utilities:  \x1b[32m${d.recognizedCount}\x1b[0m`);
  console.log(`  Unrecognized Tokens:   \x1b[33m${d.unrecognizedCount}\x1b[0m`);
  console.log(`  Safelisted Candidates: ${config.safelist.length}`);
  console.log(`  Generated Rules:       ${result.stats.rulesCount}`);
  console.log(`  Unminified CSS Size:   ${sizeKb} KB`);
  console.log(`  Analysis Duration:     ${result.stats.durationMs}ms`);

  console.log(`\n\x1b[1mUtilities by Category:\x1b[0m`);
  for (const [cat, count] of Object.entries(d.categoryCounts)) {
    console.log(`  - ${cat.padEnd(16)}: ${count} rules`);
  }

  if (d.unrecognizedCount > 0) {
    console.log(`\n\x1b[1m\x1b[33mSample Unrecognized Candidates (First 10):\x1b[0m`);
    for (const unc of d.unrecognizedCandidates.slice(0, 10)) {
      console.log(`  ? ${unc}`);
    }
  }

  return { files, config, result };
}
