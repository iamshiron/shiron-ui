import { render, screen } from "@testing-library/react";
import { page } from "vitest/browser";
import { expect, it } from "vitest";
import "@shiron/ui/styles/globals.css";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@shiron/ui/components/ui/dialog";

// Compiled responsive Tailwind sizing requires a real browser layout engine.
it.each([
	{ width: 1440, height: 900 },
	{ width: 390, height: 844 },
])("fits the workspace dialog at $width px", async ({ width, height }) => {
	await page.viewport(width, height);
	render(
		<Dialog open>
			<DialogContent size="workspace">
				<DialogTitle>Workspace</DialogTitle>
				<DialogDescription>Browse registered models</DialogDescription>
			</DialogContent>
		</Dialog>,
	);
	const dialog = screen.getByRole("dialog");
	await expect.poll(() => dialog.getAnimations().length).toBe(0);
	const bounds = dialog.getBoundingClientRect();
	expect(bounds.width).toBeCloseTo(width >= 640 ? width * 0.7 : width - 32, 0);
	expect(bounds.left).toBeGreaterThanOrEqual(16);
	expect(bounds.right).toBeLessThanOrEqual(width - 16);
	expect(getComputedStyle(dialog).overflowY).toBe("auto");
	expect(Number.parseFloat(getComputedStyle(dialog).maxHeight)).toBe(
		height - 32,
	);
});
