import { Button } from "@shiron/ui/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Buttons & actions/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"secondary",
				"outline",
				"ghost",
				"destructive",
				"link",
			],
		},
		size: {
			control: "select",
			options: ["default", "xs", "sm", "lg", "icon"],
		},
		disabled: { control: "boolean" },
	},
	args: { children: "Button", variant: "default", size: "default" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
	render: (args) => (
		<div className="flex flex-wrap items-center gap-2">
			<Button {...args} variant="default">
				Default
			</Button>
			<Button {...args} variant="secondary">
				Secondary
			</Button>
			<Button {...args} variant="outline">
				Outline
			</Button>
			<Button {...args} variant="ghost">
				Ghost
			</Button>
			<Button {...args} variant="destructive">
				Destructive
			</Button>
			<Button {...args} variant="link">
				Link
			</Button>
		</div>
	),
};

export const Sizes: Story = {
	render: (args) => (
		<div className="flex flex-wrap items-center gap-2">
			<Button {...args} size="xs">
				Extra small
			</Button>
			<Button {...args} size="sm">
				Small
			</Button>
			<Button {...args} size="default">
				Default
			</Button>
			<Button {...args} size="lg">
				Large
			</Button>
		</div>
	),
};
