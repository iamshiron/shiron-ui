import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@shiron/ui/components/ui/accordion";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@shiron/ui/components/ui/breadcrumb";
import { Button } from "@shiron/ui/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@shiron/ui/components/ui/collapsible";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@shiron/ui/components/ui/navigation-menu";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@shiron/ui/components/ui/pagination";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@shiron/ui/components/ui/tabs";
import {
	AltArrowDownLinearIcon,
	BookLinearIcon,
	PaletteLinearIcon,
	RocketLinearIcon,
	WidgetLinearIcon,
} from "@solar-icons/react";
import type { DemoGroup } from "./types";

export const navigationGroup: DemoGroup = {
	name: "Navigation & disclosure",
	demos: [
		{
			id: "tabs",
			name: "Tabs",
			description: "Switch between views within the same context.",
			variants: [
				{ key: "default", label: "Default" },
				{ key: "line", label: "Line" },
			],
			render: (v) => (
				<Tabs defaultValue="overview" className="w-full max-w-md">
					<TabsList variant={v as "default" | "line"}>
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="activity">Activity</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
					</TabsList>
					<TabsContent value="overview">
						A quick summary of everything that matters.
					</TabsContent>
					<TabsContent value="activity">Your recent activity feed.</TabsContent>
					<TabsContent value="settings">
						Tune your preferences here.
					</TabsContent>
				</Tabs>
			),
			code: (v) => `<Tabs defaultValue="overview">
  <TabsList variant="${v}">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="activity">Activity</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">A quick summary.</TabsContent>
  <TabsContent value="activity">Your recent activity feed.</TabsContent>
  <TabsContent value="settings">Tune your preferences here.</TabsContent>
</Tabs>`,
		},
		{
			id: "accordion",
			name: "Accordion",
			description: "Vertically stacked, collapsible disclosure panels.",
			render: () => (
				<Accordion
					type="single"
					collapsible
					defaultValue="item-1"
					className="w-full max-w-md"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It follows the WAI-ARIA disclosure pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Is it animated?</AccordionTrigger>
						<AccordionContent>
							Yes. Panels expand and collapse with a smooth transition.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Can I customise it?</AccordionTrigger>
						<AccordionContent>
							Absolutely. Every part accepts a className.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			),
			code: () => `<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It follows the WAI-ARIA pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>Yes. Panels transition smoothly.</AccordionContent>
  </AccordionItem>
</Accordion>`,
		},
		{
			id: "collapsible",
			name: "Collapsible",
			description: "Toggle the visibility of a single content region.",
			render: () => (
				<Collapsible defaultOpen className="w-full max-w-md space-y-2">
					<CollapsibleTrigger asChild>
						<Button variant="outline" className="w-full justify-between">
							Recent updates
							<AltArrowDownLinearIcon />
						</Button>
					</CollapsibleTrigger>
					<CollapsibleContent className="space-y-2 text-xs/relaxed text-muted-foreground">
						<div className="rounded-md border p-2">Shipped a new theme.</div>
						<div className="rounded-md border p-2">Fixed a layout bug.</div>
					</CollapsibleContent>
				</Collapsible>
			),
			code: () => `<Collapsible defaultOpen>
  <CollapsibleTrigger asChild>
    <Button variant="outline">
      Recent updates
      <AltArrowDownLinearIcon />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="rounded-md border p-2">Shipped a new theme.</div>
    <div className="rounded-md border p-2">Fixed a layout bug.</div>
  </CollapsibleContent>
</Collapsible>`,
		},
		{
			id: "breadcrumb",
			name: "Breadcrumb",
			description: "Shows the current location within a hierarchy.",
			render: () => (
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Components</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			),
			code: () => `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
		},
		{
			id: "pagination",
			name: "Pagination",
			description: "Navigate between pages of content.",
			render: () => (
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#" isActive>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			),
			code: () => `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
		},
		{
			id: "navigation-menu",
			name: "Navigation menu",
			description: "A responsive menu with expandable sections.",
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
			code: () => `<NavigationMenu>
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
  </NavigationMenuList>
</NavigationMenu>`,
		},
	],
};
