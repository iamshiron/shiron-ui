export type ThemeMode = "light" | "dark";

export type ThemeMeta = {
	/** Value used in `data-theme="<name>"`; also the theme's id. */
	name: string;
	/** Human-readable label for theme pickers. */
	label: string;
	/** Whether the palette is dark — drives the `dark:` utility variant. */
	mode: ThemeMode;
};

/**
 * Built-in themes. To ship another theme:
 *  1. add a `[data-theme="<name>"]` token block in `styles/globals.css`
 *     (and, if it is dark, to the `dark` custom-variant list),
 *  2. add an entry here.
 * Consumers select a theme by setting `data-theme` on the root element
 * (e.g. via next-themes `attribute="data-theme"`).
 */
export const themes = [
	{ name: "amethyst", label: "Amethyst", mode: "dark" },
	{ name: "jasper", label: "Jasper", mode: "light" },
] as const satisfies readonly ThemeMeta[];

export type ThemeName = (typeof themes)[number]["name"];

/** Recommended default (the design is dark-primary). */
export const defaultTheme: ThemeName = "amethyst";

/** Look up a theme's metadata by name. */
export function getTheme(name: string | undefined): ThemeMeta | undefined {
	return themes.find((theme) => theme.name === name);
}

/** Resolve a theme name to its light/dark mode (unknown names fall back to light). */
export function themeMode(name: string | undefined): ThemeMode {
	return getTheme(name)?.mode ?? "light";
}

/** True when the named theme uses a dark palette. */
export function isDarkTheme(name: string | undefined): boolean {
	return themeMode(name) === "dark";
}
