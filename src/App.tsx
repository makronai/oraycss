/**
 * OrayCSS Developer Studio & Playground
 * Zero-Dependency, Ahead-of-Time Utility-First CSS Framework
 */
import React, { useState, useMemo } from 'react';
import { Header, ActiveTab } from './components/Header';
import { DocsView } from './components/DocsView';
import { PlaygroundView } from './components/PlaygroundView';
import { TerminalView } from './components/TerminalView';
import { ArchitectureView } from './components/ArchitectureView';
import { compileInBrowser, BrowserCompileOptions } from './lib/browser-compiler';
import { PLAYGROUND_PRESETS } from './lib/playground-presets';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('docs');
  const [htmlCode, setHtmlCode] = useState<string>(PLAYGROUND_PRESETS[0].html);
  const [options, setOptions] = useState<BrowserCompileOptions>({
    preflight: true,
    minify: false,
    darkMode: 'media',
    safelist: []
  });

  // Recompile instantly when HTML markup or options change
  const compileResult = useMemo(() => {
    return compileInBrowser(htmlCode, options);
  }, [htmlCode, options]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Studio Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        compiledCss={compileResult.css}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col">
        {activeTab === 'docs' && <DocsView />}

        {activeTab === 'playground' && (
          <PlaygroundView
            htmlCode={htmlCode}
            setHtmlCode={setHtmlCode}
            compiledCss={compileResult.css}
            stats={compileResult.stats}
            options={options}
            setOptions={setOptions}
          />
        )}

        {activeTab === 'terminal' && <TerminalView />}

        {activeTab === 'architecture' && <ArchitectureView />}
      </main>

      {/* Global Status Bar */}
      <footer className="border-t border-border bg-surface px-6 py-3 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-success font-medium">
            <span className="size-2 rounded-full bg-success"></span>
            <span>Compiler Ready</span>
          </span>
          <span>&bull;</span>
          <span>OrayCSS v1.0.0</span>
          <span>&bull;</span>
          <span className="text-primary font-mono">0 NPM Dependencies</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span>AOT Compilation</span>
          <span>&bull;</span>
          <span>Node.js v22+</span>
          <span>&bull;</span>
          <span>Pure CSS Output</span>
        </div>
      </footer>
    </div>
  );
}
