import { Toggle } from "@shiron/ui/components/ui/toggle";
import { TextBoldLinearIcon } from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Buttons & actions/Toggle",
	component: Toggle,
	tags: ["autodocs"],
	argTypes: {
		variant: { control: "select", options: ["default", "outline"] },
		size: { control: "select", options: ["default", "sm", "lg"] },
		disabled: { control: "boolean" },
	},
	args: { variant: "default", size: "default" },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: (args) => (
		<Toggle {...args} aria-label="Toggle bold">
			<TextBoldLinearIcon />
		</Toggle>
	),
};

export const WithText: Story = {
	render: (args) => <Toggle {...args}>Bold</Toggle>,
};
