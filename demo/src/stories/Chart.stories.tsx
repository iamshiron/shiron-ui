import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@shiron/ui/components/ui/chart";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
	{ month: "Jan", visitors: 186 },
	{ month: "Feb", visitors: 305 },
	{ month: "Mar", visitors: 237 },
	{ month: "Apr", visitors: 273 },
	{ month: "May", visitors: 209 },
	{ month: "Jun", visitors: 314 },
];

const chartConfig = {
	visitors: {
		label: "Visitors",
		color: "var(--honami-accent)",
	},
} satisfies ChartConfig;

const meta = {
	title: "Data display/Chart",
	component: ChartContainer,
	tags: ["autodocs"],
	args: {
		config: chartConfig,
		className: "h-56 w-full max-w-md",
		children: (
			<BarChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				<Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
			</BarChart>
		),
	},
} satisfies Meta<typeof ChartContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
