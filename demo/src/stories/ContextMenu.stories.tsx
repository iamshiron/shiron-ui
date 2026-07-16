import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuTrigger,
} from "@shiron/ui/components/ui/context-menu";
import {
	CopyLinearIcon,
	ScissorsLinearIcon,
	TrashBinMinimalisticLinearIcon,
} from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Overlays & menus/Context menu",
	component: ContextMenu,
	tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed text-xs text-muted-foreground">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem>
					<CopyLinearIcon />
					Copy
					<ContextMenuShortcut>⌘C</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					<ScissorsLinearIcon />
					Cut
					<ContextMenuShortcut>⌘X</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">
					<TrashBinMinimalisticLinearIcon />
					Delete
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
};
