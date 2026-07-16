import {
	Stat,
	StatDelta,
	StatLabel,
	StatValue,
} from "@shiron/ui/components/ui/stat";
import {
	AltArrowDownLinearIcon,
	AltArrowUpLinearIcon,
} from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data display/Stat",
	component: Stat,
	tags: ["autodocs"],
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex gap-10">
			<Stat>
				<StatLabel>Revenue</StatLabel>
				<StatValue>$12.4k</StatValue>
				<StatDelta trend="up">
					<AltArrowUpLinearIcon />
					8.2%
				</StatDelta>
			</Stat>
			<Stat>
				<StatLabel>Churn</StatLabel>
				<StatValue>2.1%</StatValue>
				<StatDelta trend="down">
					<AltArrowDownLinearIcon />
					0.4%
				</StatDelta>
			</Stat>
		</div>
	),
};
