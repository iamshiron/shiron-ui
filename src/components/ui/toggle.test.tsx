import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Toggle, toggleVariants } from "@shiron/ui/components/ui/toggle";

describe("toggleVariants", () => {
	it("applies the outline variant border", () => {
		expect(toggleVariants({ variant: "outline" })).toContain("border");
	});

	it("applies the requested size", () => {
		expect(toggleVariants({ size: "sm" })).toContain("h-6");
		expect(toggleVariants({ size: "lg" })).toContain("h-8");
	});

	it("falls back to default variant + size", () => {
		expect(toggleVariants()).toBe(
			toggleVariants({ variant: "default", size: "default" }),
		);
	});
});

describe("Toggle", () => {
	it("reflects the pressed state the accent variant keys on", async () => {
		const user = userEvent.setup();
		render(<Toggle aria-label="Bold" />);
		const toggle = screen.getByRole("button", { name: "Bold" });

		expect(toggle).toHaveAttribute("data-slot", "toggle");
		expect(toggle).toHaveAttribute("data-state", "off");
		expect(toggle).toHaveAttribute("aria-pressed", "false");

		await user.click(toggle);

		expect(toggle).toHaveAttribute("data-state", "on");
		expect(toggle).toHaveAttribute("aria-pressed", "true");
	});
});
