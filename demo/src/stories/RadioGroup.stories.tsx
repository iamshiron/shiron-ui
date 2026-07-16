import { Label } from "@shiron/ui/components/ui/label";
import {
	RadioGroup,
	RadioGroupItem,
} from "@shiron/ui/components/ui/radio-group";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Radio group",
	component: RadioGroup,
	tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => (
		<RadioGroup defaultValue="comfortable" className="max-w-sm">
			<div className="flex items-center gap-2">
				<RadioGroupItem value="default" id="r1" />
				<Label htmlFor="r1">Default</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem value="comfortable" id="r2" />
				<Label htmlFor="r2">Comfortable</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem value="compact" id="r3" />
				<Label htmlFor="r3">Compact</Label>
			</div>
		</RadioGroup>
	),
};

export const Disabled: Story = {
	render: () => (
		<RadioGroup defaultValue="comfortable" disabled className="max-w-sm">
			<div className="flex items-center gap-2">
				<RadioGroupItem value="default" id="rd1" />
				<Label htmlFor="rd1">Default</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem value="comfortable" id="rd2" />
				<Label htmlFor="rd2">Comfortable</Label>
			</div>
		</RadioGroup>
	),
};
