import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
} from "@shiron/ui/components/ui/avatar";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data display/Avatar",
	component: Avatar,
	tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex items-center gap-6">
			<Avatar size="lg">
				<AvatarFallback>AO</AvatarFallback>
			</Avatar>
			<AvatarGroup>
				<Avatar>
					<AvatarFallback>AO</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarFallback>RN</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarFallback>YK</AvatarFallback>
				</Avatar>
				<AvatarGroupCount>+3</AvatarGroupCount>
			</AvatarGroup>
		</div>
	),
};
