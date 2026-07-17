import { Avatar, AvatarFallback } from "@shiron/ui/components/ui/avatar";
import { Badge } from "@shiron/ui/components/ui/badge";
import { Button } from "@shiron/ui/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@shiron/ui/components/ui/card";
import { Label } from "@shiron/ui/components/ui/label";
import { Progress } from "@shiron/ui/components/ui/progress";
import {
	Stat,
	StatDelta,
	StatLabel,
	StatValue,
} from "@shiron/ui/components/ui/stat";
import { StatusDot } from "@shiron/ui/components/ui/status-dot";
import { Switch } from "@shiron/ui/components/ui/switch";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@shiron/ui/components/ui/tabs";
import { Link } from "react-router";
import { EssentialsShowcase } from "@/components/EssentialsShowcase";
import { builtOn, site } from "@/lib/site";

function HighlightCard({
	title,
	description,
	children,
}: {
	title: string;
	description: string;
	children: React.ReactNode;
}) {
	return (
		<Card className="bg-card/60 backdrop-blur-sm">
			<CardHeader>
				<CardTitle className="text-base">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}

export function HomePage() {
	return (
		<div className="flex flex-col gap-20">
			<section className="grid items-center gap-10 pt-6 lg:grid-cols-2">
				<div className="flex min-w-0 flex-col gap-6">
					<h1 className="font-heading font-semibold text-4xl leading-[1.1] tracking-tight sm:text-5xl">
						One component set, <span className="text-primary">twelve</span>{" "}
						themes.
					</h1>
					<p className="max-w-prose text-base text-muted-foreground leading-relaxed">
						{site.name} is a source-only React 19 + Tailwind v4 library built on
						shadcn/ui. It ships pre-styled — glassmorphic surfaces, gradient
						accents and twelve named themes, all usable out of the box. Drop it
						in as a git submodule and retheme everything through one token layer.
					</p>
					<div className="flex flex-wrap gap-3">
						<Button asChild size="lg">
							<Link to="/components">Browse components</Link>
						</Button>
						<Button asChild size="lg" variant="outline">
							<Link to="/docs">Get started</Link>
						</Button>
						<Button asChild size="lg" variant="ghost">
							<a href={site.storybook} target="_blank" rel="noreferrer">
								Open Storybook
							</a>
						</Button>
					</div>
					<p className="text-muted-foreground text-sm">
						Built on{" "}
						{builtOn.map((item, i) => (
							<span key={item.name}>
								<a
									className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
									href={item.href}
									target="_blank"
									rel="noreferrer"
								>
									{item.name}
								</a>
								{i < builtOn.length - 1 ? ", " : "."}
							</span>
						))}
					</p>
				</div>

				<div className="flex min-w-0 justify-center lg:justify-end">
					<EssentialsShowcase />
				</div>
			</section>

			<section className="flex flex-col gap-6">
				<div className="flex flex-col gap-1">
					<h2 className="font-heading font-semibold text-2xl tracking-tight">
						Batteries included
					</h2>
					<p className="text-muted-foreground text-sm">
						60+ components — forms, overlays, navigation, data display and
						charts — all sharing one themeable surface.
					</p>
				</div>

				<div className="grid gap-4 md:grid-cols-3">
					<HighlightCard
						title="Navigation"
						description="Tabs, menus, breadcrumbs and more."
					>
						<Tabs defaultValue="overview">
							<TabsList>
								<TabsTrigger value="overview">Overview</TabsTrigger>
								<TabsTrigger value="activity">Activity</TabsTrigger>
								<TabsTrigger value="settings">Settings</TabsTrigger>
							</TabsList>
							<TabsContent
								value="overview"
								className="pt-3 text-muted-foreground text-sm"
							>
								A calm, glassy overview panel.
							</TabsContent>
							<TabsContent
								value="activity"
								className="pt-3 text-muted-foreground text-sm"
							>
								Recent activity lives here.
							</TabsContent>
							<TabsContent
								value="settings"
								className="pt-3 text-muted-foreground text-sm"
							>
								Tweak everything to taste.
							</TabsContent>
						</Tabs>
					</HighlightCard>

					<HighlightCard
						title="Controls & status"
						description="Switches, badges and presence."
					>
						<div className="flex flex-col gap-4">
							<div className="flex items-center justify-between">
								<Label htmlFor="home-notifications">Notifications</Label>
								<Switch id="home-notifications" defaultChecked />
							</div>
							<div className="flex flex-wrap gap-2">
								<Badge>Default</Badge>
								<Badge variant="secondary">Secondary</Badge>
								<Badge variant="outline">Outline</Badge>
								<Badge variant="destructive">Destructive</Badge>
							</div>
							<div className="flex flex-col gap-1.5 text-sm">
								<span className="flex items-center gap-2">
									<StatusDot status="online" pulse /> Online
								</span>
								<span className="flex items-center gap-2">
									<StatusDot status="away" /> Away
								</span>
							</div>
						</div>
					</HighlightCard>

					<HighlightCard
						title="Data display"
						description="Stats, progress and avatars."
					>
						<div className="flex flex-col gap-4">
							<Stat>
								<StatLabel>Active sessions</StatLabel>
								<StatValue>2,481</StatValue>
								<StatDelta trend="up">+12.4% this week</StatDelta>
							</Stat>
							<Progress value={68} />
							<div className="-space-x-2 flex">
								{["SH", "AK", "MJ", "TL"].map((initials) => (
									<Avatar key={initials} className="ring-2 ring-background">
										<AvatarFallback>{initials}</AvatarFallback>
									</Avatar>
								))}
							</div>
						</div>
					</HighlightCard>
				</div>
			</section>
		</div>
	);
}
