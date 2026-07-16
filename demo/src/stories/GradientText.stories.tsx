import { GradientText } from "@shiron/ui/components/ui/gradient-text";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Feedback & layout/Gradient text",
	component: GradientText,
	tags: ["autodocs"],
} satisfies Meta<typeof GradientText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<GradientText className="text-4xl font-semibold">Honami</GradientText>
	),
};
