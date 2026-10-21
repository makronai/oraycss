import path from 'node:path';
import { runBuild } from './build.js';
import { startWatcher } from '../../content/watch.js';
import { resolveConfig } from '../../theme/config.js';

export async function runWatch(options = {}) {
  const cwd = process.cwd();
  const config = await resolveConfig(options.config);
  const outputPath = path.resolve(cwd, options.output || config.output || 'dist/oray.css');

  console.log('\x1b[1m\x1b[36mOrayCSS Watch Mode Active\x1b[0m');
  console.log('Watching for file modifications...\n');

  // Initial build
  await runBuild(options);

  const watcher = startWatcher({
    directories: [cwd],
    outputFile: outputPath,
    onRebuild: async (changedFile) => {
      const rel = path.relative(cwd, changedFile);
      console.log(`\n\x1b[33m⚡ File changed:\x1b[0m ${rel}`);
      await runBuild(options);
    }
  });

  // Handle graceful exit
  process.on('SIGINT', () => {
    console.log('\n\x1b[36mStopping OrayCSS watcher.\x1b[0m');
    watcher.close();
    process.exit(0);
  });

  return watcher;
}
