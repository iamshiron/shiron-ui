import type * as React from "react";
import { Slot } from "radix-ui";

import { cn } from "@shiron/ui/lib/utils";

/**
 * Paints its text with the Honami accent gradient. Use for brand marks,
 * hero headings and emphasised inline labels. Pass `asChild` to apply the
 * gradient to a heading element (`<h1>` etc.) instead of the default span.
 */
function GradientText({
	className,
	asChild = false,
	...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
	const Comp = asChild ? Slot.Root : "span";

	return (
		<Comp
			data-slot="gradient-text"
			className={cn("honami-grad-text font-heading", className)}
			{...props}
		/>
	);
}

export { GradientText };
