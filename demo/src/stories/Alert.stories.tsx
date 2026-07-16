import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@shiron/ui/components/ui/alert";
import {
	DangerTriangleLinearIcon,
	InfoCircleLinearIcon,
} from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Feedback & layout/Alert",
	component: Alert,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "destructive"],
		},
	},
	args: { variant: "default" },
	render: (args) => (
		<Alert {...args} className="max-w-md">
			{args.variant === "destructive" ? (
				<DangerTriangleLinearIcon />
			) : (
				<InfoCircleLinearIcon />
			)}
			<AlertTitle>
				{args.variant === "destructive" ? "Something went wrong" : "Heads up"}
			</AlertTitle>
			<AlertDescription>
				{args.variant === "destructive"
					? "Your changes could not be saved. Please try again."
					: "This action will sync your workspace with the server."}
			</AlertDescription>
		</Alert>
	),
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
