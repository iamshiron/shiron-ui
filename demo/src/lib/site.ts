/** Static links + metadata used across the demo shell. */

/**
 * Root URL of the deployed Storybook. Configure it globally with the
 * `VITE_STORYBOOK_HOST` env var (e.g. `https://storybook.honami.dev`). When
 * unset it falls back to `/storybook/` resolved against the demo's base URL —
 * where CI publishes Storybook next to the demo on the same Pages site.
 */
const storybookHost =
	import.meta.env.VITE_STORYBOOK_HOST ??
	`${import.meta.env.BASE_URL.replace(/\/$/, "")}/storybook/`;

export const site = {
	name: "Honami UI",
	tagline: "A themeable React 19 + Tailwind v4 component set.",
	repo: "https://github.com/iamshiron/shiron-ui",
	storybook: storybookHost,
} as const;

/**
 * Sanitize a Storybook story title into its generated id: lowercase, every run
 * of non-alphanumeric characters collapsed to a single dash, ends trimmed.
 * Mirrors Storybook's own `sanitize`, so `"Buttons & actions/Button"` becomes
 * `"buttons-actions-button"`.
 */
function sanitizeStoryTitle(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

/**
 * Deep link to a component's autodocs page in the configured Storybook. The
 * demo groups mirror the story titles (`"<group>/<component>"`), so the id is
 * derived straight from them.
 */
export function storybookDocsUrl(
	groupName: string,
	componentName: string,
): string {
	const id = `${sanitizeStoryTitle(`${groupName}/${componentName}`)}--docs`;
	return `${site.storybook.replace(/\/$/, "")}/?path=/docs/${id}`;
}

export const builtOn = [
	{ name: "shadcn/ui", href: "https://ui.shadcn.com" },
	{ name: "Radix UI", href: "https://www.radix-ui.com" },
	{ name: "Base UI", href: "https://base-ui.com" },
	{ name: "Tailwind CSS v4", href: "https://tailwindcss.com" },
	{ name: "Solar Icons", href: "https://solar-icons.vercel.app" },
	{ name: "Recharts", href: "https://recharts.org" },
] as const;
