import { describe, expect, it } from "vitest";
import {
	accents,
	defaultTheme,
	getTheme,
	isDarkTheme,
	themeForAccent,
	themeMode,
	themes,
} from "@shiron/ui/lib/themes";

describe("themes", () => {
	it("ships amethyst (dark) and jasper (light)", () => {
		expect(getTheme("amethyst")?.mode).toBe("dark");
		expect(getTheme("jasper")?.mode).toBe("light");
	});

	it("exposes a default that exists in the registry", () => {
		expect(defaultTheme).toBe("amethyst");
		expect(themes.some((theme) => theme.name === defaultTheme)).toBe(true);
	});

	it("resolves modes and falls back to light for unknown names", () => {
		expect(themeMode("amethyst")).toBe("dark");
		expect(themeMode("jasper")).toBe("light");
		expect(themeMode("does-not-exist")).toBe("light");
		expect(themeMode(undefined)).toBe("light");
	});

	it("reports dark themes", () => {
		expect(isDarkTheme("amethyst")).toBe(true);
		expect(isDarkTheme("jasper")).toBe(false);
	});

	it("gives every accent a light and a dark partner", () => {
		for (const accent of accents) {
			expect(themeForAccent(accent.id, "light")).toBeDefined();
			expect(themeForAccent(accent.id, "dark")).toBeDefined();
		}
	});

	it("pairs neutral as onyx (dark) / opal (light)", () => {
		expect(themeForAccent("neutral", "dark")).toBe("onyx");
		expect(themeForAccent("neutral", "light")).toBe("opal");
	});

	it("pairs purple as amethyst (dark) / jasper (light)", () => {
		expect(themeForAccent("purple", "dark")).toBe("amethyst");
		expect(themeForAccent("purple", "light")).toBe("jasper");
	});

	it("exposes a swatch for every theme", () => {
		for (const theme of themes) {
			expect(theme.swatch).toMatch(/^#[0-9a-f]{6}$/i);
		}
	});
});
