import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Switch } from "@shiron/ui/components/ui/switch";

describe("Switch", () => {
	it("exposes the switch role and slot", () => {
		render(<Switch aria-label="wifi" />);
		const root = screen.getByRole("switch", { name: "wifi" });

		expect(root).toHaveAttribute("data-slot", "switch");
	});

	it("reflects the data-state the data-checked variant keys on", async () => {
		const user = userEvent.setup();
		render(<Switch aria-label="wifi" />);
		const root = screen.getByRole("switch", { name: "wifi" });

		// globals.css maps `data-checked:` to `[data-state="checked"]`, so the
		// component must expose data-state for the gradient fill to apply.
		expect(root).toHaveAttribute("data-state", "unchecked");
		expect(root).toHaveAttribute("aria-checked", "false");

		await user.click(root);

		expect(root).toHaveAttribute("data-state", "checked");
		expect(root).toHaveAttribute("aria-checked", "true");
	});

	it("moves the thumb via the state attribute its translate keys on", () => {
		render(<Switch defaultChecked aria-label="wifi" />);
		const thumb = screen
			.getByRole("switch", { name: "wifi" })
			.querySelector('[data-slot="switch-thumb"]');

		// thumb translate keys on data-[state=checked]
		expect(thumb).toHaveAttribute("data-state", "checked");
	});
});
