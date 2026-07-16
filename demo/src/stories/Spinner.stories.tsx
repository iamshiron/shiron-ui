import { Spinner } from "@shiron/ui/components/ui/spinner";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Feedback & layout/Spinner",
	component: Spinner,
	tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Spinner />
			<Spinner className="size-6" />
			<Spinner className="size-8 text-primary" />
		</div>
	),
};
