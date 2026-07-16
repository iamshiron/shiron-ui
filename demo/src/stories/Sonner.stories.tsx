import { Button } from "@shiron/ui/components/ui/button";
import { Toaster } from "@shiron/ui/components/ui/sonner";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";

const meta = {
	title: "Overlays & menus/Sonner",
	component: Toaster,
	tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<>
			<Button
				variant="outline"
				onClick={() =>
					toast("Event has been created", {
						description: "Sunday, December 03, 2023 at 9:00 AM",
					})
				}
			>
				Show toast
			</Button>
			<Toaster />
		</>
	),
};
