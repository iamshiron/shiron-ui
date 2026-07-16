import { ScrollArea } from "@shiron/ui/components/ui/scroll-area";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Feedback & layout/Scroll area",
	component: ScrollArea,
	tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ScrollArea className="h-48 w-full max-w-md rounded-lg border p-4">
			<div className="flex flex-col gap-2">
				{Array.from({ length: 20 }, (_, i) => `Row ${i + 1}`).map((label) => (
					<div key={label} className="text-sm">
						{label}
					</div>
				))}
			</div>
		</ScrollArea>
	),
};
