/**
 * Zero-dependency CLI argument parser
 */
export function parseArguments(argv = process.argv.slice(2)) {
  const parsed = {
    command: null,
    input: null,
    output: null,
    config: null,
    content: null,
    minify: false,
    watch: false,
    verbose: false,
    help: false,
    version: false,
    raw: argv
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === '--help' || arg === '-h') {
      parsed.help = true;
    } else if (arg === '--version' || arg === '-v') {
      parsed.version = true;
    } else if (arg === '--minify' || arg === '-m') {
      parsed.minify = true;
    } else if (arg === '--watch' || arg === '-w') {
      parsed.watch = true;
    } else if (arg === '--verbose') {
      parsed.verbose = true;
    } else if (arg === '--input' || arg === '-i') {
      parsed.input = argv[++i];
    } else if (arg === '--output' || arg === '-o') {
      parsed.output = argv[++i];
    } else if (arg === '--config' || arg === '-c') {
      parsed.config = argv[++i];
    } else if (arg === '--content') {
      parsed.content = argv[++i];
    } else if (!arg.startsWith('-') && !parsed.command) {
      parsed.command = arg;
    }
  }

  return parsed;
}
