import { AspectRatio } from "@shiron/ui/components/ui/aspect-ratio";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data display/Aspect ratio",
	component: AspectRatio,
	tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="w-full max-w-sm">
			<AspectRatio ratio={16 / 9}>
				<div className="flex size-full items-center justify-center rounded-lg honami-grad text-sm font-medium text-primary-foreground">
					16 / 9
				</div>
			</AspectRatio>
		</div>
	),
};
