import {
	Field,
	FieldDescription,
	FieldLabel,
} from "@shiron/ui/components/ui/field";
import { Input } from "@shiron/ui/components/ui/input";
import { Textarea } from "@shiron/ui/components/ui/textarea";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Field",
	component: Field,
	tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => (
		<div className="w-72">
			<Field>
				<FieldLabel htmlFor="username">Username</FieldLabel>
				<Input id="username" placeholder="shiron" />
				<FieldDescription>This is your public display name.</FieldDescription>
			</Field>
		</div>
	),
};

export const WithTextarea: Story = {
	render: () => (
		<div className="w-72">
			<Field>
				<FieldLabel htmlFor="bio">Bio</FieldLabel>
				<Textarea id="bio" placeholder="Tell us about yourself..." />
				<FieldDescription>
					A short description shown on your profile.
				</FieldDescription>
			</Field>
		</div>
	),
};
