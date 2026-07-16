import { Button } from "@shiron/ui/components/ui/button";
import {
	ButtonGroup,
	ButtonGroupSeparator,
} from "@shiron/ui/components/ui/button-group";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Buttons & actions/Button group",
	component: ButtonGroup,
	tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ButtonGroup>
			<Button variant="outline">Copy</Button>
			<Button variant="outline">Paste</Button>
			<ButtonGroupSeparator />
			<Button variant="outline">Delete</Button>
		</ButtonGroup>
	),
};
