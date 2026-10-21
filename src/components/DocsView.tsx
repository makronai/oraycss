import React, { useState, useMemo } from 'react';
import { Search, Copy, Check, Hash, Layers, Palette } from 'lucide-react';
import { semanticColors, palette, spacing, radii, shadows, breakpoints } from '../../oraycss/src/theme/tokens.js';

interface UtilityDocItem {
  name: string;
  category: string;
  declaration: string;
  description: string;
}

const UTILITY_CATALOG: UtilityDocItem[] = [
  // Layout
  { name: 'block', category: 'Layout', declaration: 'display: block;', description: 'Standard block flow' },
  { name: 'inline-block', category: 'Layout', declaration: 'display: inline-block;', description: 'Inline with block sizing' },
  { name: 'flex', category: 'Layout', declaration: 'display: flex;', description: 'Flexbox container' },
  { name: 'inline-flex', category: 'Layout', declaration: 'display: inline-flex;', description: 'Inline flexbox container' },
  { name: 'grid', category: 'Layout', declaration: 'display: grid;', description: 'CSS Grid container' },
  { name: 'hidden', category: 'Layout', declaration: 'display: none;', description: 'Removes element from layout' },
  { name: 'relative', category: 'Layout', declaration: 'position: relative;', description: 'Relative to normal position' },
  { name: 'absolute', category: 'Layout', declaration: 'position: absolute;', description: 'Positioned relative to closest ancestor' },
  { name: 'fixed', category: 'Layout', declaration: 'position: fixed;', description: 'Fixed to viewport' },
  { name: 'sticky', category: 'Layout', declaration: 'position: sticky;', description: 'Sticks when scrolled into view' },
  { name: 'z-50', category: 'Layout', declaration: 'z-index: 50;', description: 'Top-level elevation layer' },
  { name: 'overflow-hidden', category: 'Layout', declaration: 'overflow: hidden;', description: 'Clips overflow content' },
  { name: 'isolate', category: 'Layout', declaration: 'isolation: isolate;', description: 'Creates stacking context' },

  // Flexbox
  { name: 'flex-col', category: 'Flexbox', declaration: 'flex-direction: column;', description: 'Vertical flex flow' },
  { name: 'flex-row', category: 'Flexbox', declaration: 'flex-direction: row;', description: 'Horizontal flex flow' },
  { name: 'items-center', category: 'Flexbox', declaration: 'align-items: center;', description: 'Center cross-axis alignment' },
  { name: 'justify-between', category: 'Flexbox', declaration: 'justify-content: space-between;', description: 'Even space between items' },
  { name: 'justify-center', category: 'Flexbox', declaration: 'justify-content: center;', description: 'Center main-axis alignment' },
  { name: 'flex-wrap', category: 'Flexbox', declaration: 'flex-wrap: wrap;', description: 'Wrap onto multiple lines' },
  { name: 'grow', category: 'Flexbox', declaration: 'flex-grow: 1;', description: 'Fill remaining available space' },
  { name: 'shrink-0', category: 'Flexbox', declaration: 'flex-shrink: 0;', description: 'Prevent element from shrinking' },

  // Grid
  { name: 'grid-cols-1', category: 'Grid', declaration: 'grid-template-columns: repeat(1, minmax(0, 1fr));', description: 'Single column grid' },
  { name: 'grid-cols-3', category: 'Grid', declaration: 'grid-template-columns: repeat(3, minmax(0, 1fr));', description: 'Three column grid' },
  { name: 'col-span-2', category: 'Grid', declaration: 'grid-column: span 2 / span 2;', description: 'Span 2 columns' },
  { name: 'col-span-full', category: 'Grid', declaration: 'grid-column: 1 / -1;', description: 'Span entire grid width' },
  { name: 'grid-cols-[auto_1fr_auto]', category: 'Grid', declaration: 'grid-template-columns: auto 1fr auto;', description: 'Arbitrary grid template' },

  // Spacing
  { name: 'p-4', category: 'Spacing', declaration: 'padding: 1rem;', description: '1rem padding on all sides' },
  { name: 'px-6', category: 'Spacing', declaration: 'padding-left: 1.5rem; padding-right: 1.5rem;', description: 'Horizontal padding' },
  { name: 'py-12', category: 'Spacing', declaration: 'padding-top: 3rem; padding-bottom: 3rem;', description: 'Vertical padding' },
  { name: 'm-auto', category: 'Spacing', declaration: 'margin: auto;', description: 'Centered automatic margin' },
  { name: 'mx-auto', category: 'Spacing', declaration: 'margin-left: auto; margin-right: auto;', description: 'Horizontal center container' },
  { name: 'gap-4', category: 'Spacing', declaration: 'gap: 1rem;', description: '1rem grid and flex gap' },
  { name: 'space-y-6', category: 'Spacing', declaration: '& > :not([hidden]) ~ :not([hidden]) { margin-top: 1.5rem; }', description: 'Vertical child spacing' },

  // Sizing
  { name: 'w-full', category: 'Sizing', declaration: 'width: 100%;', description: '100% width' },
  { name: 'max-w-3xl', category: 'Sizing', declaration: 'max-width: 48rem;', description: '48rem maximum container width' },
  { name: 'h-screen', category: 'Sizing', declaration: 'height: 100vh;', description: 'Full viewport height' },
  { name: 'min-h-screen', category: 'Sizing', declaration: 'min-height: 100vh;', description: 'Minimum 100vh height' },
  { name: 'size-12', category: 'Sizing', declaration: 'width: 3rem; height: 3rem;', description: 'Both width & height 3rem' },
  { name: 'aspect-video', category: 'Sizing', declaration: 'aspect-ratio: 16 / 9;', description: '16:9 widescreen ratio' },
  { name: 'w-[37rem]', category: 'Sizing', declaration: 'width: 37rem;', description: 'Arbitrary 37rem width' },

  // Typography
  { name: 'text-sm', category: 'Typography', declaration: 'font-size: 0.875rem; line-height: 1.25rem;', description: 'Small body text' },
  { name: 'text-4xl', category: 'Typography', declaration: 'font-size: 2.25rem; line-height: 2.5rem;', description: 'Display title' },
  { name: 'font-semibold', category: 'Typography', declaration: 'font-weight: 600;', description: 'Semi-bold 600 weight' },
  { name: 'tracking-tight', category: 'Typography', declaration: 'letter-spacing: -0.025em;', description: 'Condensed letter spacing' },
  { name: 'leading-relaxed', category: 'Typography', declaration: 'line-height: 1.625;', description: 'Comfortable editorial line height' },
  { name: 'text-primary', category: 'Typography', declaration: 'color: var(--oray-primary);', description: 'Semantic brand accent color' },
  { name: 'text-muted-foreground', category: 'Typography', declaration: 'color: var(--oray-muted-foreground);', description: 'Subtle descriptive text' },
  { name: 'truncate', category: 'Typography', declaration: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;', description: 'One-line ellipsis clipping' },

  // Backgrounds & Borders
  { name: 'bg-background', category: 'Colors', declaration: 'background-color: var(--oray-background);', description: 'Adaptive base canvas' },
  { name: 'bg-surface', category: 'Colors', declaration: 'background-color: var(--oray-surface);', description: 'Card and panel background' },
  { name: 'bg-primary', category: 'Colors', declaration: 'background-color: var(--oray-primary);', description: 'Primary action color' },
  { name: 'bg-gradient-to-br', category: 'Colors', declaration: 'linear-gradient(to bottom right, ...)', description: 'Diagonal linear gradient' },
  { name: 'border', category: 'Borders', declaration: 'border-width: 1px;', description: '1px standard border' },
  { name: 'border-border', category: 'Borders', declaration: 'border-color: var(--oray-border);', description: 'Adaptive border stroke' },
  { name: 'rounded-xl', category: 'Borders', declaration: 'border-radius: 0.75rem;', description: '12px border radius' },
  { name: 'rounded-full', category: 'Borders', declaration: 'border-radius: 9999px;', description: 'Pill or circular shape' },

  // Effects & Motion
  { name: 'shadow-soft', category: 'Effects', declaration: 'box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);', description: 'Gentle blurred depth' },
  { name: 'shadow-glow', category: 'Effects', declaration: 'box-shadow: 0 0 35px -5px rgba(184, 243, 107, 0.4);', description: 'Electric neon glow' },
  { name: 'transition', category: 'Motion', declaration: 'transition-property: ...; transition-duration: 150ms;', description: 'Smooth standard transition' },
  { name: 'duration-200', category: 'Motion', declaration: 'transition-duration: 200ms;', description: '200ms timing' },
  { name: 'animate-spin', category: 'Motion', declaration: 'animation: oray-spin 1s linear infinite;', description: '360 degree rotation' },
  { name: 'animate-pulse', category: 'Motion', declaration: 'animation: oray-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;', description: 'Gentle opacity pulsing' }
];

export const DocsView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const categories = ['All', 'Layout', 'Flexbox', 'Grid', 'Spacing', 'Sizing', 'Typography', 'Colors', 'Borders', 'Effects', 'Motion'];

  const filteredItems = useMemo(() => {
    return UTILITY_CATALOG.filter((item) => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.declaration.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, selectedCategory]);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedItem(name);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 max-w-7xl mx-auto w-full space-y-6">
      {/* Header and Search */}
      <div className="bg-surface border border-border rounded-2xl p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Interactive Utility Reference & Cheat Sheet</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Search recognized OrayCSS classes, view emitted CSS declarations, and copy class tokens.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3.5 top-3 size-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search utilities (e.g., flex, shadow-glow, grid-cols, text-primary)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-elevated border border-border text-xs sm:text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
                  : 'text-muted-foreground hover:bg-surface-elevated hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Utilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            className="group rounded-xl border border-border bg-surface p-4 flex flex-col justify-between hover:border-primary/40 hover:bg-surface-elevated/40 transition duration-150"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-primary">{item.name}</span>
                <span className="text-[10px] text-muted-foreground bg-surface-elevated px-2 py-0.5 rounded-full border border-border">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{item.description}</p>
            </div>

            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
              <code className="font-mono text-[11px] text-foreground/80 truncate max-w-[200px]">
                {item.declaration}
              </code>
              <button
                onClick={() => handleCopy(item.name)}
                className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary transition"
                title="Copy class name"
              >
                {copiedItem === item.name ? <Check className="size-3 text-success" /> : <Copy className="size-3" />}
                <span>{copiedItem === item.name ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-surface border border-border rounded-2xl">
          <p className="text-sm text-muted-foreground">No utilities matched "{query}".</p>
          <p className="text-xs text-muted-foreground mt-1">Remember arbitrary brackets like <code className="text-primary font-mono">w-[{query}]</code> are supported!</p>
        </div>
      )}
    </div>
  );
};
