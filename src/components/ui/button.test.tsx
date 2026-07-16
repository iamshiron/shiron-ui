import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button, buttonVariants } from "@shiron/ui/components/ui/button";

describe("buttonVariants", () => {
	it("emits the accent gradient utility for the default variant", () => {
		expect(buttonVariants({ variant: "default" })).toContain("honami-grad");
	});

	it("applies the requested size", () => {
		expect(buttonVariants({ size: "lg" })).toContain("h-8");
	});

	it("falls back to default variant + size when unspecified", () => {
		expect(buttonVariants()).toBe(
			buttonVariants({ variant: "default", size: "default" }),
		);
	});
});

describe("Button", () => {
	it("exposes slot / variant / size data attributes", () => {
		render(
			<Button variant="outline" size="sm">
				Save
			</Button>,
		);
		const button = screen.getByRole("button", { name: "Save" });

		expect(button).toHaveAttribute("data-slot", "button");
		expect(button).toHaveAttribute("data-variant", "outline");
		expect(button).toHaveAttribute("data-size", "sm");
	});

	it("composes onto its child via asChild", () => {
		render(
			<Button asChild>
				<a href="/next">Go</a>
			</Button>,
		);
		const link = screen.getByRole("link", { name: "Go" });

		expect(link).toHaveAttribute("data-slot", "button");
		expect(link).toHaveAttribute("href", "/next");
	});

	it("forwards a ref to the underlying button element", () => {
		const ref = vi.fn();
		render(<Button ref={ref}>Ref</Button>);

		expect(ref).toHaveBeenCalledOnce();
		expect(ref.mock.calls[0]?.[0]).toBeInstanceOf(HTMLButtonElement);
	});

	it("is disabled and non-interactive when disabled", () => {
		render(<Button disabled>Nope</Button>);
		expect(screen.getByRole("button", { name: "Nope" })).toBeDisabled();
	});
});
