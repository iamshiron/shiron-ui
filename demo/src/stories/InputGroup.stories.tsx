import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@shiron/ui/components/ui/input-group";
import { MagnifierLinearIcon } from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Input group",
	component: InputGroup,
	tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => (
		<div className="w-72">
			<InputGroup>
				<InputGroupAddon>
					<MagnifierLinearIcon />
				</InputGroupAddon>
				<InputGroupInput placeholder="Search..." />
			</InputGroup>
		</div>
	),
};
