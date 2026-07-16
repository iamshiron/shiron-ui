import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { useTheme } from "@shiron/ui/hooks/use-theme";
import { defaultTheme } from "@shiron/ui/lib/themes";

afterEach(() => {
	// Reset the module-level store between tests.
	const { result } = renderHook(() => useTheme());
	act(() => result.current.setTheme(defaultTheme));
});

describe("useTheme", () => {
	it("applies the theme to the document and reports its mode", () => {
		const { result } = renderHook(() => useTheme());

		act(() => result.current.setTheme("sapphire"));

		expect(document.documentElement.dataset.theme).toBe("sapphire");
		expect(result.current.theme).toBe("sapphire");
		expect(result.current.mode).toBe("dark");
	});

	it("persists the choice to localStorage", () => {
		const { result } = renderHook(() => useTheme());

		act(() => result.current.setTheme("jasper"));

		expect(localStorage.getItem("shiron-ui-theme")).toBe("jasper");
		expect(result.current.mode).toBe("light");
	});

	it("keeps separate consumers in sync", () => {
		const a = renderHook(() => useTheme());
		const b = renderHook(() => useTheme());

		act(() => a.result.current.setTheme("jade"));

		expect(b.result.current.theme).toBe("jade");
	});
});
