import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@shiron/ui/components/ui/card";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data display/Card",
	component: Card,
	tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Weekly report</CardTitle>
				<CardDescription>Your activity for the past 7 days.</CardDescription>
			</CardHeader>
			<CardContent>
				Traffic is up 12% compared to last week, with a steady rise in returning
				visitors.
			</CardContent>
			<CardFooter className="text-muted-foreground">
				Updated 2 hours ago
			</CardFooter>
		</Card>
	),
};
