import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Background } from "@shiron/ui/components/ui/background";

function firstBlob(container: HTMLElement): HTMLElement {
	const blob = container.querySelector<HTMLElement>(
		'[data-slot="background-blobs"] > div',
	);
	if (!blob) {
		throw new Error("expected a blob to be rendered");
	}
	return blob;
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
});
