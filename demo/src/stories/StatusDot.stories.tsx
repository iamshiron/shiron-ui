import { StatusDot } from "@shiron/ui/components/ui/status-dot";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data display/Status dot",
	component: StatusDot,
	tags: ["autodocs"],
	argTypes: {
		status: {
			control: "select",
			options: ["online", "away", "busy", "offline"],
		},
		pulse: { control: "boolean" },
	},
	args: { status: "online", pulse: true },
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div className="flex items-center gap-2">
			<StatusDot {...args} size="lg" />
			<span className="text-sm capitalize">{args.status}</span>
		</div>
	),
};
