import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// This suite runs in a real (headless) browser with the compiled Tailwind
// stylesheet loaded, so `getComputedStyle` reflects the actual @utility and
// @custom-variant rules. It guards the class of regressions that jsdom cannot
// see — variants that silently produce no CSS.
import "@shiron/ui/styles/globals.css";
import { Checkbox } from "@shiron/ui/components/ui/checkbox";
import { GlassPanel } from "@shiron/ui/components/ui/glass-panel";
import { Slider } from "@shiron/ui/components/ui/slider";
import { Switch } from "@shiron/ui/components/ui/switch";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@shiron/ui/components/ui/tabs";

function query(root: ParentNode, selector: string): Element {
	const found = root.querySelector(selector);
	if (!found) {
		throw new Error(`expected to find "${selector}"`);
	}
	return found;
}

describe("CSS / variant integrity", () => {
	it("paints the honami gradient on a checked switch (data-checked:honami-grad)", () => {
		const { container } = render(<Switch defaultChecked />);
		const root = query(container, '[data-slot="switch"]');

		expect(getComputedStyle(root).backgroundImage).toContain("linear-gradient");
	});

	it("translates the switch thumb when checked (data-[state=checked])", () => {
		const { container } = render(<Switch defaultChecked />);
		const thumb = query(container, '[data-slot="switch-thumb"]');
		const cs = getComputedStyle(thumb);

		// Tailwind v4 applies translate utilities via the `translate` property;
		// accept a real transform too. Either way it must not be the identity.
		const moved = cs.translate !== "none" || cs.transform !== "none";
		expect(moved).toBe(true);
	});

	it("gives the slider track a real height (data-horizontal:h-3)", () => {
		const { container } = render(<Slider defaultValue={[50]} />);
		const track = query(container, '[data-slot="slider-track"]');

		expect(Number.parseFloat(getComputedStyle(track).height)).toBeGreaterThan(0);
	});

	it("paints the honami gradient on a checked checkbox", () => {
		const { container } = render(<Checkbox defaultChecked />);
		const box = query(container, '[data-slot="checkbox"]');

		expect(getComputedStyle(box).backgroundImage).toContain("linear-gradient");
	});

	it("applies a backdrop filter to the glass surface", () => {
		const { container } = render(<GlassPanel>panel</GlassPanel>);
		const panel = query(container, '[data-slot="glass-panel"]');
		const cs = getComputedStyle(panel);
		const backdrop =
			cs.backdropFilter || cs.getPropertyValue("-webkit-backdrop-filter");

		expect(backdrop).not.toBe("none");
		expect(backdrop).not.toBe("");
	});

	it("reveals the line-tab underline on the active trigger (triple compound)", () => {
		const { getByRole } = render(
			<Tabs defaultValue="one">
				<TabsList variant="line">
					<TabsTrigger value="one">One</TabsTrigger>
					<TabsTrigger value="two">Two</TabsTrigger>
				</TabsList>
				<TabsContent value="one">First</TabsContent>
				<TabsContent value="two">Second</TabsContent>
			</Tabs>,
		);
		const active = getByRole("tab", { name: "One" });

		// group-data-[variant=line]/tabs-list:data-active:after:opacity-100
		expect(getComputedStyle(active, "::after").opacity).toBe("1");
	});
});
