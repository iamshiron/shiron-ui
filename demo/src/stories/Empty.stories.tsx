import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@shiron/ui/components/ui/empty";
import { InboxLinearIcon } from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Feedback & layout/Empty",
	component: Empty,
	tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Empty className="max-w-md border">
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<InboxLinearIcon />
				</EmptyMedia>
				<EmptyTitle>No messages yet</EmptyTitle>
				<EmptyDescription>
					When you receive messages they will show up right here.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>Check back later for updates.</EmptyContent>
		</Empty>
	),
};
