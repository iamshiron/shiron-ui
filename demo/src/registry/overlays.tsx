import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@shiron/ui/components/ui/alert-dialog";
import { Button } from "@shiron/ui/components/ui/button";
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
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuTrigger,
} from "@shiron/ui/components/ui/context-menu";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@shiron/ui/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@shiron/ui/components/ui/drawer";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@shiron/ui/components/ui/dropdown-menu";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@shiron/ui/components/ui/hover-card";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@shiron/ui/components/ui/menubar";
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from "@shiron/ui/components/ui/popover";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@shiron/ui/components/ui/sheet";
import { Toaster } from "@shiron/ui/components/ui/sonner";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@shiron/ui/components/ui/tooltip";
import {
	CalendarLinearIcon,
	CopyLinearIcon,
	LogoutLinearIcon,
	ScissorsLinearIcon,
	SettingsLinearIcon,
	TrashBinMinimalisticLinearIcon,
	UserCircleLinearIcon,
} from "@solar-icons/react";
import { toast } from "sonner";
import type { DemoGroup } from "./types";

export const overlaysGroup: DemoGroup = {
	name: "Overlays & menus",
	demos: [
		{
			id: "dialog",
			name: "Dialog",
			description: "A modal window overlaid on the page.",
			render: () => (
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">Edit profile</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you're done.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter showCloseButton>
							<Button>Save changes</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			),
			code: () => `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter showCloseButton>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
		},
		{
			id: "alert-dialog",
			name: "Alert dialog",
			description: "A modal that interrupts to confirm a critical action.",
			render: () => (
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant="destructive">Delete account</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction variant="destructive">
								Delete
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			),
			code: () => `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
		},
		{
			id: "drawer",
			name: "Drawer",
			description: "A panel that slides in from the edge of the screen.",
			render: () => (
				<Drawer>
					<DrawerTrigger asChild>
						<Button variant="outline">Open drawer</Button>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>Move goal</DrawerTitle>
							<DrawerDescription>
								Set your daily activity goal.
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<Button>Submit</Button>
							<DrawerClose asChild>
								<Button variant="outline">Cancel</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			),
			code: () => `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Move goal</DrawerTitle>
      <DrawerDescription>Set your daily activity goal.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
		},
		{
			id: "sheet",
			name: "Sheet",
			description: "A side panel for supplementary content or forms.",
			render: () => (
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline">Open sheet</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Edit profile</SheetTitle>
							<SheetDescription>
								Make changes to your profile here. Click save when you're done.
							</SheetDescription>
						</SheetHeader>
						<SheetFooter>
							<Button>Save changes</Button>
							<SheetClose asChild>
								<Button variant="outline">Cancel</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			),
			code: () => `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes to your profile here.</SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <Button>Save changes</Button>
      <SheetClose asChild>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
		},
		{
			id: "popover",
			name: "Popover",
			description: "Rich floating content anchored to a trigger.",
			render: () => (
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline">Open popover</Button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverHeader>
							<PopoverTitle>Dimensions</PopoverTitle>
							<PopoverDescription>
								Set the dimensions for the layer.
							</PopoverDescription>
						</PopoverHeader>
					</PopoverContent>
				</Popover>
			),
			code: () => `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Dimensions</PopoverTitle>
      <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`,
		},
		{
			id: "hover-card",
			name: "Hover card",
			description: "A preview card revealed on hover.",
			render: () => (
				<HoverCard>
					<HoverCardTrigger asChild>
						<Button variant="link">@shiron</Button>
					</HoverCardTrigger>
					<HoverCardContent>
						The design system and component library, crafted and maintained by
						@shiron.
					</HoverCardContent>
				</HoverCard>
			),
			code: () => `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@shiron</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    The design system and component library, maintained by @shiron.
  </HoverCardContent>
</HoverCard>`,
		},
		{
			id: "tooltip",
			name: "Tooltip",
			description: "A short label shown on hover or focus.",
			render: () => (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="outline">Hover me</Button>
						</TooltipTrigger>
						<TooltipContent>Add to library</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			),
			code: () => `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>Add to library</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
		},
		{
			id: "dropdown-menu",
			name: "Dropdown menu",
			description: "A menu of actions triggered by a button.",
			render: () => (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">Open menu</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<UserCircleLinearIcon />
								Profile
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<SettingsLinearIcon />
								Settings
								<DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem variant="destructive">
							<LogoutLinearIcon />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			),
			code: () => `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <UserCircleLinearIcon />
      Profile
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <SettingsLinearIcon />
      Settings
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <LogoutLinearIcon />
      Log out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
		},
		{
			id: "context-menu",
			name: "Context menu",
			description: "A menu revealed by right-clicking a surface.",
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
			code: () => `<ContextMenu>
  <ContextMenuTrigger className="flex h-24 items-center justify-center rounded-md border border-dashed">
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
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">
      <TrashBinMinimalisticLinearIcon />
      Delete
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
		},
		{
			id: "menubar",
			name: "Menubar",
			description: "A horizontal bar of application menus.",
			render: () => (
				<Menubar>
					<MenubarMenu>
						<MenubarTrigger>File</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								New tab
								<MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>New window</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Share</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>Edit</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								Undo
								<MenubarShortcut>⌘Z</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>Redo</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>
			),
			code: () => `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New tab
        <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
		},
		{
			id: "command",
			name: "Command",
			description: "A searchable command palette list.",
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
			code: () => `<Command className="w-full max-w-sm">
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
    </CommandGroup>
  </CommandList>
</Command>`,
		},
		{
			id: "sonner",
			name: "Sonner",
			description: "Stacked toast notifications.",
			render: () => (
				<>
					<Button
						variant="outline"
						onClick={() =>
							toast("Event has been created", {
								description: "Sunday, December 03, 2023 at 9:00 AM",
							})
						}
					>
						Show toast
					</Button>
					<Toaster />
				</>
			),
			code: () => `<Button
  variant="outline"
  onClick={() =>
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    })
  }
>
  Show toast
</Button>
<Toaster />`,
		},
	],
};
