import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@shiron/ui/components/ui/navigation-menu";
import {
	BookLinearIcon,
	PaletteLinearIcon,
	RocketLinearIcon,
	WidgetLinearIcon,
} from "@solar-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Navigation & disclosure/Navigation menu",
	component: NavigationMenu,
	tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-56 gap-1">
							<li>
								<NavigationMenuLink href="#">
									<RocketLinearIcon />
									Introduction
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink href="#">
									<BookLinearIcon />
									Installation
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-56 gap-1">
							<li>
								<NavigationMenuLink href="#">
									<WidgetLinearIcon />
									Overview
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink href="#">
									<PaletteLinearIcon />
									Theming
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};
