import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { CheckCircleIcon } from "@solar-icons/react/linear/check-circle";
import { CloseCircleIcon } from "@solar-icons/react/linear/close-circle";
import { DangerTriangleIcon } from "@solar-icons/react/linear/danger-triangle";
import { InfoCircleIcon } from "@solar-icons/react/linear/info-circle";
import { RefreshIcon } from "@solar-icons/react/linear/refresh";

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
				success: <CheckCircleIcon className="size-4" />,
				info: <InfoCircleIcon className="size-4" />,
				warning: <DangerTriangleIcon className="size-4" />,
				error: <CloseCircleIcon className="size-4" />,
				loading: <RefreshIcon className="size-4 animate-spin" />,
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
