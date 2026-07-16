import { cn } from "@shiron/ui/lib/utils";
import * as React from "react";

type BackgroundIntensity = "subtle" | "default" | "vivid";

type BackgroundLayerProps = {
	/**
	 * Animate the drifting blobs. Also automatically disabled when the user
	 * requests reduced motion.
	 */
	animated?: boolean;
	/** Scales the blob opacity. */
	intensity?: BackgroundIntensity;
	/** Tilt-grid rotation in degrees (used by the `tilt` variant). */
	rotateX?: number;
	/** Tilt-grid rotation in degrees (used by the `tilt` variant). */
	rotateY?: number;
	/** Tilt-grid rotation in degrees (used by the `tilt` variant). */
	rotateZ?: number;
	/** Tilt-grid scale multiplier / zoom (used by the `tilt` variant). */
	scale?: number;
	/** Grid/dot cell size in px (grid, dots, tilt). */
	cellSize?: number;
	/** Grid line / dot thickness in px (grid, dots, tilt). */
	lineWidth?: number;
	/** Animation speed multiplier — 1 is default, 2 twice as fast (animated variants). */
	speed?: number;
};

/** Clamp a speed multiplier to a sane, non-zero range. */
function toSpeed(speed: number | undefined): number {
	return Math.max(0.1, speed ?? 1);
}

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
	speed,
}: BackgroundLayerProps) {
	const [o1, o2, o3] = BLOB_OPACITY[intensity];
	const s = toSpeed(speed);
	const drift = (base: number, dir = "") =>
		animated
			? `honami-drift ${base / s}s ease-in-out infinite${dir}`
			: undefined;
	return (
		<div data-slot="background-blobs">
			<div
				className="honami-blob absolute top-10 -left-40 size-[38rem] rounded-full blur-[120px]"
				style={{
					background: "var(--honami-accent)",
					opacity: o1,
					animation: drift(22),
				}}
			/>
			<div
				className="honami-blob absolute top-1/3 -right-32 size-[34rem] rounded-full blur-[130px]"
				style={{
					background: "var(--honami-accent-2)",
					opacity: o2,
					animation: drift(28, " reverse"),
				}}
			/>
			<div
				className="honami-blob absolute -bottom-48 left-1/3 size-[40rem] rounded-full blur-[140px]"
				style={{
					background: "var(--honami-cyan)",
					opacity: o3,
					animation: drift(34),
				}}
			/>
		</div>
	);
}

