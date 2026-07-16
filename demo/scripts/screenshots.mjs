// Captures the bare /screenshot route for every theme into assets/screenshots/.
// Usage: start the demo dev server (pnpm demo:dev), then:
//   node demo/scripts/screenshots.mjs
// Override the target with SCREENSHOT_BASE (e.g. a vite preview URL).
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const THEMES = [
	"amethyst",
	"jasper",
	"onyx",
	"opal",
	"sapphire",
	"aquamarine",
	"ruby",
	"carnelian",
	"topaz",
	"amber",
	"jade",
	"peridot",
];

const BASE = process.env.SCREENSHOT_BASE ?? "http://localhost:4400";
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = path.join(repoRoot, "assets/screenshots");

const browser = await chromium.launch();
const page = await browser.newPage({
	viewport: { width: 820, height: 680 },
	deviceScaleFactor: 2,
});
await mkdir(OUT, { recursive: true });

for (const theme of THEMES) {
	await page.goto(`${BASE}/screenshot?theme=${theme}`, {
		waitUntil: "networkidle",
	});
	await page.waitForSelector("#essentials-email", { timeout: 10000 });
	// Let fonts and the background settle before capturing.
	await page.waitForTimeout(700);
	await page.screenshot({ path: path.join(OUT, `${theme}.png`) });
	console.log(`captured ${theme}`);
}

await browser.close();
console.log(`\nDone — ${THEMES.length} screenshots in assets/screenshots/`);
