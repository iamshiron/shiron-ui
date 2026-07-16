import { Button } from "@shiron/ui/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@shiron/ui/components/ui/collapsible";
import { AltArrowDownLinearIcon } from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Navigation & disclosure/Collapsible",
	component: Collapsible,
	tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Collapsible defaultOpen className="w-full max-w-md space-y-2">
			<CollapsibleTrigger asChild>
				<Button variant="outline" className="w-full justify-between">
					Recent updates
					<AltArrowDownLinearIcon />
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent className="space-y-2 text-xs/relaxed text-muted-foreground">
				<div className="rounded-md border p-2">Shipped a new theme.</div>
				<div className="rounded-md border p-2">Fixed a layout bug.</div>
			</CollapsibleContent>
		</Collapsible>
	),
};

export const Closed: Story = {
	render: () => (
		<Collapsible className="w-full max-w-md space-y-2">
			<CollapsibleTrigger asChild>
				<Button variant="outline" className="w-full justify-between">
					Recent updates
					<AltArrowDownLinearIcon />
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent className="space-y-2 text-xs/relaxed text-muted-foreground">
				<div className="rounded-md border p-2">Shipped a new theme.</div>
				<div className="rounded-md border p-2">Fixed a layout bug.</div>
			</CollapsibleContent>
		</Collapsible>
	),
};
