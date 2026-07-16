import { Badge } from "@shiron/ui/components/ui/badge";
import { Button } from "@shiron/ui/components/ui/button";
import { Input } from "@shiron/ui/components/ui/input";
import { Label } from "@shiron/ui/components/ui/label";
import { Slider } from "@shiron/ui/components/ui/slider";
import { cn } from "@shiron/ui/lib/utils";

/**
 * The minimal essentials — a heading, paragraph, buttons, a slider and a text
 * box. Rendered on the landing page and, in isolation, on the screenshot page
 * used to capture every theme for the README.
 */
export function EssentialsShowcase({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"flex w-full max-w-md flex-col gap-5 rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm",
				className,
			)}
		>
			<div className="flex flex-col gap-1.5">
				<div className="flex items-center gap-2">
					<h3 className="font-heading font-semibold text-xl tracking-tight">
						Neo-Tokyo at Night
					</h3>
					<Badge>v0.0.1</Badge>
				</div>
				<p className="text-muted-foreground text-sm leading-relaxed">
					A muted-mauve, glassmorphic take on shadcn/ui with gradient accents.
					Every control is themeable through a single token layer.
				</p>
			</div>

			<div className="flex flex-wrap items-center gap-2">
				<Button>Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="essentials-volume">Volume</Label>
				<Slider id="essentials-volume" defaultValue={[62]} max={100} step={1} />
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="essentials-email">Email</Label>
				<Input id="essentials-email" placeholder="you@example.com" />
			</div>
		</div>
	);
}
