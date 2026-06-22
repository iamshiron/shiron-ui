# @shiron/ui

A React 19 component library built on [shadcn/ui](https://ui.shadcn.com) (radix-mira style), [Radix UI](https://radix-ui.com), [Base UI](https://base-ui.com), and [Tailwind CSS v4](https://tailwindcss.com). Designed for consumption as a workspace package or git submodule.

## Requirements

This is a **source-only** library (no build step). Consumers must provide all peer dependencies:

- **React 19** (`react`, `react-dom`)
- **Tailwind CSS v4** with the theme tokens defined in [`src/styles/globals.css`](src/styles/globals.css)
- **Styling primitives:** `clsx`, `tailwind-merge`, `class-variance-authority`, `tw-animate-css`
- **Component primitives:** `radix-ui`, `@base-ui/react`, `cmdk`, `vaul`, `embla-carousel-react`, `react-resizable-panels`, `react-day-picker`, `input-otp`, `recharts`, `sonner`, `next-themes`
- **Icons (optional):** `@hugeicons/react` + `@hugeicons/core-free-icons` — required only if you use icon-bearing components

See [`package.json`](package.json) for the full version matrix.

## Installation

### As a git submodule

```bash
git submodule add https://github.com/iamshiron/shiron-ui.git packages/ui
```

Then reference it in your workspace (pnpm):

```jsonc
// pnpm-workspace.yaml
packages:
  - "packages/*"
```

```jsonc
// consuming app's package.json
"dependencies": {
  "@shiron/ui": "workspace:*"
}
```

### Direct dependency

```jsonc
"dependencies": {
  "@shiron/ui": "github:iamshiron/shiron-ui"
}
```

## Usage

Components are imported via the `@shiron/ui` scope:

```tsx
import { Button } from "@shiron/ui/components/ui/button";
import { Dialog, DialogContent } from "@shiron/ui/components/ui/dialog";
import { cn } from "@shiron/ui/lib/utils";
```

Import the global styles once in your app entry (defines theme tokens + base layer):

```ts
import "@shiron/ui/styles/globals.css";
```

## Components

accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, collapsible, combobox, command, context-menu, dialog, direction, drawer, dropdown-menu, empty, field, hover-card, input, input-group, input-otp, item, kbd, label, menubar, native-select, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toggle, toggle-group, tooltip

## Tooling

- **Biome** — linting & formatting (`pnpm lint`, `pnpm format`)
- **TypeScript** — strict, source-only (`tsc --noEmit`)

## License

[MIT](LICENSE)
