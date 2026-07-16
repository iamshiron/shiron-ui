import { Button } from "@shiron/ui/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@shiron/ui/components/ui/hover-card";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Overlays & menus/Hover card",
	component: HoverCard,
	tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="link">@shiron</Button>
			</HoverCardTrigger>
			<HoverCardContent>
				The design system and component library, crafted and maintained by
				@shiron.
			</HoverCardContent>
		</HoverCard>
	),
};
