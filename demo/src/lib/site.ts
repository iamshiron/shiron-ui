/** Static links + metadata used across the demo shell. */
export const site = {
	name: "Honami UI",
	tagline: "A themeable React 19 + Tailwind v4 component set.",
	repo: "https://github.com/iamshiron/shiron-ui",
	// Storybook is deployed next to the demo on the same Pages site. Resolve it
	// against the build's base URL so it works at `/shiron-ui/` and at `/`.
	storybook: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/storybook/`,
} as const;

export const builtOn = [
	{ name: "shadcn/ui", href: "https://ui.shadcn.com" },
	{ name: "Radix UI", href: "https://www.radix-ui.com" },
	{ name: "Base UI", href: "https://base-ui.com" },
	{ name: "Tailwind CSS v4", href: "https://tailwindcss.com" },
	{ name: "Solar Icons", href: "https://solar-icons.vercel.app" },
	{ name: "Recharts", href: "https://recharts.org" },
] as const;
