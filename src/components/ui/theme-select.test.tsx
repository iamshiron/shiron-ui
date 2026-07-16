import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeSelect } from "@shiron/ui/components/ui/theme-select";

describe("ThemeSelect", () => {
	it("renders as a combobox showing the controlled theme", () => {
		render(<ThemeSelect value="sapphire" onValueChange={() => {}} />);
		const trigger = screen.getByRole("combobox");

		expect(trigger).toHaveAttribute("data-slot", "theme-select");
		expect(trigger).toHaveTextContent("Sapphire");
	});
});
