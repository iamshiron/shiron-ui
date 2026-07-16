import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandShortcut,
} from "@shiron/ui/components/ui/command";
import {
	CalendarLinearIcon,
	SettingsLinearIcon,
	UserCircleLinearIcon,
} from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Overlays & menus/Command",
	component: Command,
	tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Command className="w-full max-w-sm border ring-1 ring-foreground/10">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<CalendarLinearIcon />
						Calendar
					</CommandItem>
					<CommandItem>
						<UserCircleLinearIcon />
						Profile
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<SettingsLinearIcon />
						Settings
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
};
