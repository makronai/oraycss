import React, { useState, useEffect } from 'react';
import { PLAYGROUND_PRESETS } from '../lib/playground-presets';
import { BrowserCompileOptions } from '../lib/browser-compiler';
import { Eye, Code2, Copy, Check, Sparkles, RefreshCw, Zap } from 'lucide-react';

interface PlaygroundViewProps {
  htmlCode: string;
  setHtmlCode: (code: string) => void;
  compiledCss: string;
  stats: {
    candidatesCount: number;
    rulesCount: number;
    bytes: number;
    durationMs: number;
    diagnostics: any;
  };
  options: BrowserCompileOptions;
  setOptions: React.Dispatch<React.SetStateAction<BrowserCompileOptions>>;
}

export const PlaygroundView: React.FC<PlaygroundViewProps> = ({
  htmlCode,
  setHtmlCode,
  compiledCss,
  stats,
  options,
  setOptions
}) => {
  const [activeRightTab, setActiveRightTab] = useState<'preview' | 'css'>('preview');
  const [previewTheme, setPreviewTheme] = useState<'dark' | 'light'>('dark');
  const [copied, setCopied] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string>('hero');

  const handlePresetChange = (presetId: string) => {
    setSelectedPreset(presetId);
    const p = PLAYGROUND_PRESETS.find(x => x.id === presetId);
    if (p) {
      setHtmlCode(p.html);
    }
  };

  const handleCopyCss = () => {
    navigator.clipboard.writeText(compiledCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Build iframe document with compiled CSS injected
  const iframeSrcDoc = `
    <!doctype html>
    <html lang="en" class="${previewTheme}">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          ${compiledCss}
        </style>
      </head>
      <body class="bg-background text-foreground antialiased min-h-screen p-4 flex flex-col items-center justify-center">
        ${htmlCode}
      </body>
    </html>
  `;

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 max-w-7xl mx-auto w-full space-y-4">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-surface border border-border rounded-2xl p-4">
        {/* Preset Selector */}
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-primary" />
            <span>Preset:</span>
          </label>
          <select
            value={selectedPreset}
            onChange={(e) => handlePresetChange(e.target.value)}
            className="rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {PLAYGROUND_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Compiler Options */}
        <div className="flex items-center gap-3 text-xs">
          <label className="flex items-center gap-1.5 cursor-pointer select-none text-muted-foreground hover:text-foreground">
            <input
              type="checkbox"
              checked={options.preflight}
              onChange={(e) => setOptions(prev => ({ ...prev, preflight: e.target.checked }))}
              className="rounded border-border text-primary focus:ring-0"
            />
            <span>Preflight</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer select-none text-muted-foreground hover:text-foreground">
            <input
              type="checkbox"
              checked={options.minify}
              onChange={(e) => setOptions(prev => ({ ...prev, minify: e.target.checked }))}
              className="rounded border-border text-primary focus:ring-0"
            />
            <span>Minify</span>
          </label>

          <div className="h-4 w-px bg-border"></div>

          {/* Metrics Pill */}
          <div className="flex items-center gap-2 bg-surface-elevated px-3 py-1 rounded-full border border-border font-mono text-[11px]">
            <span className="flex items-center gap-1 text-primary">
              <Zap className="size-3" />
              <span>{stats.durationMs}ms</span>
            </span>
            <span className="text-muted-foreground">&bull;</span>
            <span className="text-foreground">{stats.rulesCount} rules</span>
            <span className="text-muted-foreground">&bull;</span>
            <span className="text-muted-foreground">{(stats.bytes / 1024).toFixed(2)} KB</span>
          </div>
        </div>
      </div>

      {/* Editor & Preview Split Workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[560px]">
        {/* Left: Code Editor */}
        <div className="flex flex-col rounded-2xl border border-border bg-surface overflow-hidden shadow-soft">
          <div className="border-b border-border bg-surface-elevated/40 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary"></span>
              <span className="text-xs font-mono font-medium text-foreground">index.html (Source Markup)</span>
            </div>
            <span className="text-[11px] text-muted-foreground">Type any OrayCSS class</span>
          </div>

          <div className="flex-1 p-3">
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              spellCheck={false}
              className="w-full h-full min-h-[460px] bg-background/50 rounded-xl p-4 font-mono text-xs sm:text-sm text-foreground leading-relaxed border border-border focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              placeholder="Write HTML with OrayCSS classes..."
            />
          </div>
        </div>

        {/* Right: Live Preview & CSS Inspector */}
        <div className="flex flex-col rounded-2xl border border-border bg-surface overflow-hidden shadow-soft">
          {/* Tabs bar */}
          <div className="border-b border-border bg-surface-elevated/40 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-1 bg-surface border border-border rounded-lg p-0.5 text-xs font-medium">
              <button
                onClick={() => setActiveRightTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
                  activeRightTab === 'preview'
                    ? 'bg-surface-elevated text-foreground font-semibold shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Eye className="size-3.5" />
                <span>Live Preview</span>
              </button>
              <button
                onClick={() => setActiveRightTab('css')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition ${
                  activeRightTab === 'css'
                    ? 'bg-surface-elevated text-foreground font-semibold shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Code2 className="size-3.5" />
                <span>Compiled CSS ({stats.rulesCount})</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              {activeRightTab === 'preview' && (
                <button
                  onClick={() => setPreviewTheme(t => (t === 'dark' ? 'light' : 'dark'))}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface border border-border text-[11px] font-medium text-muted-foreground hover:text-foreground transition"
                  title="Toggle Preview Dark/Light Theme"
                >
                  <span>Theme:</span>
                  <span className="font-semibold text-primary uppercase text-[10px]">{previewTheme}</span>
                </button>
              )}

              {activeRightTab === 'css' && (
                <button
                  onClick={handleCopyCss}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition"
                >
                  {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Pane Body */}
          <div className="flex-1 relative bg-background/40">
            {activeRightTab === 'preview' ? (
              <iframe
                title="OrayCSS Live Preview"
                srcDoc={iframeSrcDoc}
                className="w-full h-full min-h-[460px] border-none"
                sandbox="allow-scripts"
              />
            ) : (
              <pre className="p-4 font-mono text-xs text-foreground overflow-auto h-full max-h-[500px] leading-relaxed">
                <code>{compiledCss}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
