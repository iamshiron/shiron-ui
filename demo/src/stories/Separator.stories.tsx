import { Separator } from "@shiron/ui/components/ui/separator";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Feedback & layout/Separator",
	component: Separator,
	tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="w-full max-w-md">
			<p className="text-sm">Above the divider</p>
			<Separator className="my-3" />
			<p className="text-sm text-muted-foreground">Below the divider</p>
		</div>
	),
};
