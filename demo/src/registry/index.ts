import { buttonsGroup } from "./buttons";
import { dataGroup } from "./data";
import { feedbackGroup } from "./feedback";
import { formsGroup } from "./forms";
import { navigationGroup } from "./navigation";
import { overlaysGroup } from "./overlays";
import type { Demo, DemoGroup } from "./types";

/** All demo groups, in sidebar order. */
export const registry: DemoGroup[] = [
	buttonsGroup,
	formsGroup,
	navigationGroup,
	overlaysGroup,
	dataGroup,
	feedbackGroup,
];

/** Flat list of every demo. */
export const allDemos: Demo[] = registry.flatMap((group) => group.demos);

export function findDemo(id: string | null | undefined): Demo | undefined {
	return allDemos.find((demo) => demo.id === id);
}
