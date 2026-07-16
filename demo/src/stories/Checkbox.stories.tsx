import { Checkbox } from "@shiron/ui/components/ui/checkbox";
import { Label } from "@shiron/ui/components/ui/label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	argTypes: {
		checked: { control: "boolean" },
		disabled: { control: "boolean" },
	},
	args: {
		disabled: false,
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: (args) => (
		<div className="flex items-center gap-2">
			<Checkbox id="terms" defaultChecked {...args} />
			<Label htmlFor="terms">Accept terms and conditions</Label>
		</div>
	),
};

export const Disabled: Story = {
	args: { disabled: true },
	render: (args) => (
		<div className="flex items-center gap-2">
			<Checkbox id="terms-disabled" defaultChecked {...args} />
			<Label htmlFor="terms-disabled">Accept terms and conditions</Label>
		</div>
	),
};
