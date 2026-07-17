# Honami UI

[![CI](https://github.com/iamshiron/shiron-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/iamshiron/shiron-ui/actions/workflows/ci.yml)
[![Deploy](https://github.com/iamshiron/shiron-ui/actions/workflows/pages.yml/badge.svg)](https://github.com/iamshiron/shiron-ui/actions/workflows/pages.yml)

A source-only React 19 + Tailwind CSS v4 component library built on
[shadcn/ui](https://ui.shadcn.com): glassmorphic surfaces, gradient accents and
twelve named themes, all driven by one design-token layer. Published as the
`@shiron/ui` package.

**[Live demo →](https://iamshiron.github.io/shiron-ui/)** ·
**[Storybook →](https://iamshiron.github.io/shiron-ui/storybook/)**

> Source-only, no published package yet — you consume the TypeScript source as a
> git submodule and let your own Vite + Tailwind pipeline compile it. A proper
> npm package will follow.

## Themes

Twelve themes across six accents, each with a light and dark variant. Switch by
setting `data-theme` on the root, or use the provider-less `useTheme` hook.

| Dark | Light | Accent |
| --- | --- | --- |
| Amethyst | Jasper | Purple |
| Onyx | Opal | Neutral |
| Sapphire | Aquamarine | Blue |
| Ruby | Carnelian | Red |
| Topaz | Amber | Orange |
| Jade | Peridot | Green |

| | |
| :---: | :---: |
| <img src="assets/screenshots/amethyst.png" width="400" alt="Amethyst" /><br>**Amethyst** | <img src="assets/screenshots/jasper.png" width="400" alt="Jasper" /><br>**Jasper** |
| <img src="assets/screenshots/sapphire.png" width="400" alt="Sapphire" /><br>**Sapphire** | <img src="assets/screenshots/aquamarine.png" width="400" alt="Aquamarine" /><br>**Aquamarine** |
| <img src="assets/screenshots/ruby.png" width="400" alt="Ruby" /><br>**Ruby** | <img src="assets/screenshots/carnelian.png" width="400" alt="Carnelian" /><br>**Carnelian** |
| <img src="assets/screenshots/jade.png" width="400" alt="Jade" /><br>**Jade** | <img src="assets/screenshots/peridot.png" width="400" alt="Peridot" /><br>**Peridot** |
| <img src="assets/screenshots/topaz.png" width="400" alt="Topaz" /><br>**Topaz** | <img src="assets/screenshots/amber.png" width="400" alt="Amber" /><br>**Amber** |
| <img src="assets/screenshots/onyx.png" width="400" alt="Onyx" /><br>**Onyx** | <img src="assets/screenshots/opal.png" width="400" alt="Opal" /><br>**Opal** |

## Built on

[shadcn/ui](https://ui.shadcn.com) · [Radix UI](https://www.radix-ui.com) ·
[Base UI](https://base-ui.com) · [Tailwind CSS v4](https://tailwindcss.com) ·
[Solar Icons](https://solar-icons.vercel.app) ·
[Recharts](https://recharts.org) · plus cmdk, vaul, embla, react-day-picker,
input-otp, sonner and next-themes.

## Quickstart

**1. Vendor it as a submodule** and wire it into your pnpm workspace:

```bash
git submodule add https://github.com/iamshiron/shiron-ui.git packages/ui
```

```yaml
# pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"
```

```jsonc
// your app's package.json
{ "dependencies": { "@shiron/ui": "workspace:*" } }
```

**2. Install the peer dependencies** the library imports:

```bash
pnpm add radix-ui @base-ui/react class-variance-authority clsx \
  tailwind-merge tw-animate-css cmdk vaul embla-carousel-react \
  react-resizable-panels react-day-picker input-otp recharts sonner \
  next-themes @solar-icons/react@2.0.0-beta.2 \
  @fontsource-variable/fredoka @fontsource-variable/azeret-mono
pnpm add -D tailwindcss @tailwindcss/vite
```

**3. Alias the source** in Vite and TypeScript:

```ts
// vite.config.ts
resolve: {
  alias: { "@shiron/ui": path.resolve(__dirname, "../../packages/ui/src") },
}
```

```jsonc
// tsconfig.json
"paths": { "@shiron/ui/*": ["../../packages/ui/src/*"] }
```

**4. Wire the stylesheet** (import once from your entry file):

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "@fontsource-variable/fredoka";
@import "@fontsource-variable/azeret-mono";
@import "@shiron/ui/styles/globals.css";

/* Point Tailwind at the components so their classes get generated. */
@source "../../../../packages/ui/src/components";

/* Solar v2 sizes icons from this variable. */
:root { --solar-size: 0.9rem; }
```

**5. Use it:**

```tsx
import { Button } from "@shiron/ui/components/ui/button";

export function Example() {
  return <Button>Click me</Button>;
}
```

The [Docs page](https://iamshiron.github.io/shiron-ui/docs) walks through the
same steps with more detail.

## Development

```bash
pnpm install
pnpm demo:dev          # run the demo/docs site
pnpm -C demo storybook # run Storybook
pnpm test              # component + CSS-integrity tests
```

## License

[MIT](LICENSE)
