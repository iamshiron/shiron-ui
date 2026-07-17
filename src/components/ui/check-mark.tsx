import type * as React from "react";

/**
 * A plain checkmark tick. Solar v2 only ships a check-in-a-circle
 * (`CheckCircleLinearIcon`), which reads oddly as a "selected" / "checked"
 * indicator, so we draw the tick directly. Sizing is inherited from the parent
 * (e.g. `[&_svg:not([class*='size-'])]:size-3.5`) just like a Solar icon, so it
 * drops in wherever that icon was used.
 */
function CheckMark({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2.5}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
			{...props}
		>
			<path d="M5 13l4 4L19 7" />
		</svg>
	);
}

export { CheckMark };
