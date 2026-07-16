import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import {
	SidebarProvider,
	useSidebar,
} from "@shiron/ui/components/ui/sidebar";

function Probe() {
	const { state, open, openMobile, isMobile, toggleSidebar } = useSidebar();
	return (
		<div>
			<span data-testid="state">{state}</span>
			<span data-testid="open">{String(open)}</span>
			<span data-testid="open-mobile">{String(openMobile)}</span>
			<span data-testid="is-mobile">{String(isMobile)}</span>
			<button type="button" onClick={toggleSidebar}>
				toggle
			</button>
		</div>
	);
}

afterEach(() => {
	// Reset the cookie the provider writes so tests do not leak state.
	// biome-ignore lint/suspicious/noDocumentCookie: test cleanup of the sidebar cookie
	document.cookie = "sidebar_state=; path=/; max-age=0";
});

describe("SidebarProvider", () => {
	it("starts expanded and collapses on toggle, persisting to a cookie", async () => {
		const user = userEvent.setup();
		render(
			<SidebarProvider>
				<Probe />
			</SidebarProvider>,
		);

		expect(screen.getByTestId("state")).toHaveTextContent("expanded");

		await user.click(screen.getByRole("button", { name: "toggle" }));

		expect(screen.getByTestId("state")).toHaveTextContent("collapsed");
		expect(document.cookie).toContain("sidebar_state=false");
	});

	it("toggles from the Ctrl/Cmd+B keyboard shortcut", async () => {
		const user = userEvent.setup();
		render(
			<SidebarProvider>
				<Probe />
			</SidebarProvider>,
		);

		expect(screen.getByTestId("state")).toHaveTextContent("expanded");

		await user.keyboard("{Control>}b{/Control}");

		expect(screen.getByTestId("state")).toHaveTextContent("collapsed");
	});

	it("throws when useSidebar is used outside a provider", () => {
		function Orphan() {
			useSidebar();
			return null;
		}
		expect(() => render(<Orphan />)).toThrow(/within a SidebarProvider/);
	});
});
