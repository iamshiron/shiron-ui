import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
	CheckCircleLinearIcon,
	CloseCircleLinearIcon,
	DangerTriangleLinearIcon,
	InfoCircleLinearIcon,
	RefreshLinearIcon,
} from "@solar-icons/react";

import { themeMode } from "@shiron/ui/lib/themes";

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();
	// Named themes (e.g. "amethyst") resolve to the light/dark mode sonner needs.
	const mode = theme === "system" ? "system" : themeMode(theme);

	return (
		<Sonner
			theme={mode as ToasterProps["theme"]}
			className="toaster group"
			icons={{
				success: <CheckCircleLinearIcon className="size-4" />,
				info: <InfoCircleLinearIcon className="size-4" />,
				warning: <DangerTriangleLinearIcon className="size-4" />,
				error: <CloseCircleLinearIcon className="size-4" />,
				loading: <RefreshLinearIcon className="size-4 animate-spin" />,
			}}
			style={
				{
					"--normal-bg": "color-mix(in oklab, var(--popover) 85%, transparent)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--border)",
					"--border-radius": "var(--radius)",
				} as React.CSSProperties
			}
			toastOptions={{
				classNames: {
					toast:
						"cn-toast backdrop-blur-2xl backdrop-saturate-150 shadow-[0_12px_40px_-12px_rgba(8,4,20,0.55)]",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
