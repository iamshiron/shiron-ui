/// <reference types="vite/client" />

interface ImportMetaEnv {
	/**
	 * Root URL of the deployed Storybook (e.g. `https://storybook.honami.dev`).
	 * When unset, the demo falls back to `/storybook/` next to itself.
	 */
	readonly VITE_STORYBOOK_HOST?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
