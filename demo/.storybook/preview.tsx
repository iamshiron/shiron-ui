import { themes } from "@shiron/ui/lib/themes";
import type { Decorator, Preview } from "@storybook/react-vite";
import { useEffect } from "react";
import "../src/styles/globals.css";

/** Applies the selected theme to the preview root via `data-theme`. */
const withTheme: Decorator = (Story, context) => {
	const theme = (context.globals.theme as string) ?? "amethyst";
	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);
	return (
		<div className="p-6 text-foreground">
			<Story />
		</div>
	);
};

const preview: Preview = {
	parameters: {
		layout: "centered",
		controls: {
			matchers: { color: /(background|color)$/i, date: /Date$/i },
		},
	},
	globalTypes: {
		theme: {
			description: "Palette",
			defaultValue: "amethyst",
			toolbar: {
				title: "Theme",
				icon: "paintbrush",
				items: themes.map((t) => ({
					value: t.name,
					title: `${t.label} (${t.mode})`,
				})),
				dynamicTitle: true,
			},
		},
	},
	decorators: [withTheme],
};

export default preview;
