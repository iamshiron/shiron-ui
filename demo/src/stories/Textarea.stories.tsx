import { Label } from "@shiron/ui/components/ui/label";
import { Textarea } from "@shiron/ui/components/ui/textarea";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	argTypes: {
		placeholder: { control: "text" },
		disabled: { control: "boolean" },
		rows: { control: "number" },
	},
	args: {
		placeholder: "Type your message here...",
		disabled: false,
	},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: (args) => (
		<div className="w-72">
			<Textarea {...args} />
		</div>
	),
};

export const Disabled: Story = {
	args: { disabled: true },
	render: (args) => (
		<div className="w-72">
			<Textarea {...args} />
		</div>
	),
};

export const WithLabel: Story = {
	render: (args) => (
		<div className="grid w-72 gap-2">
			<Label htmlFor="message">Your message</Label>
			<Textarea id="message" {...args} />
		</div>
	),
};
