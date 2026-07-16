import type { ReactNode } from "react";

/** A selectable variation of a demo, rendered as a toggle button. */
export type DemoVariant = {
	/** Stable key passed to `render` / `code`. */
	key: string;
	/** Button label. */
	label: string;
};

/**
 * A single component demo: a live preview, optional variant toggles to play
 * with, and a matching code sample. `variant` is the active variant key (or
 * "default" when a demo declares none).
 */
export type Demo = {
	/** URL-safe id, e.g. "button". */
	id: string;
	/** Display name, e.g. "Button". */
	name: string;
	/** One-line description. */
	description: string;
	/** Optional variant toggles shown as buttons above the preview. */
	variants?: DemoVariant[];
	/** Render the live preview for the active variant. */
	render: (variant: string) => ReactNode;
	/** The code sample for the active variant. */
	code: (variant: string) => string;
	/** Search aliases (also shown on the component page). Filled from KEYWORDS. */
	keywords?: string[];
};

/** A named group of demos shown as a section in the sidebar. */
export type DemoGroup = {
	name: string;
	demos: Demo[];
};
