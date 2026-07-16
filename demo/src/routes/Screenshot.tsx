import { Background } from "@shiron/ui/components/ui/background";
import { getTheme } from "@shiron/ui/lib/themes";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { EssentialsShowcase } from "@/components/EssentialsShowcase";

/**
 * A bare, chrome-free page rendering only the essentials showcase on the
 * active theme's surface. The screenshot script drives `?theme=<name>` and
 * captures this route for each of the twelve themes (used in the README).
 */
export function ScreenshotPage() {
	const [params] = useSearchParams();
	const theme = params.get("theme") ?? "amethyst";

	useEffect(() => {
		const root = document.documentElement;
		const previous = root.dataset.theme;
		root.dataset.theme = getTheme(theme)?.name ?? "amethyst";
		return () => {
			root.dataset.theme = previous;
		};
	}, [theme]);

	return (
		<div className="relative grid min-h-screen place-items-center overflow-hidden bg-background p-10">
			<Background variant="atmosphere" intensity="subtle" />
			<div className="relative z-10">
				<EssentialsShowcase />
			</div>
		</div>
	);
}
