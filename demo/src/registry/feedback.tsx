import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@shiron/ui/components/ui/alert";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@shiron/ui/components/ui/empty";
import { GlassPanel } from "@shiron/ui/components/ui/glass-panel";
import { GradientText } from "@shiron/ui/components/ui/gradient-text";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@shiron/ui/components/ui/item";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@shiron/ui/components/ui/resizable";
import { ScrollArea } from "@shiron/ui/components/ui/scroll-area";
import { Separator } from "@shiron/ui/components/ui/separator";
import { Skeleton } from "@shiron/ui/components/ui/skeleton";
import { Spinner } from "@shiron/ui/components/ui/spinner";
import {
	DangerTriangleLinearIcon,
	FolderLinearIcon,
	InboxLinearIcon,
	InfoCircleLinearIcon,
} from "@solar-icons/react";
import type { DemoGroup } from "./types";

export const feedbackGroup: DemoGroup = {
	name: "Feedback & layout",
	demos: [
		{
			id: "alert",
			name: "Alert",
			description: "A callout with an icon, title and message.",
			variants: [
				{ key: "default", label: "Default" },
				{ key: "destructive", label: "Destructive" },
			],
			render: (v) => (
				<Alert variant={v as "default" | "destructive"} className="max-w-md">
					{v === "destructive" ? (
						<DangerTriangleLinearIcon />
					) : (
						<InfoCircleLinearIcon />
					)}
					<AlertTitle>
						{v === "destructive" ? "Something went wrong" : "Heads up"}
					</AlertTitle>
					<AlertDescription>
						{v === "destructive"
							? "Your changes could not be saved. Please try again."
							: "This action will sync your workspace with the server."}
					</AlertDescription>
				</Alert>
			),
			code: (v) => `<Alert variant="${v}">
  <${v === "destructive" ? "DangerTriangleLinearIcon" : "InfoCircleLinearIcon"} />
  <AlertTitle>${v === "destructive" ? "Something went wrong" : "Heads up"}</AlertTitle>
  <AlertDescription>A short supporting message.</AlertDescription>
</Alert>`,
		},
		{
			id: "skeleton",
			name: "Skeleton",
			description: "A pulsing placeholder shown while content loads.",
			render: () => (
				<div className="flex w-full max-w-md items-center gap-4">
					<Skeleton className="size-12 rounded-full" />
					<div className="flex flex-1 flex-col gap-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-2/3" />
					</div>
				</div>
			),
			code: () => `<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="flex flex-1 flex-col gap-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>`,
		},
		{
			id: "spinner",
			name: "Spinner",
			description: "An animated loading indicator.",
			render: () => (
				<div className="flex items-center gap-4">
					<Spinner />
					<Spinner className="size-6" />
					<Spinner className="size-8 text-primary" />
				</div>
			),
			code: () => `<div className="flex items-center gap-4">
  <Spinner />
  <Spinner className="size-6" />
  <Spinner className="size-8 text-primary" />
</div>`,
		},
		{
			id: "empty",
			name: "Empty",
			description: "A placeholder for empty states with icon and copy.",
			render: () => (
				<Empty className="max-w-md border">
					<EmptyHeader>
						<EmptyMedia variant="icon">
							<InboxLinearIcon />
						</EmptyMedia>
						<EmptyTitle>No messages yet</EmptyTitle>
						<EmptyDescription>
							When you receive messages they will show up right here.
						</EmptyDescription>
					</EmptyHeader>
					<EmptyContent>Check back later for updates.</EmptyContent>
				</Empty>
			),
			code: () => `<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <InboxLinearIcon />
    </EmptyMedia>
    <EmptyTitle>No messages yet</EmptyTitle>
    <EmptyDescription>When you receive messages they will show up here.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>Check back later for updates.</EmptyContent>
</Empty>`,
		},
		{
			id: "separator",
			name: "Separator",
			description: "A thin rule that divides content.",
			render: () => (
				<div className="w-full max-w-md">
					<p className="text-sm">Above the divider</p>
					<Separator className="my-3" />
					<p className="text-sm text-muted-foreground">Below the divider</p>
				</div>
			),
			code: () => `<div>
  <p>Above the divider</p>
  <Separator className="my-3" />
  <p>Below the divider</p>
</div>`,
		},
		{
			id: "scroll-area",
			name: "Scroll area",
			description: "A styled, fixed-height scrollable region.",
			render: () => (
				<ScrollArea className="h-48 w-full max-w-md rounded-lg border p-4">
					<div className="flex flex-col gap-2">
						{Array.from({ length: 20 }, (_, i) => (
							<div key={i} className="text-sm">
								Row {i + 1}
							</div>
						))}
					</div>
				</ScrollArea>
			),
			code: () => `<ScrollArea className="h-48 rounded-lg border p-4">
  <div className="flex flex-col gap-2">
    {rows.map((row) => (
      <div key={row}>{row}</div>
    ))}
  </div>
</ScrollArea>`,
		},
		{
			id: "resizable",
			name: "Resizable",
			description: "Draggable panels that split available space.",
			render: () => (
				<ResizablePanelGroup
					orientation="horizontal"
					className="h-40 max-w-md rounded-lg border"
				>
					<ResizablePanel defaultSize="50">
						<div className="flex h-full items-center justify-center p-4 text-sm">
							Left
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize="50">
						<div className="flex h-full items-center justify-center p-4 text-sm">
							Right
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			),
			code: () => `<ResizablePanelGroup
  orientation="horizontal"
  className="h-40 max-w-md rounded-lg border"
>
  <ResizablePanel defaultSize="50">Left</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize="50">Right</ResizablePanel>
</ResizablePanelGroup>`,
		},
		{
			id: "item",
			name: "Item",
			description: "A row with media, title and description.",
			render: () => (
				<Item variant="outline" className="max-w-md">
					<ItemMedia variant="icon">
						<FolderLinearIcon />
					</ItemMedia>
					<ItemContent>
						<ItemTitle>Project files</ItemTitle>
						<ItemDescription>
							24 documents, updated 3 hours ago.
						</ItemDescription>
					</ItemContent>
				</Item>
			),
			code: () => `<Item variant="outline">
  <ItemMedia variant="icon">
    <FolderLinearIcon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Project files</ItemTitle>
    <ItemDescription>24 documents, updated 3 hours ago.</ItemDescription>
  </ItemContent>
</Item>`,
		},
		{
			id: "glass-panel",
			name: "Glass panel",
			description: "A frosted-glass surface for floating elements.",
			variants: [
				{ key: "sm", label: "Small" },
				{ key: "default", label: "Default" },
				{ key: "lg", label: "Large" },
			],
			render: (v) => (
				<GlassPanel
					size={v as "sm" | "default" | "lg"}
					glow
					className="max-w-xs"
				>
					<p className="text-sm font-medium">Now playing</p>
					<p className="text-xs text-muted-foreground">
						Frosted glass with a soft glow.
					</p>
				</GlassPanel>
			),
			code: (v) => `<GlassPanel size="${v}" glow>
  <p>Now playing</p>
  <p>Frosted glass with a soft glow.</p>
</GlassPanel>`,
		},
		{
			id: "gradient-text",
			name: "Gradient text",
			description: "Text painted with the Honami accent gradient.",
			render: () => (
				<GradientText className="text-4xl font-semibold">Honami</GradientText>
			),
			code: () => `<GradientText className="text-4xl font-semibold">
  Honami
</GradientText>`,
		},
	],
};
