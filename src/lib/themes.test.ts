import { describe, expect, it } from "vitest";
import {
	defaultTheme,
	getTheme,
	isDarkTheme,
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
});
