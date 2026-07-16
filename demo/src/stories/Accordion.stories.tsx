import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@shiron/ui/components/ui/accordion";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Navigation & disclosure/Accordion",
	component: Accordion,
	tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { type: "single" },
	render: () => (
		<Accordion
			type="single"
			collapsible
			defaultValue="item-1"
			className="w-full max-w-md"
		>
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It follows the WAI-ARIA disclosure pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. Panels expand and collapse with a smooth transition.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Can I customise it?</AccordionTrigger>
				<AccordionContent>
					Absolutely. Every part accepts a className.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const Multiple: Story = {
	args: { type: "multiple" },
	render: () => (
		<Accordion type="multiple" className="w-full max-w-md">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It follows the WAI-ARIA disclosure pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. Panels expand and collapse with a smooth transition.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Can I customise it?</AccordionTrigger>
				<AccordionContent>
					Absolutely. Every part accepts a className.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};
