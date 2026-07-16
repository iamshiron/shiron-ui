import { describe, expect, it } from "vitest";
import { cn } from "@shiron/ui/lib/utils";

describe("cn", () => {
	it("joins truthy class names", () => {
		expect(cn("a", "b", "c")).toBe("a b c");
	});

	it("drops falsy values and flattens arrays via clsx", () => {
		expect(cn("a", false && "b", null, undefined, ["c", "d"])).toBe("a c d");
	});

	it("resolves conflicting tailwind utilities so the last one wins", () => {
		expect(cn("px-2", "px-4")).toBe("px-4");
		expect(cn("text-sm", "text-lg")).toBe("text-lg");
	});

	it("keeps non-conflicting utilities from different groups", () => {
		expect(cn("px-2", "py-4", "text-sm")).toBe("px-2 py-4 text-sm");
	});

	it("supports conditional object syntax", () => {
		expect(cn("base", { active: true, disabled: false })).toBe("base active");
	});
});
