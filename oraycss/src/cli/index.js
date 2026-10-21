import { parseArguments } from './arguments.js';
import { printHelp } from './commands/help.js';
import { runInit } from './commands/init.js';
import { runBuild } from './commands/build.js';
import { runWatch } from './commands/watch.js';
import { runInspect } from './commands/inspect.js';

export async function runCLI(argv = process.argv.slice(2)) {
  const args = parseArguments(argv);

  if (args.version) {
    console.log('oraycss v1.0.0');
    return;
  }

  if (args.help || args.command === 'help') {
    printHelp();
    return;
  }

  try {
    if (args.command === 'init') {
      await runInit(args);
    } else if (args.command === 'watch' || args.watch) {
      await runWatch(args);
    } else if (args.command === 'inspect') {
      await runInspect(args);
    } else if (args.command === 'build' || !args.command) {
      await runBuild(args);
    } else {
      console.error(`\x1b[31mError:\x1b[0m Unknown command "${args.command}"`);
      printHelp();
      process.exit(1);
    }
  } catch (err) {
    console.error(`\x1b[31mOrayCSS Fatal Error:\x1b[0m`, err.message);
    if (args.verbose) {
      console.error(err.stack);
    }
    process.exit(1);
  }
}
