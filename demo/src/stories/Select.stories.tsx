import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@shiron/ui/components/ui/select";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Select",
	component: Select,
	tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => (
		<div className="w-72">
			<Select defaultValue="apple">
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="orange">Orange</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="w-72">
			<Select disabled defaultValue="apple">
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
				</SelectContent>
			</Select>
		</div>
	),
};
