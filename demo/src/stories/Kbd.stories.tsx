import { Kbd, KbdGroup } from "@shiron/ui/components/ui/kbd";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Buttons & actions/Kbd",
	component: Kbd,
	tags: ["autodocs"],
	args: { children: "K" },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Combination: Story = {
	render: () => (
		<KbdGroup>
			<Kbd>⌘</Kbd>
			<Kbd>K</Kbd>
		</KbdGroup>
	),
};
