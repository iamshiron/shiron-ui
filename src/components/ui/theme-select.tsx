import type * as React from "react";

import { useTheme } from "@shiron/ui/hooks/use-theme";
import {
	getTheme,
	type ThemeMode,
	type ThemeName,
	themes,
} from "@shiron/ui/lib/themes";
import { cn } from "@shiron/ui/lib/utils";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@shiron/ui/components/ui/select";

const MODES: { mode: ThemeMode; label: string }[] = [
	{ mode: "dark", label: "Dark" },
	{ mode: "light", label: "Light" },
];

function Swatch({ color }: { color: string }) {
	return (
		<span
			aria-hidden="true"
			className="size-2.5 shrink-0 rounded-full ring-1 ring-inset ring-foreground/20"
			style={{ background: color }}
		/>
	);
}

/**
 * Dropdown for selecting any theme, grouped by light/dark with colour
 * swatches. Works standalone (drives `data-theme` via `useTheme`); pass
 * `value` + `onValueChange` to control it from next-themes or your own state.
 */
function ThemeSelect({
	value,
	onValueChange,
	className,
	...props
}: React.ComponentProps<typeof SelectTrigger> & {
	value?: ThemeName;
	onValueChange?: (theme: ThemeName) => void;
}) {
	const controller = useTheme();
	const theme = value ?? controller.theme;
	const setTheme = onValueChange ?? controller.setTheme;

	return (
		<Select value={theme} onValueChange={(v) => setTheme(v as ThemeName)}>
			<SelectTrigger
				data-slot="theme-select"
				className={cn("w-44", className)}
				{...props}
			>
				<Swatch color={getTheme(theme)?.swatch ?? "transparent"} />
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{MODES.map(({ mode, label }) => (
					<SelectGroup key={mode}>
						<SelectLabel>{label}</SelectLabel>
						{themes
							.filter((t) => t.mode === mode)
							.map((t) => (
								<SelectItem key={t.name} value={t.name}>
									<Swatch color={t.swatch} />
									{t.label}
								</SelectItem>
							))}
					</SelectGroup>
				))}
			</SelectContent>
		</Select>
	);
}

export { ThemeSelect };
