import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@shiron/ui/components/ui/alert";
import { Badge } from "@shiron/ui/components/ui/badge";
import { Button } from "@shiron/ui/components/ui/button";
import { InfoCircleLinearIcon } from "@solar-icons/react";
import type { ReactNode } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { site } from "@/lib/site";

function Section({
	id,
	title,
	children,
}: {
	id: string;
	title: string;
	children: ReactNode;
}) {
	return (
		<section id={id} className="scroll-mt-20 flex flex-col gap-4">
			<h2 className="font-heading font-semibold text-2xl tracking-tight">
				{title}
			</h2>
			{children}
		</section>
	);
}

const SNIPPETS = {
	submodule: `# Add the library as a git submodule
git submodule add https://github.com/iamshiron/shiron-ui.git packages/ui`,
	workspace: `# pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"`,
	dep: `// your app's package.json
{
  "dependencies": {
    "@shiron/ui": "workspace:*"
  }
}`,
	peers: `pnpm add radix-ui @base-ui/react class-variance-authority clsx \\
  tailwind-merge tw-animate-css cmdk vaul embla-carousel-react \\
  react-resizable-panels react-day-picker input-otp recharts sonner \\
  next-themes @solar-icons/react@2.0.0-beta.2 \\
  @fontsource-variable/fredoka @fontsource-variable/azeret-mono

pnpm add -D tailwindcss @tailwindcss/vite`,
	vite: `import path from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      // Vite resolves the extensions from the library source.
      "@shiron/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
});`,
	tsconfig: `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@shiron/ui/*": ["../../packages/ui/src/*"]
    }
  }
}`,
	css: `@import "tailwindcss";
@import "tw-animate-css";
@import "@fontsource-variable/fredoka";
@import "@fontsource-variable/azeret-mono";
@import "@shiron/ui/styles/globals.css";

/* Tailwind scans your app automatically, but the library lives outside it.
   Point Tailwind at the components so their utility classes get generated —
   the path is relative to THIS file. */
@source "../../../../packages/ui/src/components";

/* Solar v2 icons read their size from --solar-size; set a sane default. */
:root {
  --solar-size: 0.9rem;
}`,
	usage: `import { Button } from "@shiron/ui/components/ui/button";
import { Input } from "@shiron/ui/components/ui/input";

export function Example() {
  return (
    <div className="flex gap-2">
      <Input placeholder="you@example.com" />
      <Button>Subscribe</Button>
    </div>
  );
}`,
	theming: `// Provider-less: reads/writes data-theme on <html>, persists to localStorage.
import { useTheme } from "@shiron/ui/hooks/use-theme";

function ThemePicker() {
  const { theme, setTheme, mode } = useTheme();
  return <button onClick={() => setTheme("sapphire")}>Go blue ({mode})</button>;
}

// Or set it yourself, no JS required:
// <html data-theme="amethyst">`,
} as const;

const THEMES = [
	["Amethyst", "Jasper", "Purple"],
	["Onyx", "Opal", "Neutral"],
	["Sapphire", "Aquamarine", "Blue"],
	["Ruby", "Carnelian", "Red"],
	["Topaz", "Amber", "Orange"],
	["Jade", "Peridot", "Green"],
];

export function DocsPage() {
	return (
		<div className="flex flex-col gap-12">
			<header className="flex flex-col gap-3">
				<h1 className="font-heading font-semibold text-4xl tracking-tight">
					Getting started
				</h1>
				<p className="max-w-prose text-muted-foreground leading-relaxed">
					{site.name} is a <strong>source-only</strong> component library — no
					build step, no published package yet. You consume the TypeScript
					source directly as a git submodule and let your own Vite + Tailwind
					pipeline compile it. This is the same setup the reference app uses.
				</p>
			</header>

			<Alert>
				<InfoCircleLinearIcon />
				<AlertTitle>Packaging will follow</AlertTitle>
				<AlertDescription>
					A proper npm package is planned. For now the submodule flow below is
					the supported path.
				</AlertDescription>
			</Alert>

			<Section id="prerequisites" title="Prerequisites">
				<ul className="flex flex-wrap gap-2">
					{["React 19", "Tailwind CSS v4", "Vite", "pnpm", "TypeScript"].map(
						(item) => (
							<Badge key={item} variant="secondary">
								{item}
							</Badge>
						),
					)}
				</ul>
			</Section>

			<Section id="submodule" title="1. Add the submodule">
				<p className="text-muted-foreground text-sm">
					Vendor the library under <code>packages/ui</code> and wire it into
					your pnpm workspace.
				</p>
				<CodeBlock lang="bash" code={SNIPPETS.submodule} />
				<CodeBlock lang="ts" code={SNIPPETS.workspace} />
				<CodeBlock lang="json" code={SNIPPETS.dep} />
			</Section>

			<Section id="peers" title="2. Install peer dependencies">
				<p className="text-muted-foreground text-sm">
					The library imports these directly; your app must provide them. Icons
					use Solar v2 (<code>beta.2</code>), which sizes every icon from the{" "}
					<code>--solar-size</code> CSS variable (set once in your stylesheet,
					below).
				</p>
				<CodeBlock lang="bash" code={SNIPPETS.peers} />
			</Section>

			<Section id="configure" title="3. Configure Vite + TypeScript">
				<p className="text-muted-foreground text-sm">
					Alias <code>@shiron/ui</code> to the library source so imports
					resolve, and mirror it in your tsconfig paths.
				</p>
				<CodeBlock lang="ts" code={SNIPPETS.vite} />
				<CodeBlock lang="json" code={SNIPPETS.tsconfig} />
			</Section>

			<Section id="styles" title="4. Wire up the stylesheet">
				<p className="text-muted-foreground text-sm">
					Import the token layer and point Tailwind at the library components —
					without the <code>@source</code> directive their utility classes never
					get generated. Import this CSS once from your entry file.
				</p>
				<CodeBlock lang="css" code={SNIPPETS.css} />
			</Section>

			<Section id="usage" title="5. Use a component">
				<CodeBlock lang="tsx" code={SNIPPETS.usage} />
			</Section>

			<Section id="theming" title="Theming">
				<p className="text-muted-foreground text-sm">
					Twelve named themes across six accents, each with a light and dark
					variant. Switch by setting <code>data-theme</code> on the root, or use
					the provider-less <code>useTheme</code> hook (also powers the built-in{" "}
					<code>ThemeToggle</code> / <code>ThemeSelect</code>).
				</p>
				<div className="overflow-x-auto rounded-lg ring-1 ring-border">
					<table className="w-full text-sm">
						<thead className="bg-foreground/5 text-left">
							<tr>
								<th className="px-4 py-2 font-medium">Dark</th>
								<th className="px-4 py-2 font-medium">Light</th>
								<th className="px-4 py-2 font-medium">Accent</th>
							</tr>
						</thead>
						<tbody>
							{THEMES.map(([dark, light, accent]) => (
								<tr key={accent} className="border-border/60 border-t">
									<td className="px-4 py-2">{dark}</td>
									<td className="px-4 py-2">{light}</td>
									<td className="px-4 py-2 text-muted-foreground">{accent}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<CodeBlock lang="tsx" code={SNIPPETS.theming} />
			</Section>

			<Section id="storybook" title="Storybook">
				<p className="text-muted-foreground text-sm">
					Every component is documented in Storybook with interactive controls,
					across all themes.
				</p>
				<div>
					<Button asChild>
						<a href={site.storybook} target="_blank" rel="noreferrer">
							Open Storybook
						</a>
					</Button>
				</div>
			</Section>
		</div>
	);
}
