import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@shiron/ui/components/ui/tooltip";

function Fixture() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>Hover me</TooltipTrigger>
				<TooltipContent>Tooltip copy</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

describe("Tooltip", () => {
	it("stays hidden until the trigger is focused", () => {
		render(<Fixture />);
		expect(screen.queryByRole("tooltip")).toBeNull();
	});

	it("reveals the tooltip content on focus", async () => {
		const user = userEvent.setup();
		render(<Fixture />);

		await user.tab();
		expect(screen.getByRole("button", { name: /hover me/i })).toHaveFocus();

		const tooltip = await screen.findByRole("tooltip");
		expect(tooltip).toHaveTextContent("Tooltip copy");
	});
});
