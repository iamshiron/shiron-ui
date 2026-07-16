import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
	Background,
	backgrounds,
	type BackgroundVariant,
} from "@shiron/ui/components/ui/background";

function firstBlob(container: HTMLElement): HTMLElement {
	const blob = container.querySelector<HTMLElement>(
		'[data-slot="background-blobs"] > div',
	);
	if (!blob) {
		throw new Error("expected a blob to be rendered");
	}
	return blob;
}

function spotlight(container: HTMLElement): HTMLElement {
	const el = container.querySelector<HTMLElement>(
		'[data-slot="background-spotlight"]',
	);
	if (!el) {
		throw new Error("expected a spotlight to be rendered");
	}
	return el;
}

describe("Background", () => {
	it("renders a fixed, decorative, non-interactive shell", () => {
		const { container } = render(<Background />);
		const shell = container.querySelector('[data-slot="background"]');

		expect(shell).toHaveClass("fixed", "-z-10", "pointer-events-none");
		expect(shell).toHaveAttribute("aria-hidden", "true");
		expect(shell).toHaveAttribute("data-variant", "atmosphere");
	});

	it("composes the atmosphere variant from wash + blobs + grid", () => {
		const { container } = render(<Background variant="atmosphere" />);

		expect(
			container.querySelector('[data-slot="background-wash"]'),
		).not.toBeNull();
		expect(
			container.querySelector('[data-slot="background-blobs"]'),
		).not.toBeNull();
		expect(
			container.querySelector('[data-slot="background-grid"]'),
		).not.toBeNull();
	});

	it("omits blobs for the grid variant", () => {
		const { container } = render(<Background variant="grid" />);

		expect(
			container.querySelector('[data-slot="background-grid"]'),
		).not.toBeNull();
		expect(container.querySelector('[data-slot="background-blobs"]')).toBeNull();
	});

	it("renders no decorative layers for the solid variant but keeps children", () => {
		const { container, getByText } = render(
			<Background variant="solid">
				<div>custom layer</div>
			</Background>,
		);

		expect(container.querySelector('[data-slot="background-wash"]')).toBeNull();
		expect(container.querySelector('[data-slot="background-blobs"]')).toBeNull();
		expect(getByText("custom layer")).toBeInTheDocument();
	});

	it("animates blobs by default and stops when animated is false", () => {
		const animated = render(<Background />);
		expect(firstBlob(animated.container).style.animation).toContain(
			"honami-drift",
		);

		const still = render(<Background animated={false} />);
		expect(firstBlob(still.container).style.animation).toBe("");
	});

	it("scales blob opacity with the intensity prop", () => {
		const subtle = render(<Background intensity="subtle" />);
		const vivid = render(<Background intensity="vivid" />);

		expect(Number(firstBlob(vivid.container).style.opacity)).toBeGreaterThan(
			Number(firstBlob(subtle.container).style.opacity),
		);
	});

	it("layers no overlay by default", () => {
		const { container } = render(<Background />);

		expect(container.querySelector('[data-slot="background"]')).toHaveAttribute(
			"data-overlay",
			"none",
		);
		expect(container.querySelector('[data-slot="background-grain"]')).toBeNull();
	});

	it("layers the requested texture overlay on top of any variant", () => {
		const { container } = render(<Background variant="grid" overlay="grain" />);

		// The grid variant still renders, with grain layered over it.
		expect(
			container.querySelector('[data-slot="background-grid"]'),
		).not.toBeNull();
		expect(
			container.querySelector('[data-slot="background-grain"]'),
		).not.toBeNull();
	});

	it("supports the vignette and scanlines overlays", () => {
		const vignette = render(<Background overlay="vignette" />);
		expect(
			vignette.container.querySelector('[data-slot="background-vignette"]'),
		).not.toBeNull();

		const scanlines = render(<Background overlay="scanlines" />);
		expect(
			scanlines.container.querySelector('[data-slot="background-scanlines"]'),
		).not.toBeNull();
	});
});

describe("Background spotlight", () => {
	it("tracks the pointer into CSS variables", () => {
		const { container } = render(<Background variant="spotlight" />);
		const el = spotlight(container);

		fireEvent(
			window,
			new MouseEvent("pointermove", { clientX: 123, clientY: 45 }),
		);

		expect(el.style.getPropertyValue("--spotlight-x")).toBe("123px");
		expect(el.style.getPropertyValue("--spotlight-y")).toBe("45px");
	});

	it("does not track when animated is false", () => {
		const { container } = render(
			<Background variant="spotlight" animated={false} />,
		);
		const el = spotlight(container);

		fireEvent(
			window,
			new MouseEvent("pointermove", { clientX: 10, clientY: 10 }),
		);

		expect(el.style.getPropertyValue("--spotlight-x")).toBe("");
	});
});

describe("Background config", () => {
	it("applies cellSize and lineWidth to the grid", () => {
		const { container } = render(
			<Background variant="grid" cellSize={80} lineWidth={3} />,
		);
		const grid = container.querySelector<HTMLElement>(
			'[data-slot="background-grid"]',
		);

		expect(grid?.style.backgroundSize).toBe("80px 80px");
		expect(grid?.style.backgroundImage).toContain("3px");
	});

	it("applies the tilt rotations", () => {
		const { container } = render(
			<Background variant="tilt" rotateX={12} rotateY={34} rotateZ={5} />,
		);
		const plane = container.querySelector<HTMLElement>(
			'[data-slot="background-tilt"] > div',
		);

		expect(plane?.style.transform).toContain("rotateX(12deg)");
		expect(plane?.style.transform).toContain("rotateY(34deg)");
		expect(plane?.style.transform).toContain("rotateZ(5deg)");
	});

	it("applies overlay opacity", () => {
		const { container } = render(
			<Background overlay="grain" overlayOpacity={0.2} />,
		);
		const grain = container.querySelector<HTMLElement>(
			'[data-slot="background-grain"]',
		);

		expect(grain?.style.opacity).toBe("0.2");
	});
});

describe("Background registry", () => {
	// Every registered variant must render without crashing and tag its shell,
	// so newly-added presets are covered automatically.
	for (const variant of Object.keys(backgrounds) as BackgroundVariant[]) {
		it(`renders the "${variant}" variant`, () => {
			const { container } = render(<Background variant={variant} />);
			expect(
				container.querySelector('[data-slot="background"]'),
			).toHaveAttribute("data-variant", variant);
		});
	}
});
