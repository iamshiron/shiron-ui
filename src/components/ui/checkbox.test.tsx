import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Checkbox } from "@shiron/ui/components/ui/checkbox";

describe("Checkbox", () => {
	it("toggles aria-checked and the data-state the gradient variant keys on", async () => {
		const user = userEvent.setup();
		render(<Checkbox aria-label="accept" />);
		const box = screen.getByRole("checkbox", { name: "accept" });

		expect(box).toHaveAttribute("data-slot", "checkbox");
		expect(box).toHaveAttribute("data-state", "unchecked");
		expect(box).toHaveAttribute("aria-checked", "false");

		await user.click(box);

		expect(box).toHaveAttribute("data-state", "checked");
		expect(box).toHaveAttribute("aria-checked", "true");
	});

	it("renders the tick indicator only once checked", async () => {
		const user = userEvent.setup();
		render(<Checkbox aria-label="accept" />);
		const box = screen.getByRole("checkbox", { name: "accept" });

		expect(box.querySelector("svg")).toBeNull();

		await user.click(box);

		expect(box.querySelector("svg")).not.toBeNull();
	});

	it("honours the controlled checked prop", () => {
		render(<Checkbox checked aria-label="accept" />);
		expect(screen.getByRole("checkbox", { name: "accept" })).toBeChecked();
	});
});
