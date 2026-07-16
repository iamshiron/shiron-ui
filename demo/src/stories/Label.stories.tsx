import { Input } from "@shiron/ui/components/ui/input";
import { Label } from "@shiron/ui/components/ui/label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Label",
	component: Label,
	tags: ["autodocs"],
	argTypes: {
		children: { control: "text" },
	},
	args: {
		children: "Email",
	},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithInput: Story = {
	render: (args) => (
		<div className="grid w-72 gap-2">
			<Label htmlFor="email" {...args} />
			<Input id="email" type="email" placeholder="you@example.com" />
		</div>
	),
};
