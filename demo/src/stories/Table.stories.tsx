import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@shiron/ui/components/ui/table";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data display/Table",
	component: Table,
	tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="w-full max-w-md">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Role</TableHead>
						<TableHead className="text-right">Score</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>Aoi</TableCell>
						<TableCell>Admin</TableCell>
						<TableCell className="text-right">98</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Ren</TableCell>
						<TableCell>Editor</TableCell>
						<TableCell className="text-right">72</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Yuki</TableCell>
						<TableCell>Viewer</TableCell>
						<TableCell className="text-right">45</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	),
};
