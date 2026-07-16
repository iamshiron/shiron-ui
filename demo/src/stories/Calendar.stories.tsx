import { Calendar } from "@shiron/ui/components/ui/calendar";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Forms & inputs/Calendar",
	component: Calendar,
	tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => <Calendar mode="single" className="rounded-md border" />,
};

export const MultipleMonths: Story = {
	render: () => (
		<Calendar mode="single" numberOfMonths={2} className="rounded-md border" />
	),
};
