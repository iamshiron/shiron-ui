import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	tabsListVariants,
} from "@shiron/ui/components/ui/tabs";

describe("tabsListVariants", () => {
	it("uses a filled surface for the default variant", () => {
		expect(tabsListVariants({ variant: "default" })).toContain("bg-muted");
	});

	it("is transparent for the line variant", () => {
		expect(tabsListVariants({ variant: "line" })).toContain("bg-transparent");
	});
});

function Fixture() {
	return (
		<Tabs defaultValue="one">
			<TabsList>
				<TabsTrigger value="one">One</TabsTrigger>
				<TabsTrigger value="two">Two</TabsTrigger>
			</TabsList>
			<TabsContent value="one">First panel</TabsContent>
			<TabsContent value="two">Second panel</TabsContent>
		</Tabs>
	);
}

describe("Tabs", () => {
	it("marks the default tab active via the data-state the underline keys on", () => {
		render(<Fixture />);

		expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute(
			"data-state",
			"active",
		);
		expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute(
			"data-state",
			"inactive",
		);
		expect(screen.getByText("First panel")).toBeVisible();
	});

	it("activates a tab on click and swaps the visible panel", async () => {
		const user = userEvent.setup();
		render(<Fixture />);

		await user.click(screen.getByRole("tab", { name: "Two" }));

		expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute(
			"data-state",
			"active",
		);
		expect(screen.getByText("Second panel")).toBeVisible();
	});
});
