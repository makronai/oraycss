import fs from 'node:fs';
import path from 'node:path';
import { DEFAULT_EXTENSIONS, IGNORED_DIRECTORIES } from './extensions.js';
import { matchesPattern } from './patterns.js';

/**
 * Scan directory recursively for content files
 */
export function scanDirectory(dir, patterns, baseDir = dir) {
  let matchedFiles = [];

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const name = entry.name;

      if (IGNORED_DIRECTORIES.has(name) || name.startsWith('.')) {
        continue;
      }

      const fullPath = path.join(dir, name);
      const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');

      if (entry.isDirectory()) {
        matchedFiles.push(...scanDirectory(fullPath, patterns, baseDir));
      } else if (entry.isFile()) {
        const ext = path.extname(name).toLowerCase();
        if (DEFAULT_EXTENSIONS.includes(ext) || patterns.some(p => p.includes(ext))) {
          if (matchesPattern(relPath, patterns)) {
            matchedFiles.push(fullPath);
          }
        }
      }
    }
  } catch (err) {
    // If directory can't be read, continue gracefully
  }

  return matchedFiles;
}

/**
 * Scan all content files based on configuration content globs
 */
export function scanContentFiles(contentPatterns, cwd = process.cwd()) {
  const patterns = Array.isArray(contentPatterns) ? contentPatterns : [contentPatterns];
  const results = new Set();

  for (const pat of patterns) {
    // Check if pattern is a direct file path that exists
    const directPath = path.resolve(cwd, pat);
    if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
      results.add(directPath);
      continue;
    }

    // Otherwise scan from cwd
    const found = scanDirectory(cwd, [pat], cwd);
    for (const f of found) {
      results.add(f);
    }
  }

  return Array.from(results).sort();
}
