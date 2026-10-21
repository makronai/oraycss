import React from 'react';
import { Terminal, Code, Layout, BookOpen, Cpu, Copy, Check, Download } from 'lucide-react';

export type ActiveTab = 'docs' | 'playground' | 'terminal' | 'architecture';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  compiledCss: string;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, compiledCss }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyCss = () => {
    navigator.clipboard.writeText(compiledCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([compiledCss], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'oray.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="size-8 sm:size-9 rounded-xl bg-primary flex items-center justify-center font-black text-primary-foreground shadow-glow text-base sm:text-lg">
            O
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-sm sm:text-base tracking-tight text-foreground">Oray<span className="text-primary">CSS</span></span>
              <span className="hidden sm:inline-block rounded-full bg-primary/10 border border-primary/30 px-2 py-0.5 text-[10px] font-mono font-semibold text-primary">
                v1.0.0 &bull; 0 DEPS
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-muted-foreground hidden md:block">AOT Utility-First CSS Framework</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-surface border border-border rounded-xl p-1 text-xs font-medium overflow-x-auto max-w-[55vw] sm:max-w-none">
          <button
            onClick={() => setActiveTab('docs')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition ${
              activeTab === 'docs'
                ? 'bg-surface-elevated text-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <BookOpen className="size-3.5" />
            <span>Docs</span>
          </button>

          <button
            onClick={() => setActiveTab('playground')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition ${
              activeTab === 'playground'
                ? 'bg-surface-elevated text-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Code className="size-3.5" />
            <span>Playground</span>
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition ${
              activeTab === 'terminal'
                ? 'bg-surface-elevated text-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Terminal className="size-3.5" />
            <span>CLI Hub</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition hidden md:flex ${
              activeTab === 'architecture'
                ? 'bg-surface-elevated text-foreground font-semibold shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Cpu className="size-3.5" />
            <span>Architecture</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCss}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground hover:bg-surface-elevated transition"
            title="Copy compiled CSS to clipboard"
          >
            {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
            <span>{copied ? 'Copied CSS' : 'Copy CSS'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:shadow-glow transition"
            title="Download compiled oray.css"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">Export CSS</span>
          </button>
        </div>
      </div>
    </header>
  );
};
