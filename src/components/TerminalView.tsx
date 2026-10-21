import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, Copy, Check } from 'lucide-react';

interface TerminalLog {
  id: string;
  command: string;
  output: string;
  timestamp: string;
}

export const TerminalView: React.FC = () => {
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: '1',
      command: 'oraycss build --minify',
      output: `✓ OrayCSS Build Complete in 3.4ms
  Scanned:    4 content files
  Candidates: 148 unique tokens
  Rules:      115 generated CSS rules
  Output:     dist/oray.css (8.42 KB minified)`,
      timestamp: '12:00:01'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    let out = '';
    const time = new Date().toLocaleTimeString();

    if (trimmed === 'oraycss init' || trimmed === 'npx oraycss init') {
      out = `✓ Created oray.config.js
✓ Created src/oray.css

OrayCSS setup complete!
Next steps:
  1. Add utility classes to markup
  2. Run 'npx oraycss build'`;
    } else if (trimmed.includes('build')) {
      const isMinify = trimmed.includes('--minify') || trimmed.includes('-m');
      out = `✓ OrayCSS Build Complete in 4.1ms
  Scanned:    4 content files
  Candidates: 162 unique tokens
  Rules:      128 generated CSS rules
  Output:     dist/oray.css (${isMinify ? '9.14 KB minified' : '14.28 KB'})`;
    } else if (trimmed.includes('inspect')) {
      out = `OrayCSS Project Inspector

Content Patterns:
  - ./index.html
  - ./src/**/*.{html,js,jsx,ts,tsx}

Matched Files (4):
  • index.html
  • src/App.tsx
  • src/main.tsx
  • src/components/Header.tsx

Inspection Summary:
  Total Candidates:      162
  Recognized Utilities:  128
  Unrecognized Tokens:   34
  Safelisted Candidates: 0
  Generated Rules:       128
  Unminified CSS Size:   14.28 KB
  Analysis Duration:     2.8ms

Utilities by Category:
  - layout          : 22 rules
  - flexbox         : 18 rules
  - spacing         : 32 rules
  - sizing          : 16 rules
  - typography      : 24 rules
  - backgrounds     : 10 rules
  - effects         : 6 rules`;
    } else if (trimmed.includes('--help') || trimmed === 'oraycss' || trimmed === 'oraycss help') {
      out = `OrayCSS - Zero-Dependency Ahead-of-Time Utility-First CSS Framework (v1.0.0)

USAGE:
  $ oraycss <command> [options]

COMMANDS:
  init       Initialize a new oray.config.js and starter files in project
  build      Scan content files and compile production-ready CSS
  watch      Watch source files for changes and automatically rebuild CSS
  inspect    Inspect candidate classes, recognized utilities, and bundle breakdown

OPTIONS:
  -i, --input <file>     Custom authored CSS input file (supports @oray directives)
  -o, --output <file>    Path for the generated CSS file (default: dist/oray.css)
  -c, --config <file>    Path to custom configuration file (default: oray.config.js)
  -m, --minify           Enable production CSS minification and whitespace removal
  -w, --watch            Watch mode alias for 'oraycss watch'
      --verbose          Display detailed compile diagnostics and candidate details
  -v, --version          Print framework version
  -h, --help             Show this help documentation`;
    } else if (trimmed.includes('--test') || trimmed.includes('test')) {
      out = `TAP version 13
# Subtest: arbitrary width w-[37rem]
ok 1 - arbitrary width w-[37rem]
# Subtest: compile generates complete stylesheet with preflight
ok 2 - compile generates complete stylesheet with preflight
# Subtest: layout, flexbox, grid, typography utilities resolve
ok 3 - all 13 utility families resolve correctly
# Subtest: responsive, hover, dark, and group variants work
ok 4 - all variants generate valid CSS rules
# Subtest: safe production optimizer preserves calc()
ok 5 - optimizeCSS preserves calc expressions and string literals

1..31
# tests 31
# pass 31
# fail 0
# duration_ms 531.96ms`;
    } else {
      out = `Command '${trimmed}' executed successfully.`;
    }

    setLogs(prev => [...prev, {
      id: Date.now().toString(),
      command: trimmed,
      output: out,
      timestamp: time
    }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      runCommand(inputVal);
    }
  };

  const handleClear = () => {
    setLogs([]);
  };

  const sampleCommands = [
    'oraycss build --minify',
    'oraycss inspect',
    'oraycss init',
    'oraycss --help',
    'node --test tests/*.test.js'
  ];

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 max-w-7xl mx-auto w-full space-y-4">
      {/* Top Controls */}
      <div className="bg-surface border border-border rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Terminal className="size-4 text-primary" />
            <span>OrayCSS Standalone CLI Terminal</span>
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Test CLI commands in the interactive browser sandbox or copy commands to your local shell.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface-elevated text-xs font-medium text-muted-foreground hover:text-foreground transition"
          >
            <RotateCcw className="size-3.5" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Quick Command Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted-foreground font-medium">Quick run:</span>
        {sampleCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => runCommand(cmd)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/40 transition"
          >
            <Play className="size-3 text-primary" />
            <span>{cmd}</span>
          </button>
        ))}
      </div>

      {/* Terminal Window */}
      <div className="flex-1 rounded-2xl border border-border bg-[#09090b] shadow-2xl flex flex-col overflow-hidden min-h-[500px]">
        {/* Terminal Header */}
        <div className="border-b border-border/80 bg-[#121215] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-danger/80"></span>
            <span className="size-3 rounded-full bg-warning/80"></span>
            <span className="size-3 rounded-full bg-success/80"></span>
            <span className="ml-2 text-xs font-mono text-muted-foreground">bash &mdash; oraycss v1.0.0</span>
          </div>
          <span className="text-[11px] font-mono text-primary font-medium">zero-dependency</span>
        </div>

        {/* Terminal Output */}
        <div className="flex-1 p-6 font-mono text-xs text-foreground/90 overflow-y-auto space-y-6 leading-relaxed">
          {logs.map((log) => (
            <div key={log.id} className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary font-bold">$</span>
                <span className="text-foreground font-semibold">{log.command}</span>
                <span className="text-[10px] text-muted-foreground/60 ml-auto">{log.timestamp}</span>
              </div>
              <pre className="text-foreground/80 pl-4 whitespace-pre-wrap leading-relaxed border-l border-primary/20">
                {log.output}
              </pre>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-primary font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type oraycss command and press enter..."
              className="flex-1 bg-transparent text-foreground text-xs font-mono focus:outline-none placeholder:text-muted-foreground/40"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};
