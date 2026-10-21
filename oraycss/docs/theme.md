# OrayCSS Theme and Tokens

OrayCSS is built on a design token architecture that combines semantic roles with flexible primitive scales.

## Semantic Roles

Semantic tokens represent the purpose of UI elements rather than fixed raw hex values. When switched between light and dark modes, semantic tokens adapt automatically:

| Token | Dark Default | Light Default | Purpose |
|-------|--------------|---------------|---------|
| `background` | `#09090b` | `#ffffff` | Primary app canvas |
| `foreground` | `#fafafa` | `#09090b` | Primary high-contrast text |
| `surface` | `#121215` | `#f4f4f5` | Cards, panels, sidebars |
| `surface-elevated` | `#18181b` | `#ffffff` | Modals, dropdowns, popovers |
| `primary` | `#b8f36b` | `#10b981` | Brand accents, key actions |
| `accent` | `#a78bfa` | `#8b5cf6` | Secondary highlight |
| `muted` | `#52525b` | `#71717a` | Subtle icons, borders |
| `muted-foreground`| `#a1a1aa` | `#71717a` | Secondary text descriptions |
| `border` | `#27272a` | `#e4e4e7` | Dividers, card strokes |
| `ring` | `#b8f36b` | `#10b981` | Accessible focus indicators |

## Customizing in `oray.config.js`

```javascript
export default {
  theme: {
    colors: {
      primary: '#0ea5e9',
      'primary-foreground': '#ffffff',
      accent: '#f43f5e'
    },
    fontFamily: {
      sans: "'Inter', system-ui, sans-serif"
    },
    borderRadius: {
      xl: '1.25rem'
    }
  }
};
```
