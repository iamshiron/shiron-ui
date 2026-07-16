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

// ── Texture overlays ────────────────────────────────────────────────
// Modifiers that layer on top of any background via the `overlay` prop.

const GRAIN_SVG =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/** Fine film grain — softens gradient banding and adds premium texture. */
function BackgroundGrain({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="background-grain"
			className={cn(
				"absolute inset-0 opacity-40 mix-blend-soft-light",
				className,
			)}
			style={{
				backgroundImage: `url("${GRAIN_SVG}")`,
				backgroundSize: "140px 140px",
			}}
			{...props}
		/>
	);
}

/** Radial edge darkening to focus the centre of the viewport. */
function BackgroundVignette({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="background-vignette"
			className={cn("absolute inset-0", className)}
			style={{
				background:
					"radial-gradient(120% 100% at 50% 45%, transparent 55%, rgba(0, 0, 0, 0.45))",
			}}
			{...props}
		/>
	);
}

/** Thin horizontal CRT / terminal scanlines. */
function BackgroundScanlines({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="background-scanlines"
			className={cn("absolute inset-0 opacity-60", className)}
			style={{
				backgroundImage:
					"repeating-linear-gradient(to bottom, transparent 0 2px, var(--honami-elev-2) 2px 3px)",
			}}
			{...props}
		/>
	);
}

/** Faint dotted texture — quieter than a line grid. */
function BackgroundDots({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="background-dots"
			className={cn("absolute inset-0 opacity-70", className)}
			style={{
				backgroundImage:
					"radial-gradient(var(--honami-glass-brd) 1px, transparent 1px)",
				backgroundSize: "22px 22px",
			}}
			{...props}
		/>
	);
}

/** Angled light shafts sweeping from the top, faded with a radial mask. */
function BackgroundBeams({ animated = true }: BackgroundLayerProps) {
	const mask = "radial-gradient(70% 60% at 50% 0%, black, transparent 75%)";
	return (
		<div
			data-slot="background-beams"
			className="absolute -inset-x-1/2 -top-1/2 h-[200%]"
			style={{
				backgroundImage:
					"repeating-linear-gradient(65deg, transparent 0 60px, var(--honami-accent-soft) 60px 62px, transparent 62px 140px)",
				maskImage: mask,
				WebkitMaskImage: mask,
				animation: animated
					? "honami-beam 14s linear infinite alternate"
					: undefined,
			}}
		/>
	);
}

const AURORA_OPACITY: Record<BackgroundIntensity, number> = {
	subtle: 0.25,
	default: 0.4,
	vivid: 0.55,
};

/** Flowing conic-gradient aurora ribbons, slowly rotating. */
function BackgroundAurora({
	animated = true,
	intensity = "default",
}: BackgroundLayerProps) {
	return (
		<div
			data-slot="background-aurora"
			className="absolute -inset-1/2 blur-[100px]"
			style={{
				opacity: AURORA_OPACITY[intensity],
				background:
					"conic-gradient(from 0deg at 50% 40%, var(--honami-accent), var(--honami-accent-2), var(--honami-cyan), var(--honami-accent))",
				animation: animated ? "honami-spin 40s linear infinite" : undefined,
			}}
		/>
	);
}

/** Several overlapping accent blooms that drift slowly (a mesh gradient). */
function BackgroundMesh({ animated = true }: BackgroundLayerProps) {
	return (
		<div
			data-slot="background-mesh"
			className="absolute inset-0"
			style={{
				background: [
					"radial-gradient(40% 40% at 15% 20%, var(--honami-accent-soft), transparent 70%)",
					"radial-gradient(45% 45% at 85% 25%, color-mix(in oklab, var(--honami-accent-2) 22%, transparent), transparent 70%)",
					"radial-gradient(50% 50% at 50% 95%, color-mix(in oklab, var(--honami-cyan) 18%, transparent), transparent 70%)",
				].join(", "),
				backgroundSize: "200% 200%",
				animation: animated
					? "honami-mesh 24s ease-in-out infinite"
					: undefined,
			}}
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
	dots: () => (
		<>
			<BackgroundWash />
			<BackgroundDots />
		</>
	),
	mesh: (props: BackgroundLayerProps) => <BackgroundMesh {...props} />,
	ribbons: (props: BackgroundLayerProps) => <BackgroundAurora {...props} />,
	beams: (props: BackgroundLayerProps) => (
		<>
			<BackgroundWash />
			<BackgroundBeams {...props} />
		</>
	),
	solid: () => null,
} satisfies Record<string, (props: BackgroundLayerProps) => React.ReactNode>;

type BackgroundVariant = keyof typeof backgrounds;

const overlays = {
	none: () => null,
	grain: () => <BackgroundGrain />,
	vignette: () => <BackgroundVignette />,
	scanlines: () => <BackgroundScanlines />,
} satisfies Record<string, () => React.ReactNode>;

type BackgroundOverlay = keyof typeof overlays;

/**
 * Ambient page backdrop. Render it once — in your root layout or app shell —
 * and it fixes itself behind every page (`fixed inset-0 -z-10`,
 * `pointer-events-none`), so page content sits on top automatically.
 *
 * Pick a built-in look with `variant`, optionally layer a texture with
 * `overlay` (grain / vignette / scanlines), or pass custom layers as
 * `children` (they render inside the same fixed shell). The `solid` variant
 * renders no decorative layers, making it the base for a fully custom
 * background.
 */
function Background({
	variant = "atmosphere",
	overlay = "none",
	animated = true,
	intensity = "default",
	className,
	children,
	...props
}: React.ComponentProps<"div"> &
	BackgroundLayerProps & {
		variant?: BackgroundVariant;
		overlay?: BackgroundOverlay;
	}) {
	return (
		<div
			aria-hidden="true"
			data-slot="background"
			data-variant={variant}
			data-overlay={overlay}
			className={cn(
				"pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background",
				className,
			)}
			{...props}
		>
			{backgrounds[variant]?.({ animated, intensity })}
			{children}
			{overlays[overlay]?.()}
		</div>
	);
}

export {
	Background,
	BackgroundWash,
	BackgroundBlobs,
	BackgroundGrid,
	BackgroundDots,
	BackgroundMesh,
	BackgroundAurora,
	BackgroundBeams,
	BackgroundGrain,
	BackgroundVignette,
	BackgroundScanlines,
	backgrounds,
	overlays,
	type BackgroundVariant,
	type BackgroundOverlay,
	type BackgroundIntensity,
};
