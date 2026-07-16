import { GlassPanel } from "@shiron/ui/components/ui/glass-panel";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Feedback & layout/Glass panel",
	component: GlassPanel,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "default", "lg"],
		},
		glow: { control: "boolean" },
	},
	args: { size: "default", glow: true },
	render: (args) => (
		<GlassPanel {...args} className="max-w-xs">
			<p className="text-sm font-medium">Now playing</p>
			<p className="text-xs text-muted-foreground">
				Frosted glass with a soft glow.
			</p>
		</GlassPanel>
	),
} satisfies Meta<typeof GlassPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
