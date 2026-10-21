export interface ThemeColors {
  background?: string;
  foreground?: string;
  surface?: string;
  'surface-elevated'?: string;
  primary?: string;
  'primary-foreground'?: string;
  secondary?: string;
  'secondary-foreground'?: string;
  accent?: string;
  'accent-foreground'?: string;
  muted?: string;
  'muted-foreground'?: string;
  border?: string;
  input?: string;
  ring?: string;
  success?: string;
  warning?: string;
  danger?: string;
  [key: string]: any;
}

export interface ConfigTheme {
  colors?: ThemeColors;
  fontFamily?: Record<string, string>;
  fontSize?: Record<string, [string, { lineHeight: string }]>;
  spacing?: Record<string, string>;
  borderRadius?: Record<string, string>;
  boxShadow?: Record<string, string>;
  screens?: Record<string, string>;
  [key: string]: any;
}

export interface Config {
  content?: string[];
  output?: string;
  preflight?: boolean;
  darkMode?: 'media' | 'class';
  theme?: ConfigTheme;
  safelist?: string[];
  minify?: boolean;
}

export interface CompileOptions {
  theme?: ConfigTheme;
  preflight?: boolean;
  darkMode?: 'media' | 'class';
  safelist?: string[];
  minify?: boolean;
  inputCss?: string;
}

export interface Diagnostics {
  totalCandidates: number;
  recognizedCount: number;
  unrecognizedCount: number;
  unrecognizedCandidates: string[];
  categoryCounts: Record<string, number>;
  safelistUsed: string[];
}

export interface CompileStats {
  candidatesCount: number;
  rulesCount: number;
  bytes: number;
  durationMs: number;
  diagnostics: Diagnostics;
}

export interface CompileResult {
  css: string;
  stats: CompileStats;
}

export interface ParsedRule {
  candidate: string;
  variants: string[];
  baseClass: string;
  css: string;
  keyframe?: string | null;
  category: string;
}

export function compile(sources?: string | string[], options?: CompileOptions): CompileResult;
export function extractCandidates(sourceCode: string): Set<string>;
export function parseCandidate(candidate: string): ParsedRule | null;
export function escapeClassName(className: string): string;
export function resolveUtility(baseClass: string): { css: string; category: string; keyframe?: string | null } | null;
export function resolveConfig(customConfigOrPath?: string | Config): Promise<Config>;
export function optimizeCSS(css: string): string;
export function generateCssVariables(theme?: ConfigTheme, darkModeStrategy?: string): string;
export function scanContentFiles(contentPatterns: string | string[], cwd?: string): string[];
