import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@shiron/ui/lib/utils";

/**
 * A compact metric/KPI display: a label, a prominent value and an optional
 * trend delta. Compose freely, or drop a `<Stat>` inside a `<Card>` /
 * `<GlassPanel>` for a dashboard tile.
 */
function Stat({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="stat"
			className={cn("flex flex-col gap-1", className)}
			{...props}
		/>
	);
}

function StatLabel({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="stat-label"
			className={cn(
				"text-[0.6875rem] font-medium tracking-wide text-honami-mute uppercase",
				className,
			)}
			{...props}
		/>
	);
}

function StatValue({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="stat-value"
			className={cn(
				"font-heading text-2xl leading-none font-semibold text-foreground tabular-nums",
				className,
			)}
			{...props}
		/>
	);
}

const statDeltaVariants = cva(
	"inline-flex w-fit items-center gap-0.5 text-[0.6875rem] font-medium tabular-nums [&>svg]:size-3",
	{
		variants: {
			trend: {
				up: "text-add",
				down: "text-del",
				neutral: "text-honami-mute",
			},
		},
		defaultVariants: {
			trend: "neutral",
		},
	},
);

function StatDelta({
	className,
	trend,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof statDeltaVariants>) {
	return (
		<div
			data-slot="stat-delta"
			data-trend={trend ?? "neutral"}
			className={cn(statDeltaVariants({ trend }), className)}
			{...props}
		/>
	);
}

export { Stat, StatLabel, StatValue, StatDelta, statDeltaVariants };
