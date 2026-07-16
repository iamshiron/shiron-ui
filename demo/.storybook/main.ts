import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const dir = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
	stories: ["../src/stories/**/*.stories.@(ts|tsx)"],
	addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
	framework: { name: "@storybook/react-vite", options: {} },
	// Inherits the demo's Vite config (Tailwind v4 + the @shiron/ui alias);
	// re-assert the alias so it resolves regardless of how the config merges.
	viteFinal: (cfg) => {
		cfg.resolve ??= {};
		cfg.resolve.alias = {
			...cfg.resolve.alias,
			"@shiron/ui": resolve(dir, "../../src"),
			"@": resolve(dir, "../src"),
		};
		return cfg;
	},
};

export default config;
