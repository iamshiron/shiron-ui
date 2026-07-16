import { Slider } from "@shiron/ui/components/ui/slider";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Slider",
	component: Slider,
	tags: ["autodocs"],
	argTypes: {
		max: { control: "number" },
		step: { control: "number" },
		disabled: { control: "boolean" },
	},
	args: {
		max: 100,
		step: 1,
		disabled: false,
	},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: (args) => (
		<div className="w-72">
			<Slider defaultValue={[50]} {...args} />
		</div>
	),
};

export const Range: Story = {
	render: (args) => (
		<div className="w-72">
			<Slider defaultValue={[25, 75]} {...args} />
		</div>
	),
};

export const Disabled: Story = {
	args: { disabled: true },
	render: (args) => (
		<div className="w-72">
			<Slider defaultValue={[50]} {...args} />
		</div>
	),
};
