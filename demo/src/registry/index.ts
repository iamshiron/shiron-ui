import { buttonsGroup } from "./buttons";
import { dataGroup } from "./data";
import { feedbackGroup } from "./feedback";
import { formsGroup } from "./forms";
import { KEYWORDS } from "./keywords";
import { navigationGroup } from "./navigation";
import { overlaysGroup } from "./overlays";
import type { Demo, DemoGroup } from "./types";

/** All demo groups, in sidebar order (keywords attached from the map). */
export const registry: DemoGroup[] = [
	buttonsGroup,
	formsGroup,
	navigationGroup,
	overlaysGroup,
	dataGroup,
	feedbackGroup,
].map((group) => ({
	...group,
	demos: group.demos.map((demo) => ({
		...demo,
		keywords: demo.keywords ?? KEYWORDS[demo.id] ?? [],
	})),
}));

/** Flat list of every demo. */
export const allDemos: Demo[] = registry.flatMap((group) => group.demos);

export function findDemo(id: string | null | undefined): Demo | undefined {
	return allDemos.find((demo) => demo.id === id);
}

/** Filter demos by name / id / keyword for the header search. */
export function searchDemos(query: string): Demo[] {
	const q = query.trim().toLowerCase();
	if (!q) return allDemos;
	return allDemos.filter((demo) => {
		const haystack = [demo.name, demo.id, ...(demo.keywords ?? [])]
			.join(" ")
			.toLowerCase();
		return haystack.includes(q);
	});
}
