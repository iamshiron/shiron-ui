import { Button } from "@shiron/ui/components/ui/button";
import { useTheme } from "@shiron/ui/hooks/use-theme";
import { CheckCircleLinearIcon, CopyLinearIcon } from "@solar-icons/react";
import { useEffect, useState } from "react";
import { createHighlighter, type Highlighter } from "shiki";

export type CodeLang = "tsx" | "ts" | "bash" | "css" | "json";

// One shared highlighter, loading only the languages/themes we ship. The code
// theme is Tokyo Night in dark mode and an adjacent light theme otherwise — it
// follows the site's light/dark state, independent of the chosen palette.
let highlighterPromise: Promise<Highlighter> | null = null;
function getHighlighter() {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ["tokyo-night", "github-light"],
			langs: ["tsx", "ts", "bash", "css", "json"],
		});
	}
	return highlighterPromise;
}

export function CodeBlock({
	code,
	lang = "tsx",
}: {
	code: string;
	lang?: CodeLang;
}) {
	const { mode } = useTheme();
	const [html, setHtml] = useState("");
	const [copied, setCopied] = useState(false);
	const trimmed = code.trim();

	useEffect(() => {
		let alive = true;
		getHighlighter().then((hl) => {
			if (!alive) return;
			setHtml(
				hl.codeToHtml(trimmed, {
					lang,
					theme: mode === "dark" ? "tokyo-night" : "github-light",
				}),
			);
		});
		return () => {
			alive = false;
		};
	}, [trimmed, lang, mode]);

	async function copy() {
		try {
			await navigator.clipboard.writeText(trimmed);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {
			// clipboard may be unavailable (insecure context) — ignore.
		}
	}

	return (
		<div className="group/code relative overflow-hidden rounded-lg ring-1 ring-border">
			<Button
				type="button"
				variant="ghost"
				size="icon-sm"
				aria-label={copied ? "Copied" : "Copy code"}
				onClick={copy}
				className="absolute top-2 right-2 z-10 opacity-0 transition-opacity focus-visible:opacity-100 group-hover/code:opacity-100"
			>
				{copied ? <CheckCircleLinearIcon /> : <CopyLinearIcon />}
			</Button>
			{html ? (
				<div
					className="overflow-x-auto p-4 text-[0.8125rem] leading-relaxed [&_pre]:!bg-transparent [&_pre]:font-mono"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output is trusted, generated from our own static strings.
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			) : (
				<pre className="overflow-x-auto p-4 font-mono text-[0.8125rem] text-muted-foreground leading-relaxed">
					{trimmed}
				</pre>
			)}
		</div>
	);
}
