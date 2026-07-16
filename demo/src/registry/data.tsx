import { AspectRatio } from "@shiron/ui/components/ui/aspect-ratio";
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
} from "@shiron/ui/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@shiron/ui/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@shiron/ui/components/ui/carousel";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@shiron/ui/components/ui/chart";
import { Progress } from "@shiron/ui/components/ui/progress";
import {
	Stat,
	StatDelta,
	StatLabel,
	StatValue,
} from "@shiron/ui/components/ui/stat";
import { StatusDot } from "@shiron/ui/components/ui/status-dot";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@shiron/ui/components/ui/table";
import {
	AltArrowDownLinearIcon,
	AltArrowUpLinearIcon,
} from "@solar-icons/react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import type { DemoGroup } from "./types";

const chartData = [
	{ month: "Jan", visitors: 186 },
	{ month: "Feb", visitors: 305 },
	{ month: "Mar", visitors: 237 },
	{ month: "Apr", visitors: 273 },
	{ month: "May", visitors: 209 },
	{ month: "Jun", visitors: 314 },
];

const chartConfig = {
	visitors: {
		label: "Visitors",
		color: "var(--honami-accent)",
	},
} satisfies ChartConfig;

export const dataGroup: DemoGroup = {
	name: "Data display",
	demos: [
		{
			id: "table",
			name: "Table",
			description: "Rows and columns for structured data.",
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
			code: () => `<Table>
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
  </TableBody>
</Table>`,
		},
		{
			id: "card",
			name: "Card",
			description: "A container that groups related content.",
			render: () => (
				<Card className="w-full max-w-sm">
					<CardHeader>
						<CardTitle>Weekly report</CardTitle>
						<CardDescription>
							Your activity for the past 7 days.
						</CardDescription>
					</CardHeader>
					<CardContent>
						Traffic is up 12% compared to last week, with a steady rise in
						returning visitors.
					</CardContent>
					<CardFooter className="text-muted-foreground">
						Updated 2 hours ago
					</CardFooter>
				</Card>
			),
			code: () => `<Card>
  <CardHeader>
    <CardTitle>Weekly report</CardTitle>
    <CardDescription>Your activity for the past 7 days.</CardDescription>
  </CardHeader>
  <CardContent>Traffic is up 12% compared to last week.</CardContent>
  <CardFooter>Updated 2 hours ago</CardFooter>
</Card>`,
		},
		{
			id: "avatar",
			name: "Avatar",
			description: "A user image with fallback initials, alone or grouped.",
			render: () => (
				<div className="flex items-center gap-6">
					<Avatar size="lg">
						<AvatarFallback>AO</AvatarFallback>
					</Avatar>
					<AvatarGroup>
						<Avatar>
							<AvatarFallback>AO</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarFallback>RN</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarFallback>YK</AvatarFallback>
						</Avatar>
						<AvatarGroupCount>+3</AvatarGroupCount>
					</AvatarGroup>
				</div>
			),
			code: () => `<Avatar size="lg">
  <AvatarFallback>AO</AvatarFallback>
</Avatar>

<AvatarGroup>
  <Avatar><AvatarFallback>AO</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>RN</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>YK</AvatarFallback></Avatar>
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>`,
		},
		{
			id: "stat",
			name: "Stat",
			description: "A compact metric with a label, value and trend delta.",
			render: () => (
				<div className="flex gap-10">
					<Stat>
						<StatLabel>Revenue</StatLabel>
						<StatValue>$12.4k</StatValue>
						<StatDelta trend="up">
							<AltArrowUpLinearIcon />
							8.2%
						</StatDelta>
					</Stat>
					<Stat>
						<StatLabel>Churn</StatLabel>
						<StatValue>2.1%</StatValue>
						<StatDelta trend="down">
							<AltArrowDownLinearIcon />
							0.4%
						</StatDelta>
					</Stat>
				</div>
			),
			code: () => `<Stat>
  <StatLabel>Revenue</StatLabel>
  <StatValue>$12.4k</StatValue>
  <StatDelta trend="up">
    <AltArrowUpLinearIcon />
    8.2%
  </StatDelta>
</Stat>`,
		},
		{
			id: "status-dot",
			name: "Status dot",
			description: "A small presence indicator with an optional pulse.",
			variants: [
				{ key: "online", label: "Online" },
				{ key: "away", label: "Away" },
				{ key: "busy", label: "Busy" },
				{ key: "offline", label: "Offline" },
			],
			render: (v) => (
				<div className="flex items-center gap-2">
					<StatusDot
						status={v as "online" | "away" | "busy" | "offline"}
						size="lg"
						pulse
					/>
					<span className="text-sm capitalize">{v}</span>
				</div>
			),
			code: (v) => `<StatusDot status="${v}" pulse />`,
		},
		{
			id: "progress",
			name: "Progress",
			description: "A bar showing completion of a task.",
			render: () => (
				<div className="w-full max-w-xs">
					<Progress value={62} />
				</div>
			),
			code: () => `<Progress value={62} />`,
		},
		{
			id: "chart",
			name: "Chart",
			description: "A themed recharts wrapper with tooltip support.",
			render: () => (
				<ChartContainer config={chartConfig} className="h-56 w-full max-w-md">
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						<Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
					</BarChart>
				</ChartContainer>
			),
			code: () => `const chartConfig = {
  visitors: { label: "Visitors", color: "var(--honami-accent)" },
} satisfies ChartConfig;

<ChartContainer config={chartConfig} className="h-56 w-full max-w-md">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
  </BarChart>
</ChartContainer>`,
		},
		{
			id: "carousel",
			name: "Carousel",
			description: "A horizontally scrollable set of slides.",
			render: () => (
				<Carousel className="w-full max-w-xs">
					<CarouselContent>
						{[1, 2, 3, 4].map((n) => (
							<CarouselItem key={n}>
								<div className="flex h-32 items-center justify-center rounded-lg border bg-muted font-heading text-3xl font-semibold">
									{n}
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			),
			code: () => `<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {[1, 2, 3, 4].map((n) => (
      <CarouselItem key={n}>
        <div className="flex h-32 items-center justify-center rounded-lg border bg-muted">
          {n}
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
		},
		{
			id: "aspect-ratio",
			name: "Aspect ratio",
			description: "Constrains content to a fixed width-to-height ratio.",
			render: () => (
				<div className="w-full max-w-sm">
					<AspectRatio ratio={16 / 9}>
						<div className="flex size-full items-center justify-center rounded-lg honami-grad text-sm font-medium text-primary-foreground">
							16 / 9
						</div>
					</AspectRatio>
				</div>
			),
			code: () => `<AspectRatio ratio={16 / 9}>
  <div className="flex size-full items-center justify-center rounded-lg honami-grad">
    16 / 9
  </div>
</AspectRatio>`,
		},
	],
};
