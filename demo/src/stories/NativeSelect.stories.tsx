import {
	NativeSelect,
	NativeSelectOption,
} from "@shiron/ui/components/ui/native-select";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Native select",
	component: NativeSelect,
	tags: ["autodocs"],
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => (
		<div className="w-72">
			<NativeSelect defaultValue="apple">
				<NativeSelectOption value="apple">Apple</NativeSelectOption>
				<NativeSelectOption value="banana">Banana</NativeSelectOption>
				<NativeSelectOption value="orange">Orange</NativeSelectOption>
			</NativeSelect>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="w-72">
			<NativeSelect defaultValue="apple" disabled>
				<NativeSelectOption value="apple">Apple</NativeSelectOption>
				<NativeSelectOption value="banana">Banana</NativeSelectOption>
				<NativeSelectOption value="orange">Orange</NativeSelectOption>
			</NativeSelect>
		</div>
	),
};
