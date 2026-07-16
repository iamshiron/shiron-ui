import { Label } from "@shiron/ui/components/ui/label";
import { Switch } from "@shiron/ui/components/ui/switch";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Switch",
	component: Switch,
	tags: ["autodocs"],
	argTypes: {
		checked: { control: "boolean" },
		disabled: { control: "boolean" },
	},
	args: {
		disabled: false,
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: (args) => (
		<div className="flex items-center gap-2">
			<Switch id="airplane" defaultChecked {...args} />
			<Label htmlFor="airplane">Airplane mode</Label>
		</div>
	),
};

export const Disabled: Story = {
	args: { disabled: true },
	render: (args) => (
		<div className="flex items-center gap-2">
			<Switch id="airplane-disabled" defaultChecked {...args} />
			<Label htmlFor="airplane-disabled">Airplane mode</Label>
		</div>
	),
};
