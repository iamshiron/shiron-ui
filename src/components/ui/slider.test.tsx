import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Slider } from "@shiron/ui/components/ui/slider";

describe("Slider", () => {
	it("marks the track horizontal so data-horizontal:h-3 applies", () => {
		const { container } = render(<Slider defaultValue={[50]} />);
		const track = container.querySelector('[data-slot="slider-track"]');

		// The track height comes from `data-horizontal:h-3`, keyed on
		// [data-orientation="horizontal"].
		expect(track).toHaveAttribute("data-orientation", "horizontal");
	});

	it("switches the orientation attribute when vertical", () => {
		const { container } = render(
			<Slider defaultValue={[50]} orientation="vertical" />,
		);
		const track = container.querySelector('[data-slot="slider-track"]');

		expect(track).toHaveAttribute("data-orientation", "vertical");
	});

	it("renders a single thumb for a single value", () => {
		render(<Slider defaultValue={[25]} />);
		expect(screen.getAllByRole("slider")).toHaveLength(1);
	});

	it("renders one thumb per value for a range", () => {
		render(<Slider value={[25, 75]} />);
		expect(screen.getAllByRole("slider")).toHaveLength(2);
	});

	it("exposes value bounds on the thumb", () => {
		render(<Slider defaultValue={[40]} min={0} max={100} />);
		const thumb = screen.getByRole("slider");

		expect(thumb).toHaveAttribute("aria-valuemin", "0");
		expect(thumb).toHaveAttribute("aria-valuemax", "100");
		expect(thumb).toHaveAttribute("aria-valuenow", "40");
	});
});
