import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	CheckmarkCircle02Icon,
	InformationCircleIcon,
	Alert02Icon,
	MultiplicationSignCircleIcon,
	Loading03Icon,
} from "@hugeicons/core-free-icons";

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			className="toaster group"
			icons={{
				success: (
					<HugeiconsIcon
						icon={CheckmarkCircle02Icon}
						strokeWidth={2}
						className="size-4"
					/>
				),
				info: (
					<HugeiconsIcon
						icon={InformationCircleIcon}
						strokeWidth={2}
						className="size-4"
					/>
				),
				warning: (
					<HugeiconsIcon
						icon={Alert02Icon}
						strokeWidth={2}
						className="size-4"
					/>
				),
				error: (
					<HugeiconsIcon
						icon={MultiplicationSignCircleIcon}
						strokeWidth={2}
						className="size-4"
					/>
				),
				loading: (
					<HugeiconsIcon
						icon={Loading03Icon}
						strokeWidth={2}
						className="size-4 animate-spin"
					/>
				),
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
