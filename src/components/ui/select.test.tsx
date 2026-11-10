import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@shiron/ui/components/ui/select";

it("places the popup in the caller's semantic container", async () => {
	const owner = document.createElement("main");
	document.body.append(owner);
	const view = render(
		<Select open value="first">
			<SelectTrigger aria-label="Choice">
				<SelectValue />
			</SelectTrigger>
			<SelectContent container={owner}>
				<SelectItem value="first">First</SelectItem>
			</SelectContent>
		</Select>,
		{ container: owner },
	);
	try {
		expect(owner.contains(await screen.findByRole("listbox"))).toBe(true);
	} finally {
		view.unmount();
		owner.remove();
	}
});
