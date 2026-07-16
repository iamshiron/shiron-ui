import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// `base` defaults to "/" for local dev and NGINX-at-root hosting. The GitHub
// Pages build passes `--base=/shiron-ui/` on the CLI. The router reads the same
// value via `import.meta.env.BASE_URL`, so the two never drift.
export default defineConfig({
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: {
			// Mirror how a consumer wires the library in (see the Docs page):
			// a Vite alias to the library source, Vite resolves the extensions.
			"@shiron/ui": path.resolve(__dirname, "../src"),
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		port: 4400,
		host: true,
	},
});
