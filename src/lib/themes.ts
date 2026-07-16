export type ThemeMode = "light" | "dark";

export type ThemeMeta = {
	/** Value used in `data-theme="<name>"`; also the theme's id. */
	name: string;
	/** Human-readable label for theme pickers. */
	label: string;
	/** Whether the palette is dark — drives the `dark:` utility variant. */
	mode: ThemeMode;
	/**
	 * Accent-family id. Themes that share an accent form a light/dark pair
	 * (e.g. jasper + amethyst are both `purple`), which the mode toggle flips
	 * between.
	 */
	accent: string;
	/** Representative colour (the theme's primary) for swatches in pickers. */
	swatch: string;
};

/**
 * Built-in themes. To ship another theme:
 *  1. add a `[data-theme="<name>"]` token block in `styles/globals.css`
 *     (and, if it is dark, to the `dark` custom-variant list),
 *  2. add an entry here.
 * Consumers select a theme by setting `data-theme` on the root element —
 * see the `useTheme` hook / `ThemeSelect` / `ThemeToggle` components, or wire
 * next-themes with `attribute="data-theme"`.
 */
export const themes = [
	{ name: "amethyst", label: "Amethyst", mode: "dark", accent: "purple", swatch: "#b79bee" },
	{ name: "jasper", label: "Jasper", mode: "light", accent: "purple", swatch: "#7e52d8" },
	{ name: "onyx", label: "Onyx", mode: "dark", accent: "neutral", swatch: "#c3ccdd" },
	{ name: "opal", label: "Opal", mode: "light", accent: "neutral", swatch: "#5f6472" },
	{ name: "sapphire", label: "Sapphire", mode: "dark", accent: "blue", swatch: "#6ea8f2" },
	{ name: "aquamarine", label: "Aquamarine", mode: "light", accent: "blue", swatch: "#2e86c0" },
	{ name: "ruby", label: "Ruby", mode: "dark", accent: "red", swatch: "#ee7386" },
	{ name: "carnelian", label: "Carnelian", mode: "light", accent: "red", swatch: "#d05846" },
	{ name: "topaz", label: "Topaz", mode: "dark", accent: "orange", swatch: "#e6a04f" },
	{ name: "amber", label: "Amber", mode: "light", accent: "orange", swatch: "#d0842e" },
	{ name: "jade", label: "Jade", mode: "dark", accent: "green", swatch: "#4fd39a" },
	{ name: "peridot", label: "Peridot", mode: "light", accent: "green", swatch: "#5ba030" },
] as const satisfies readonly ThemeMeta[];

export type ThemeName = (typeof themes)[number]["name"];
export type ThemeAccent = (typeof themes)[number]["accent"];

/** Recommended default (the design is dark-primary). */
export const defaultTheme: ThemeName = "amethyst";

/** Look up a theme's metadata by name. */
export function getTheme(
	name: string | undefined,
): (typeof themes)[number] | undefined {
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

export type AccentMeta = {
	/** Accent-family id. */
	id: ThemeAccent;
	/** Human-readable label. */
	label: string;
	/** Representative swatch (the dark theme's primary). */
	swatch: string;
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** The distinct accent families, each with a representative swatch. */
export const accents: readonly AccentMeta[] = [
	...new Map(
		themes.map((t) => [
			t.accent,
			{
				id: t.accent,
				label: capitalize(t.accent),
				// Prefer the dark theme's (more vibrant) swatch for the family.
				swatch: (themes.find((x) => x.accent === t.accent && x.mode === "dark") ?? t)
					.swatch,
			},
		]),
	).values(),
];

/** The theme name for a given accent + mode, if one exists. */
export function themeForAccent(
	accent: string,
	mode: ThemeMode,
): ThemeName | undefined {
	return themes.find((t) => t.accent === accent && t.mode === mode)?.name as
		| ThemeName
		| undefined;
}
