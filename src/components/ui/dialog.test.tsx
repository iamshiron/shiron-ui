import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Button } from "@shiron/ui/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@shiron/ui/components/ui/dialog";

function Fixture({ size }: { size?: "default" | "workspace" }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Open</Button>
			</DialogTrigger>
			<DialogContent size={size}>
				<DialogHeader>
					<DialogTitle>Ring buffer</DialogTitle>
					<DialogDescription>Allocation-free collection</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

describe("Dialog", () => {
	it.each(["default", "workspace"] as const)(
		"supports %s sizing without forwarding a native size attribute",
		async (size) => {
			const user = userEvent.setup();
			render(<Fixture size={size} />);
			await user.click(screen.getByRole("button", { name: "Open" }));
			const dialog = await screen.findByRole("dialog");
			expect(dialog).toHaveAttribute("data-size", size);
			expect(dialog).not.toHaveAttribute("size");
			expect(dialog).toHaveAccessibleName("Ring buffer");
			await user.keyboard("{Escape}");
			expect(screen.queryByRole("dialog")).toBeNull();
			expect(screen.getByRole("button", { name: "Open" })).toHaveFocus();
		},
	);
	it("is closed until the trigger is activated", () => {
		render(<Fixture />);
		expect(screen.queryByRole("dialog")).toBeNull();
	});

	it("opens into a portal with accessible name + description wiring", async () => {
		const user = userEvent.setup();
		render(<Fixture />);

		await user.click(screen.getByRole("button", { name: "Open" }));

		const dialog = await screen.findByRole("dialog");
		expect(dialog).toHaveAttribute("data-slot", "dialog-content");
		expect(dialog).toHaveAccessibleName("Ring buffer");
		expect(dialog).toHaveAccessibleDescription("Allocation-free collection");
	});

	it("closes on Escape", async () => {
		const user = userEvent.setup();
		render(<Fixture />);
		await user.click(screen.getByRole("button", { name: "Open" }));
		await screen.findByRole("dialog");

		await user.keyboard("{Escape}");

		expect(screen.queryByRole("dialog")).toBeNull();
	});

	it("closes via the built-in close button", async () => {
		const user = userEvent.setup();
		render(<Fixture />);
		await user.click(screen.getByRole("button", { name: "Open" }));
		await screen.findByRole("dialog");

		await user.click(screen.getByRole("button", { name: "Close" }));

		expect(screen.queryByRole("dialog")).toBeNull();
	});
});
