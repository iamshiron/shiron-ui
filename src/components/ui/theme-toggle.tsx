import type * as React from "react";
import { MoonLinearIcon, SunLinearIcon } from "@solar-icons/react";

import { useTheme } from "@shiron/ui/hooks/use-theme";
import {
	defaultTheme,
	getTheme,
	type ThemeAccent,
	type ThemeName,
	themeForAccent,
	themeMode,
} from "@shiron/ui/lib/themes";
import { Button } from "@shiron/ui/components/ui/button";

const DEFAULT_ACCENT: ThemeAccent = getTheme(defaultTheme)?.accent ?? "purple";

/**
 * Toggles between the light and dark theme that share an `accent` (default
 * `purple`, i.e. Jasper ⇄ Amethyst). Change `accent` to flip a different
 * pair — e.g. `accent="blue"` toggles Aquamarine ⇄ Sapphire — which is how a
 * "pick an accent, then switch mode" control is built.
 *
 * Works standalone via `useTheme`; pass `value` + `onValueChange` to control
 * it from next-themes or your own state.
 */
function ThemeToggle({
	accent = DEFAULT_ACCENT,
	value,
	onValueChange,
	className,
	...props
}: Omit<React.ComponentProps<typeof Button>, "onClick"> & {
	accent?: ThemeAccent;
	value?: ThemeName;
	onValueChange?: (theme: ThemeName) => void;
}) {
	const controller = useTheme();
	const theme = value ?? controller.theme;
	const setTheme = onValueChange ?? controller.setTheme;

	const mode = themeMode(theme);
	const target = themeForAccent(accent, mode === "dark" ? "light" : "dark");

	return (
		<Button
			type="button"
			variant="outline"
			size="icon"
			data-slot="theme-toggle"
			aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
			disabled={!target}
			className={className}
			onClick={() => target && setTheme(target)}
			{...props}
		>
			{mode === "dark" ? <MoonLinearIcon /> : <SunLinearIcon />}
		</Button>
	);
}

export { ThemeToggle };
