import { Button } from "@shiron/ui/components/ui/button";
import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import type { Demo } from "@/registry/types";

/**
 * Renders a single component demo: heading, optional variant toggle buttons to
 * play with, a live preview and the matching code sample. Mount with
 * `key={demo.id}` so the active variant resets when the selection changes.
 */
export function DemoStage({ demo }: { demo: Demo }) {
	const [variant, setVariant] = useState(demo.variants?.[0]?.key ?? "default");
	const active = demo.variants ? variant : "default";

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col gap-1">
				<h1 className="font-heading font-semibold text-2xl tracking-tight">
					{demo.name}
				</h1>
				<p className="text-muted-foreground text-sm">{demo.description}</p>
			</div>

			{demo.variants ? (
				<div className="flex flex-wrap gap-1.5">
					{demo.variants.map((v) => (
						<Button
							key={v.key}
							size="sm"
							variant={v.key === active ? "default" : "outline"}
							onClick={() => setVariant(v.key)}
						>
							{v.label}
						</Button>
					))}
				</div>
			) : null}

			<div className="flex min-h-48 items-center justify-center overflow-x-auto rounded-xl border border-border bg-card/40 p-8">
				{demo.render(active)}
			</div>

			<CodeBlock code={demo.code(active)} lang="tsx" />
		</div>
	);
}
