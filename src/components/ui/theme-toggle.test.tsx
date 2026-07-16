import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "@shiron/ui/components/ui/theme-toggle";

describe("ThemeToggle", () => {
	it("flips to the light partner of the accent when a dark theme is active", async () => {
		const user = userEvent.setup();
		const onValueChange = vi.fn();
		render(<ThemeToggle value="amethyst" onValueChange={onValueChange} />);

		await user.click(screen.getByRole("button"));

		// purple accent: amethyst (dark) -> jasper (light)
		expect(onValueChange).toHaveBeenCalledWith("jasper");
	});

	it("respects the accent prop (blue: sapphire -> aquamarine)", async () => {
		const user = userEvent.setup();
		const onValueChange = vi.fn();
		render(
			<ThemeToggle
				accent="blue"
				value="sapphire"
				onValueChange={onValueChange}
			/>,
		);

		await user.click(screen.getByRole("button"));

		expect(onValueChange).toHaveBeenCalledWith("aquamarine");
	});

	it("labels the action by the target mode", () => {
		render(<ThemeToggle value="jasper" onValueChange={() => {}} />);
		expect(
			screen.getByRole("button", { name: /switch to dark theme/i }),
		).toBeInTheDocument();
	});
});
