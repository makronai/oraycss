import fs from 'node:fs';
import path from 'node:path';
import { IGNORED_DIRECTORIES } from './extensions.js';

/**
 * Watch content files and trigger rebuild callback on change
 */
export function startWatcher({
  directories = [process.cwd()],
  outputFile,
  onRebuild,
  debounceMs = 80
}) {
  const normOutputFile = outputFile ? path.resolve(outputFile) : null;
  let timer = null;
  const watchers = [];

  const trigger = (event, filename) => {
    if (!filename) return;

    // Ignore changes to output file to avoid infinite loops!
    if (normOutputFile && path.resolve(filename) === normOutputFile) {
      return;
    }

    if (IGNORED_DIRECTORIES.has(filename) || filename.includes('node_modules') || filename.includes('.git')) {
      return;
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      onRebuild(filename);
    }, debounceMs);
  };

  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;

    try {
      // Node.js fs.watch supports recursive on macOS and Windows, but on Linux we watch directories
      const watcher = fs.watch(dir, { recursive: true }, trigger);
      watchers.push(watcher);
    } catch (err) {
      // Fallback to non-recursive watch on top-level and subdirectories
      try {
        const watcher = fs.watch(dir, trigger);
        watchers.push(watcher);
      } catch (e) {
        console.error(`Warning: could not watch directory ${dir}:`, e.message);
      }
    }
  }

  return {
    close() {
      if (timer) clearTimeout(timer);
      for (const w of watchers) {
        try {
          w.close();
        } catch {}
      }
    }
  };
}