/** Faint square grid texture. */
function BackgroundGrid({
	cellSize = 44,
	lineWidth = 1,
	className,
	...props
}: React.ComponentProps<"div"> &
	Pick<BackgroundLayerProps, "cellSize" | "lineWidth">) {
	return (
		<div
			data-slot="background-grid"
			className={cn(
				"absolute inset-0 opacity-[0.06] dark:opacity-[0.025]",
				className,
			)}
			style={{
				backgroundImage: `linear-gradient(var(--foreground) ${lineWidth}px, transparent ${lineWidth}px), linear-gradient(90deg, var(--foreground) ${lineWidth}px, transparent ${lineWidth}px)`,
				backgroundSize: `${cellSize}px ${cellSize}px`,
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
function BackgroundGrain({
	opacity = 0.4,
	scale = 140,
	className,
	...props
}: React.ComponentProps<"div"> & { opacity?: number; scale?: number }) {
	return (
		<div
			data-slot="background-grain"
			className={cn("absolute inset-0 mix-blend-soft-light", className)}
			style={{
				opacity,
				backgroundImage: `url("${GRAIN_SVG}")`,
				backgroundSize: `${scale}px ${scale}px`,
			}}
			{...props}
		/>
	);
}

/** Radial edge darkening to focus the centre of the viewport. */
function BackgroundVignette({
	opacity = 0.45,
	size = 55,
	className,
	...props
}: React.ComponentProps<"div"> & { opacity?: number; size?: number }) {
	return (
		<div
			data-slot="background-vignette"
			className={cn("absolute inset-0", className)}
			style={{
				background: `radial-gradient(120% 100% at 50% 45%, transparent ${size}%, rgba(0, 0, 0, ${opacity}))`,
			}}
			{...props}
		/>
	);
}

/** Thin horizontal CRT / terminal scanlines. */
function BackgroundScanlines({
	opacity = 0.6,
	gap = 3,
	className,
	...props
}: React.ComponentProps<"div"> & { opacity?: number; gap?: number }) {
	return (
		<div
			data-slot="background-scanlines"
			className={cn("absolute inset-0", className)}
			style={{
				opacity,
				backgroundImage: `repeating-linear-gradient(to bottom, transparent 0 ${gap - 1}px, var(--honami-elev-2) ${gap - 1}px ${gap}px)`,
			}}
			{...props}
		/>
	);
}

/** Faint dotted texture — quieter than a line grid. */
function BackgroundDots({
	cellSize = 22,
	lineWidth = 1,
	className,
	...props
}: React.ComponentProps<"div"> &
	Pick<BackgroundLayerProps, "cellSize" | "lineWidth">) {
	return (
		<div
			data-slot="background-dots"
			className={cn("absolute inset-0 opacity-70", className)}
			style={{
				backgroundImage: `radial-gradient(var(--honami-glass-brd) ${lineWidth}px, transparent ${lineWidth}px)`,
				backgroundSize: `${cellSize}px ${cellSize}px`,
			}}
			{...props}
		/>
	);
}

/**
 * A soft glow that follows the pointer. Falls back to a centred, static glow
 * when the pointer is coarse (touch) or the user prefers reduced motion.
 */
function BackgroundSpotlight({ animated = true }: BackgroundLayerProps) {
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const el = ref.current;
		if (!el) {
			return;
		}
		const reduce = window.matchMedia?.(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const coarse = window.matchMedia?.("(pointer: coarse)").matches;
		if (!animated || reduce || coarse) {
			return;
		}
		const onMove = (event: PointerEvent) => {
			el.style.setProperty("--spotlight-x", `${event.clientX}px`);
			el.style.setProperty("--spotlight-y", `${event.clientY}px`);
		};
		window.addEventListener("pointermove", onMove);
		return () => window.removeEventListener("pointermove", onMove);
	}, [animated]);

	return (
		<div
			ref={ref}
			data-slot="background-spotlight"
			className="absolute inset-0"
			style={{
				background:
					"radial-gradient(600px circle at var(--spotlight-x, 50%) var(--spotlight-y, 35%), var(--honami-accent-soft), transparent 70%)",
			}}
		/>
	);
}

/**
 * A grid plane tilted in 3D for depth. The rotation is static (no animation,
 * so it never janks) and fully configurable via `rotateX` / `rotateY` /
 * `rotateZ` (degrees).
 */
/**
 * Reference viewport (px) the tilt scene is authored against. Cell size, line
 * width and perspective are given in px at this width, then expressed in `vmax`
 * so the whole scene scales as a unit — identical at any browser zoom or window
 * size. Fixed px would make the cell-to-viewport ratio drift as you zoom.
 */
const TILT_REFERENCE_VMAX = 1920;

function BackgroundTiltGrid({
	rotateX = 38,
	rotateY = 0,
	rotateZ = -3,
	scale = 1,
	cellSize = 46,
	lineWidth = 1,
}: BackgroundLayerProps) {
	// Convert a px value (at the reference viewport) to a viewport-relative
	// length, so zoom scales the plane and the grid together instead of apart.
	const vmax = (px: number) => `${(px / TILT_REFERENCE_VMAX) * 100}vmax`;
	const cell = vmax(cellSize);
	const line = vmax(lineWidth);
	// A sub-pixel blur softens the hard line edges. CSS rasterises the gradient
	// then point-samples it under the 3D transform (no mipmapping), so distant
	// lines that compress below a pixel would otherwise stair-step/shimmer. This
	// is edge anti-aliasing (a device-pixel concern), so it stays in px.
	const softening = `${lineWidth * 0.75}px`;
	// The soft-edge mask lives on the viewport-sized container (not the plane),
	// so the fade stays anchored to the screen. The grid plane itself is huge
	// so it keeps covering the viewport at steep rotations.
	const mask = "radial-gradient(100% 85% at 50% 30%, black, transparent 88%)";
	return (
		<div
			data-slot="background-tilt"
			className="absolute inset-0 overflow-hidden"
			aria-hidden="true"
			style={{
				perspective: vmax(1200),
				maskImage: mask,
				WebkitMaskImage: mask,
			}}
		>
			<div
				className="absolute top-1/2 left-1/2 h-[250vmax] w-[250vmax]"
				style={{
					transform: `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
					backgroundImage: `linear-gradient(var(--honami-accent-line) ${line}, transparent ${line}), linear-gradient(90deg, var(--honami-accent-line) ${line}, transparent ${line})`,
					backgroundSize: `${cell} ${cell}`,
					filter: `blur(${softening})`,
				}}
			/>
		</div>
	);
}

/** A field of small twinkling stars. */
function BackgroundStars({ animated = true, speed }: BackgroundLayerProps) {
	return (
		<div
			data-slot="background-stars"
			className="absolute inset-0"
			style={{
				backgroundImage: [
					"radial-gradient(1px 1px at 20px 30px, var(--foreground), transparent)",
					"radial-gradient(1px 1px at 90px 50px, var(--foreground), transparent)",
					"radial-gradient(1px 1px at 130px 120px, var(--foreground), transparent)",
					"radial-gradient(1.5px 1.5px at 50px 160px, var(--foreground), transparent)",
					"radial-gradient(1px 1px at 170px 90px, var(--foreground), transparent)",
					"radial-gradient(1px 1px at 110px 20px, var(--foreground), transparent)",
				].join(", "),
				backgroundSize: "200px 200px",
				opacity: 0.5,
				animation: animated
					? `honami-twinkle ${4 / toSpeed(speed)}s ease-in-out infinite`
					: undefined,
			}}
		/>
	);
}

/** Angled light shafts sweeping from the top, faded with a radial mask. */
function BackgroundBeams({ animated = true, speed }: BackgroundLayerProps) {
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
					? `honami-beam ${14 / toSpeed(speed)}s linear infinite alternate`
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
	speed,
}: BackgroundLayerProps) {
	return (
		<div
			data-slot="background-aurora"
			className="absolute -inset-1/2 blur-[100px]"
			style={{
				opacity: AURORA_OPACITY[intensity],
				background:
					"conic-gradient(from 0deg at 50% 40%, var(--honami-accent), var(--honami-accent-2), var(--honami-cyan), var(--honami-accent))",
				animation: animated
					? `honami-spin ${40 / toSpeed(speed)}s linear infinite`
					: undefined,
			}}
		/>
	);
}

/** Several overlapping accent blooms that drift slowly (a mesh gradient). */
function BackgroundMesh({ animated = true, speed }: BackgroundLayerProps) {
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
					? `honami-mesh ${24 / toSpeed(speed)}s ease-in-out infinite`
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
			<BackgroundGrid cellSize={props.cellSize} lineWidth={props.lineWidth} />
		</>
	),
	aurora: (props: BackgroundLayerProps) => (
		<>
			<BackgroundWash />
			<BackgroundBlobs {...props} />
		</>
	),
	grid: (props: BackgroundLayerProps) => (
		<>
			<BackgroundWash />
			<BackgroundGrid cellSize={props.cellSize} lineWidth={props.lineWidth} />
		</>
	),
	dots: (props: BackgroundLayerProps) => (
		<>
			<BackgroundWash />
			<BackgroundDots cellSize={props.cellSize} lineWidth={props.lineWidth} />
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
	starfield: (props: BackgroundLayerProps) => (
		<>
			<BackgroundWash />
			<BackgroundStars {...props} />
		</>
	),
	tilt: (props: BackgroundLayerProps) => (
		<>
			<BackgroundWash />
			<BackgroundTiltGrid {...props} />
		</>
	),
	spotlight: (props: BackgroundLayerProps) => (
		<BackgroundSpotlight {...props} />
	),
	solid: () => null,
} satisfies Record<string, (props: BackgroundLayerProps) => React.ReactNode>;

type BackgroundVariant = keyof typeof backgrounds;

type BackgroundOverlayProps = {
	/** Overlay opacity — overrides the per-overlay default when set. */
	opacity?: number;
	/** Vignette clear-centre radius as a percentage (`vignette`). */
	vignetteSize?: number;
	/** Grain tile size in px (`grain`). */
	grainScale?: number;
	/** Scanline period in px (`scanlines`). */
	scanlineGap?: number;
};

const overlays = {
	none: () => null,
	grain: (p: BackgroundOverlayProps) => (
		<BackgroundGrain opacity={p.opacity} scale={p.grainScale} />
	),
	vignette: (p: BackgroundOverlayProps) => (
		<BackgroundVignette opacity={p.opacity} size={p.vignetteSize} />
	),
	scanlines: (p: BackgroundOverlayProps) => (
		<BackgroundScanlines opacity={p.opacity} gap={p.scanlineGap} />
	),
} satisfies Record<string, (p: BackgroundOverlayProps) => React.ReactNode>;

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
	rotateX,
	rotateY,
	rotateZ,
	scale,
	cellSize,
	lineWidth,
	speed,
	overlayOpacity,
	vignetteSize,
	grainScale,
	scanlineGap,
	className,
	children,
	...props
}: React.ComponentProps<"div"> &
	BackgroundLayerProps & {
		variant?: BackgroundVariant;
		overlay?: BackgroundOverlay;
		/** Overlay opacity — overrides the active overlay's default. */
		overlayOpacity?: number;
	} & Pick<
		BackgroundOverlayProps,
		"vignetteSize" | "grainScale" | "scanlineGap"
	>) {
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
			{backgrounds[variant]?.({
				animated,
				intensity,
				rotateX,
				rotateY,
				rotateZ,
				scale,
				cellSize,
				lineWidth,
				speed,
			})}
			{children}
			{overlays[overlay]?.({
				opacity: overlayOpacity,
				vignetteSize,
				grainScale,
				scanlineGap,
			})}
		</div>
	);
}

export {
	Background,
	BackgroundAurora,
	BackgroundBeams,
	BackgroundBlobs,
	BackgroundDots,
	BackgroundGrain,
	BackgroundGrid,
	type BackgroundIntensity,
	type BackgroundLayerProps,
	BackgroundMesh,
	type BackgroundOverlay,
	type BackgroundOverlayProps,
	BackgroundScanlines,
	BackgroundSpotlight,
	BackgroundStars,
	BackgroundTiltGrid,
	type BackgroundVariant,
	BackgroundVignette,
	BackgroundWash,
	backgrounds,
	overlays,
};
