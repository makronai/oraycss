export function printHelp() {
  console.log(`
\x1b[1m\x1b[32mOrayCSS\x1b[0m - Zero-Dependency Ahead-of-Time Utility-First CSS Framework (v1.0.0)

\x1b[1mUSAGE:\x1b[0m
  $ \x1b[36moraycss\x1b[0m <command> [options]

\x1b[1mCOMMANDS:\x1b[0m
  \x1b[32minit\x1b[0m       Initialize a new oray.config.js and starter files in the project
  \x1b[32mbuild\x1b[0m      Scan content files and compile production-ready CSS
  \x1b[32mwatch\x1b[0m      Watch source files for changes and automatically rebuild CSS
  \x1b[32minspect\x1b[0m    Inspect candidate classes, recognized utilities, and bundle breakdown

\x1b[1mOPTIONS:\x1b[0m
  -i, --input <file>     Custom authored CSS input file (supports @oray directives)
  -o, --output <file>    Path for the generated CSS file (default: dist/oray.css)
  -c, --config <file>    Path to custom configuration file (default: oray.config.js)
  -m, --minify           Enable production CSS minification and whitespace removal
  -w, --watch            Watch mode alias for 'oraycss watch'
      --verbose          Display detailed compile diagnostics and candidate details
  -v, --version          Print framework version
  -h, --help             Show this help documentation

\x1b[1mEXAMPLES:\x1b[0m
  $ oraycss init
  $ oraycss build
  $ oraycss build --input src/styles.css --output public/oray.css --minify
  $ oraycss watch --output dist/bundle.css
  $ oraycss inspect

For more details, visit: https://github.com/oraycss/oraycss
`);
}
