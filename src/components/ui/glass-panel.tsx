import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@shiron/ui/lib/utils";

const glassPanelVariants = cva(
	"glass text-card-foreground transition-shadow",
	{
		variants: {
			size: {
				sm: "rounded-lg p-3",
				default: "rounded-xl p-4",
				lg: "rounded-2xl p-6",
			},
			glow: {
				true: "shadow-[var(--honami-glow)]",
				false: "shadow-[0_10px_28px_-20px_rgba(20,10,40,0.5)]",
			},
		},
		defaultVariants: {
			size: "default",
			glow: false,
		},
	},
);

/**
 * A frosted-glass surface for floating panels, toolbars and cards that should
 * read as elevated glass rather than a solid card. Backed by the shared
 * `glass` utility (translucent fill + backdrop blur + hairline border).
 */
function GlassPanel({
	className,
	size,
	glow,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof glassPanelVariants>) {
	return (
		<div
			data-slot="glass-panel"
			className={cn(glassPanelVariants({ size, glow }), className)}
			{...props}
		/>
	);
}

export { GlassPanel, glassPanelVariants };
