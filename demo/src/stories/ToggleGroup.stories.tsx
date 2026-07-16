import {
	ToggleGroup,
	ToggleGroupItem,
} from "@shiron/ui/components/ui/toggle-group";
import {
	TextBoldLinearIcon,
	TextItalicLinearIcon,
	TextUnderlineLinearIcon,
} from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Buttons & actions/Toggle group",
	component: ToggleGroup,
	tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
	args: { type: "multiple" },
	render: () => (
		<ToggleGroup type="multiple" defaultValue={["bold"]}>
			<ToggleGroupItem value="bold" aria-label="Bold">
				<TextBoldLinearIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Italic">
				<TextItalicLinearIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Underline">
				<TextUnderlineLinearIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	),
};

export const Single: Story = {
	args: { type: "single" },
	render: () => (
		<ToggleGroup type="single" defaultValue="italic">
			<ToggleGroupItem value="bold" aria-label="Bold">
				<TextBoldLinearIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Italic">
				<TextItalicLinearIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Underline">
				<TextUnderlineLinearIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	),
};
