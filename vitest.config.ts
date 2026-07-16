import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { playwright } from "@vitest/browser-playwright";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		projects: [
			{
				// Tier 1 — behavioral tests in jsdom (fast, the bulk).
				extends: true,
				test: {
					name: "unit",
					environment: "jsdom",
					globals: false,
					setupFiles: ["./src/test/setup.ts"],
					include: ["src/**/*.test.{ts,tsx}"],
					exclude: ["src/**/*.browser.test.{ts,tsx}"],
				},
			},
			{
				// Tier 2 — CSS/variant integrity in a real (headless) browser.
				// Only this project compiles Tailwind so the imported globals.css
				// resolves the @utility/@custom-variant rules under test.
				extends: true,
				plugins: [tailwindcss()],
				test: {
					name: "css",
					include: ["src/**/*.browser.test.{ts,tsx}"],
					setupFiles: ["./src/test/setup.browser.ts"],
					browser: {
						enabled: true,
						provider: playwright(),
						headless: true,
						instances: [{ browser: "chromium" }],
					},
				},
			},
		],
	},
});
