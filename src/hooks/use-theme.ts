import * as React from "react";

import {
	defaultTheme,
	type ThemeMode,
	type ThemeName,
	themeMode,
} from "@shiron/ui/lib/themes";

const STORAGE_KEY = "shiron-ui-theme";
const listeners = new Set<() => void>();

function readInitial(): ThemeName {
	if (typeof document === "undefined") {
		return defaultTheme;
	}
	const stored = localStorage.getItem(STORAGE_KEY);
	const attr = document.documentElement.dataset.theme;
	return (stored || attr || defaultTheme) as ThemeName;
}

// Module-level store so every `useTheme` consumer stays in sync without a
// provider. On the client we hydrate the attribute from storage immediately.
let current: ThemeName = defaultTheme;
if (typeof document !== "undefined") {
	current = readInitial();
	document.documentElement.dataset.theme = current;
}

function applyTheme(name: ThemeName) {
	current = name;
	if (typeof document !== "undefined") {
		document.documentElement.dataset.theme = name;
		try {
			localStorage.setItem(STORAGE_KEY, name);
		} catch {
			// ignore storage failures (private mode, etc.)
		}
	}
	for (const listener of listeners) {
		listener();
	}
}

function subscribe(onChange: () => void) {
	listeners.add(onChange);
	return () => {
		listeners.delete(onChange);
	};
}

/**
 * Standalone theme controller — no provider required. Reads/writes
 * `data-theme` on the document root and persists the choice to localStorage,
 * keeping every consumer in sync.
 *
 * For SSR without a first-paint flash, or to share state with next-themes,
 * leave this hook out and drive `ThemeSelect` / `ThemeToggle` with their
 * `value` / `onValueChange` props instead.
 */
export function useTheme(): {
	theme: ThemeName;
	setTheme: (name: ThemeName) => void;
	mode: ThemeMode;
} {
	const theme = React.useSyncExternalStore(
		subscribe,
		() => current,
		() => defaultTheme,
	);
	const setTheme = React.useCallback((name: ThemeName) => applyTheme(name), []);
	return { theme, setTheme, mode: themeMode(theme) };
}
