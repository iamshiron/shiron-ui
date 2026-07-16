import { Input } from "@shiron/ui/components/ui/input";
import { Label } from "@shiron/ui/components/ui/label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Input",
	component: Input,
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["text", "email", "password", "number", "search", "tel", "url"],
		},
		placeholder: { control: "text" },
		disabled: { control: "boolean" },
	},
	args: {
		type: "email",
		placeholder: "you@example.com",
		disabled: false,
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: (args) => (
		<div className="w-72">
			<Input {...args} />
		</div>
	),
};

export const Disabled: Story = {
	args: { disabled: true },
	render: (args) => (
		<div className="w-72">
			<Input {...args} />
		</div>
	),
};

export const Invalid: Story = {
	render: (args) => (
		<div className="w-72">
			<Input {...args} aria-invalid />
		</div>
	),
};

export const WithLabel: Story = {
	render: (args) => (
		<div className="grid w-72 gap-2">
			<Label htmlFor="email">Email</Label>
			<Input id="email" {...args} />
		</div>
	),
};
