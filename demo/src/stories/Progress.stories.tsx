import { Progress } from "@shiron/ui/components/ui/progress";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data display/Progress",
	component: Progress,
	tags: ["autodocs"],
	argTypes: {
		value: { control: { type: "range", min: 0, max: 100 } },
	},
	args: { value: 62 },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Progress {...args} />
		</div>
	),
};
