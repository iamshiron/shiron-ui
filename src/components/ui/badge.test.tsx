import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge, badgeVariants } from "@shiron/ui/components/ui/badge";

describe("badgeVariants", () => {
	it("emits the accent gradient utility for the gradient variant", () => {
		expect(badgeVariants({ variant: "gradient" })).toContain("honami-grad");
	});

	it("uses the destructive token for the destructive variant", () => {
		expect(badgeVariants({ variant: "destructive" })).toContain("destructive");
	});

	it("falls back to the default variant when none is given", () => {
		expect(badgeVariants()).toBe(badgeVariants({ variant: "default" }));
	});
});

describe("Badge", () => {
	it("renders as a span with the badge slot and variant data attribute", () => {
		render(<Badge variant="secondary">New</Badge>);
		const badge = screen.getByText("New");

		expect(badge.tagName).toBe("SPAN");
		expect(badge).toHaveAttribute("data-slot", "badge");
		expect(badge).toHaveAttribute("data-variant", "secondary");
	});

	it("renders as the child element when asChild is set", () => {
		render(
			<Badge asChild>
				<a href="/tags">Tag</a>
			</Badge>,
		);
		const link = screen.getByRole("link", { name: "Tag" });

		expect(link).toHaveAttribute("data-slot", "badge");
		expect(link).toHaveAttribute("href", "/tags");
	});
});
