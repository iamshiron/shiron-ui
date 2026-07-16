import type * as React from "react";

import { cn } from "@shiron/ui/lib/utils";

type BackgroundIntensity = "subtle" | "default" | "vivid";

type BackgroundLayerProps = {
	/**
	 * Animate the drifting blobs. Also automatically disabled when the user
	 * requests reduced motion.
	 */
	animated?: boolean;
	/** Scales the blob opacity. */
	intensity?: BackgroundIntensity;
};

const BLOB_OPACITY: Record<BackgroundIntensity, [number, number, number]> = {
	subtle: [0.06, 0.055, 0.045],
	default: [0.1, 0.09, 0.07],
	vivid: [0.16, 0.14, 0.11],
};

// ── Composable layer primitives ────────────────────────────────────
// These are the building blocks a background is assembled from. Export them
// so consumers can compose their own backgrounds too.

/** Soft radial accent wash anchored to the top of the viewport. */
function BackgroundWash({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="background-wash"
			className={cn("absolute inset-0", className)}
			style={{
				background:
					"radial-gradient(120% 80% at 50% -10%, var(--honami-accent-soft), transparent 55%)",
			}}
			{...props}
		/>
	);
}

/** Three slowly drifting, heavily-blurred accent blobs. */
function BackgroundBlobs({
	animated = true,
	intensity = "default",
}: BackgroundLayerProps) {
	const [o1, o2, o3] = BLOB_OPACITY[intensity];
	return (
		<div data-slot="background-blobs">
			<div
				className="honami-blob absolute top-10 -left-40 size-[38rem] rounded-full blur-[120px]"
				style={{
					background: "var(--honami-accent)",
					opacity: o1,
					animation: animated
						? "honami-drift 22s ease-in-out infinite"
						: undefined,
				}}
			/>
			<div
				className="honami-blob absolute top-1/3 -right-32 size-[34rem] rounded-full blur-[130px]"
				style={{
					background: "var(--honami-accent-2)",
					opacity: o2,
					animation: animated
						? "honami-drift 28s ease-in-out infinite reverse"
						: undefined,
				}}
			/>
			<div
				className="honami-blob absolute -bottom-48 left-1/3 size-[40rem] rounded-full blur-[140px]"
				style={{
					background: "var(--honami-cyan)",
					opacity: o3,
					animation: animated
						? "honami-drift 34s ease-in-out infinite"
						: undefined,
				}}
			/>
		</div>
	);
}

/** Faint square grid texture. */
function BackgroundGrid({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="background-grid"
			className={cn("absolute inset-0 opacity-[0.025]", className)}
			style={{
				backgroundImage:
					"linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
				backgroundSize: "44px 44px",
			}}
			{...props}
		/>
	);
}

// ── Named background registry ───────────────────────────────────────
// Add a new key here (composing the primitives above, or anything else) to
// introduce another background. `Background`'s `variant` prop and the
// `BackgroundVariant` type pick it up automatically — this is the single
// extension point for supporting multiple backgrounds.

const backgrounds = {
	atmosphere: (props: BackgroundLayerProps) => (
		<>
			<BackgroundWash />
			<BackgroundBlobs {...props} />
			<BackgroundGrid />
		</>
	),
	aurora: (props: BackgroundLayerProps) => (
		<>
			<BackgroundWash />
			<BackgroundBlobs {...props} />
		</>
	),
	grid: () => (
		<>
			<BackgroundWash />
			<BackgroundGrid />
		</>
	),
	solid: () => null,
} satisfies Record<string, (props: BackgroundLayerProps) => React.ReactNode>;

type BackgroundVariant = keyof typeof backgrounds;

/**
 * Ambient page backdrop. Render it once — in your root layout or app shell —
 * and it fixes itself behind every page (`fixed inset-0 -z-10`,
 * `pointer-events-none`), so page content sits on top automatically.
 *
 * Pick a built-in look with `variant`, or pass custom layers as `children`
 * (they render inside the same fixed shell). The `solid` variant renders no
 * decorative layers, making it the base for a fully custom background.
 */
function Background({
	variant = "atmosphere",
	animated = true,
	intensity = "default",
	className,
	children,
	...props
}: React.ComponentProps<"div"> &
	BackgroundLayerProps & {
		variant?: BackgroundVariant;
	}) {
	return (
		<div
			aria-hidden="true"
			data-slot="background"
			data-variant={variant}
			className={cn(
				"pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background",
				className,
			)}
			{...props}
		>
			{backgrounds[variant]?.({ animated, intensity })}
			{children}
		</div>
	);
}

export {
	Background,
	BackgroundWash,
	BackgroundBlobs,
	BackgroundGrid,
	backgrounds,
	type BackgroundVariant,
	type BackgroundIntensity,
};
