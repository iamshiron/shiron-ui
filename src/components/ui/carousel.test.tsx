import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

// Embla needs real layout that jsdom cannot provide, so mock the hook and
// assert the carousel wires keyboard navigation to the embla API.
const embla = vi.hoisted(() => {
	const api = {
		scrollPrev: vi.fn<() => void>(),
		scrollNext: vi.fn<() => void>(),
		canScrollPrev: vi.fn<() => boolean>(() => true),
		canScrollNext: vi.fn<() => boolean>(() => true),
		on: vi.fn<() => void>(),
		off: vi.fn<() => void>(),
	};
	return { api, ref: vi.fn<() => void>() };
});

vi.mock("embla-carousel-react", () => ({
	default: () => [embla.ref, embla.api],
}));

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	useCarousel,
} from "@shiron/ui/components/ui/carousel";

function Fixture() {
	return (
		<Carousel>
			<CarouselContent>
				<CarouselItem>Slide 1</CarouselItem>
				<CarouselItem>Slide 2</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}

function Orphan() {
	useCarousel();
	return null;
}

describe("Carousel", () => {
	it("renders an accessible carousel region", () => {
		render(<Fixture />);
		const region = screen.getByRole("region");

		expect(region).toHaveAttribute("data-slot", "carousel");
		expect(region).toHaveAttribute("aria-roledescription", "carousel");
	});

	it("drives the embla API from arrow keys", () => {
		render(<Fixture />);
		const region = screen.getByRole("region");

		// The handler is registered via onKeyDownCapture on the (non-focusable)
		// region, so dispatch the event on the region directly.
		fireEvent.keyDown(region, { key: "ArrowRight" });
		expect(embla.api.scrollNext).toHaveBeenCalled();

		fireEvent.keyDown(region, { key: "ArrowLeft" });
		expect(embla.api.scrollPrev).toHaveBeenCalled();
	});

	it("throws when useCarousel is used outside a Carousel", () => {
		expect(() => render(<Orphan />)).toThrow(/within a <Carousel/);
	});
});
