import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@shiron/ui/lib/utils";

const statusDotVariants = cva(
	"relative inline-block shrink-0 rounded-full bg-current",
	{
		variants: {
			status: {
				online: "text-add",
				busy: "text-del",
				away: "text-mod",
				offline: "text-honami-mute",
				accent: "text-honami-accent",
			},
			size: {
				sm: "size-1.5",
				default: "size-2",
				lg: "size-2.5",
			},
		},
		defaultVariants: {
			status: "online",
			size: "default",
		},
	},
);

/**
 * A small presence/status indicator dot. Set `pulse` to add a soft radiating
 * ping (respects `prefers-reduced-motion`). Colours map to the semantic
 * add/del/mod tokens plus the Honami accent.
 */
function StatusDot({
	className,
	status,
	size,
	pulse = false,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof statusDotVariants> & { pulse?: boolean }) {
	return (
		<span
			data-slot="status-dot"
			data-status={status ?? "online"}
			role="status"
			className={cn(statusDotVariants({ status, size }), className)}
			{...props}
		>
			{pulse && (
				<span
					aria-hidden="true"
					className="absolute inset-0 rounded-full bg-current opacity-60 motion-safe:animate-[honami-ping_1.6s_ease-in-out_infinite] motion-reduce:hidden"
				/>
			)}
		</span>
	);
}

export { StatusDot, statusDotVariants };
