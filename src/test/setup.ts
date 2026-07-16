import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Unmount anything rendered by a test so DOM state never leaks across tests.
afterEach(() => {
	cleanup();
});

// jsdom lacks a handful of browser APIs the primitives (radix-ui, vaul, cmdk,
// recharts, next-themes) call at runtime. Provide inert shims, guarded so
// repeated setup runs stay idempotent.

if (typeof window.matchMedia !== "function") {
	window.matchMedia = (query: string): MediaQueryList => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: () => {},
		removeEventListener: () => {},
		// Deprecated APIs some libraries still call.
		addListener: () => {},
		removeListener: () => {},
		dispatchEvent: () => false,
	});
}

if (typeof globalThis.ResizeObserver === "undefined") {
	globalThis.ResizeObserver = class {
		observe() {}
		unobserve() {}
		disconnect() {}
	};
}

if (typeof Element.prototype.scrollIntoView !== "function") {
	Element.prototype.scrollIntoView = () => {};
}

// Radix and vaul call the Pointer Capture APIs during interactions; jsdom does
// not implement them.
Element.prototype.hasPointerCapture = () => false;
Element.prototype.setPointerCapture = () => {};
Element.prototype.releasePointerCapture = () => {};
