import {
	Background,
	BackgroundBeams,
	BackgroundGrain,
	BackgroundStars,
	type BackgroundVariant,
	BackgroundWash,
} from "@shiron/ui/components/ui/background";
import { StatusDot } from "@shiron/ui/components/ui/status-dot";
import type { DemoGroup, DemoVariant } from "./types";

// Preset variants worth showing off, plus a trailing "custom" pseudo-variant
// that swaps in a hand-composed backdrop. `spotlight` (pointer-following) and
// `solid` (no layers) are omitted — neither reads well in a static box.
const VARIANTS: (DemoVariant & { key: BackgroundVariant | "custom" })[] = [
	{ key: "atmosphere", label: "Atmosphere" },
	{ key: "aurora", label: "Aurora" },
	{ key: "mesh", label: "Mesh" },
	{ key: "ribbons", label: "Ribbons" },
	{ key: "grid", label: "Grid" },
	{ key: "dots", label: "Dots" },
	{ key: "tilt", label: "Tilt" },
	{ key: "beams", label: "Beams" },
	{ key: "starfield", label: "Starfield" },
	{ key: "custom", label: "Custom" },
];

// The layer props each variant actually reads — a tilt grid takes rotation,
// the blob/aurora looks take intensity, the line/dot grids take sizing, etc.
// Keyed so the code sample only shows knobs that do something for that variant.
const VARIANT_PROPS: Record<BackgroundVariant, string[]> = {
	atmosphere: [
		`  intensity="vivid"    // subtle · default · vivid`,
		`  speed={1.6}          // animation speed multiplier`,
		`  animated             // set false to freeze it`,
		`  cellSize={44}        // grid cell size (px)`,
		`  lineWidth={1}        // grid line thickness (px)`,
	],
	aurora: [
		`  intensity="vivid"    // subtle · default · vivid`,
		`  speed={1.6}          // animation speed multiplier`,
		`  animated             // set false to freeze it`,
	],
	ribbons: [
		`  intensity="vivid"    // subtle · default · vivid`,
		`  speed={1.6}          // animation speed multiplier`,
		`  animated             // set false to freeze it`,
	],
	mesh: [
		`  speed={1.6}          // animation speed multiplier`,
		`  animated             // set false to freeze it`,
	],
	beams: [
		`  speed={1.6}          // animation speed multiplier`,
		`  animated             // set false to freeze it`,
	],
	starfield: [
		`  speed={1.6}          // animation speed multiplier`,
		`  animated             // set false to freeze it`,
	],
	grid: [
		`  cellSize={44}        // grid cell size (px)`,
		`  lineWidth={1}        // grid line thickness (px)`,
	],
	dots: [
		`  cellSize={22}        // dot spacing (px)`,
		`  lineWidth={1}        // dot radius (px)`,
	],
	tilt: [
		`  rotateX={38}         // plane tilt (deg)`,
		`  rotateY={0}`,
		`  rotateZ={-3}`,
		`  scale={1}            // zoom multiplier`,
		`  cellSize={46}        // grid cell size (px)`,
		`  lineWidth={1}        // grid line thickness (px)`,
	],
	spotlight: [`  animated             // glow follows the pointer`],
	solid: [],
};

const COMPOSE_CODE = `import {
  Background,
  BackgroundWash,
  BackgroundStars,
  BackgroundBeams,
  BackgroundGrain,
} from "@shiron/ui/components/ui/background";

// The named variants are just presets. The "solid" variant renders no
// layers — a blank canvas. Stack the exported primitives as children to
// compose your own backdrop:
<Background variant="solid">
  <BackgroundWash />
  <BackgroundStars speed={1.6} />
  <BackgroundBeams speed={1.6} />
  <BackgroundGrain opacity={0.35} />
</Background>`;

export const backgroundsGroup: DemoGroup = {
	name: "Surfaces",
	demos: [
		{
			id: "background",
			name: "Background",
			description:
				"A live, animated page backdrop — render it once in your app shell and it fixes itself behind every page. Nine prop-driven variants plus texture overlays (grain, vignette, scanlines). Pick the Custom variant to see how to compose your own from the exported layer primitives.",
			keywords: [
				"backdrop",
				"ambient",
				"gradient",
				"aurora",
				"mesh",
				"surface",
				"compose",
			],
			// No Storybook story for the ambient background — it's a full-viewport
			// layer that doesn't fit the isolated story canvas.
			storybook: false,
			variants: VARIANTS,
			// `Background` is `fixed inset-0 -z-10`; the `isolate` box traps that
			// layer and `className="absolute"` swaps `fixed` → `absolute` so the
			// backdrop stays inside the preview instead of covering the viewport.
			// `speed={1.6}` quickens the drift/spin/twinkle so the motion reads at a
			// glance — these are live layers, not stills.
			render: (v) => {
				const isCustom = v === "custom";
				return (
					<div className="flex w-full max-w-md flex-col gap-3">
						<div className="relative isolate h-72 w-full overflow-hidden rounded-xl border border-border">
							{isCustom ? (
								// `solid` draws nothing itself; the children are the whole look.
								<Background variant="solid" className="absolute">
									<BackgroundWash />
									<BackgroundStars speed={1.6} />
									<BackgroundBeams speed={1.6} />
									<BackgroundGrain opacity={0.35} />
								</Background>
							) : (
								<Background
									variant={v as BackgroundVariant}
									intensity="vivid"
									speed={1.6}
									className="absolute"
								/>
							)}
							<div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs backdrop-blur-sm">
								<StatusDot status="online" pulse />
								Live
							</div>
							<div className="flex h-full items-center justify-center">
								<span className="rounded-full border border-border bg-background/70 px-3 py-1 text-center font-medium text-sm capitalize backdrop-blur-sm">
									{isCustom ? "wash + stars + beams + grain" : v}
								</span>
							</div>
						</div>
						<p className="text-center text-muted-foreground text-xs">
							{isCustom ? (
								<>
									A blank <code>solid</code> canvas with four primitives stacked
									as children — mix and match your own.
								</>
							) : (
								<>
									Every layer animates and is driven by props —{" "}
									<code>intensity</code>, <code>speed</code>,{" "}
									<code>animated</code> and <code>overlay</code>.
								</>
							)}
						</p>
					</div>
				);
			},
			code: (v) => {
				if (v === "custom") return COMPOSE_CODE;
				const props = VARIANT_PROPS[v as BackgroundVariant] ?? [];
				return `// Render once in your root layout — it fixes itself behind every page.
<Background variant="${v}" />

// Every knob that shapes the "${v}" variant is a prop:
<Background
  variant="${v}"
${props.join("\n")}
  overlay="none"       // none · grain · vignette · scanlines
/>`;
			},
		},
	],
};
