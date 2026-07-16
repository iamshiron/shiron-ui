import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@shiron/ui/components/ui/item";
import { FolderLinearIcon } from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Feedback & layout/Item",
	component: Item,
	tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Item variant="outline" className="max-w-md">
			<ItemMedia variant="icon">
				<FolderLinearIcon />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Project files</ItemTitle>
				<ItemDescription>24 documents, updated 3 hours ago.</ItemDescription>
			</ItemContent>
		</Item>
	),
};
