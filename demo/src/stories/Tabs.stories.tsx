import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@shiron/ui/components/ui/tabs";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Navigation & disclosure/Tabs",
	component: Tabs,
	tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-full max-w-md">
			<TabsList variant="default">
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="activity">Activity</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				A quick summary of everything that matters.
			</TabsContent>
			<TabsContent value="activity">Your recent activity feed.</TabsContent>
			<TabsContent value="settings">Tune your preferences here.</TabsContent>
		</Tabs>
	),
};

export const Line: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-full max-w-md">
			<TabsList variant="line">
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="activity">Activity</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				A quick summary of everything that matters.
			</TabsContent>
			<TabsContent value="activity">Your recent activity feed.</TabsContent>
			<TabsContent value="settings">Tune your preferences here.</TabsContent>
		</Tabs>
	),
};
