# OrayCSS CLI Reference

The OrayCSS CLI is a self-contained executable that scans source files, extracts utility classes, and emits production stylesheets.

## Commands

### `oraycss init`
Generates a starter `oray.config.js` and `src/oray.css` file without overwriting existing files.

### `oraycss build [options]`
Scans all matching files specified in `content` and outputs generated CSS.

| Option | Flag | Description | Default |
|--------|------|-------------|---------|
| `--input <file>` | `-i` | Authored input stylesheet with `@oray` directives | `null` |
| `--output <file>` | `-o` | Destination path for compiled CSS | `dist/oray.css` |
| `--config <file>` | `-c` | Path to custom configuration file | `oray.config.js` |
| `--minify` | `-m` | Minify output CSS and strip whitespace/comments | `false` |
| `--watch` | `-w` | Automatically rebuild on file change | `false` |
| `--verbose` | | Display detailed breakdown of extracted categories | `false` |

### `oraycss watch [options]`
Starts a debounced file watcher that monitors your project tree and incrementally recompiles whenever HTML, JSX, TSX, Vue, or Svelte files are modified. Changes to the output CSS file are safely ignored to prevent infinite rebuild loops.

### `oraycss inspect [options]`
Analyzes project content without modifying files:
- Lists all discovered source files
- Counts total candidate tokens
- Separates recognized utilities from unrecognized words
- Displays breakdown across utility categories (layout, typography, flexbox, etc.)
- Reports unminified CSS size and compile duration
