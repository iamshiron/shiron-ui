import { Button } from "@shiron/ui/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@shiron/ui/components/ui/sheet";
import { cn } from "@shiron/ui/lib/utils";
import { HamburgerMenuLinearIcon } from "@solar-icons/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DemoStage } from "@/components/DemoStage";
import { allDemos, findDemo, registry } from "@/registry";

export function ComponentsPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	// The selected component lives entirely in the URL hash (#button), so
	// sidebar clicks and the header search share one source of truth and every
	// selection is a shareable deep link.
	const hashId = decodeURIComponent(location.hash.replace(/^#/, ""));
	const demo = findDemo(hashId) ?? allDemos[0];

	// One nav list, reused by the desktop sidebar and the mobile sheet. Pass a
	// callback to run after a selection (used to close the sheet on mobile).
	const nav = (onSelect?: () => void) => (
		<nav className="flex flex-col gap-5 pb-6">
			{registry.map((group) => (
				<div key={group.name} className="flex flex-col gap-1">
					<div className="px-2 font-medium text-muted-foreground text-xs uppercase tracking-wide">
						{group.name}
					</div>
					{group.demos.map((d) => (
						<button
							key={d.id}
							type="button"
							onClick={() => {
								navigate(`#${d.id}`);
								onSelect?.();
							}}
							className={cn(
								"cursor-pointer rounded-md px-2 py-1.5 text-left text-sm transition-colors",
								d.id === demo?.id
									? "bg-foreground/10 font-medium text-foreground"
									: "text-muted-foreground hover:text-foreground",
							)}
						>
							{d.name}
						</button>
					))}
				</div>
			))}
		</nav>
	);

	return (
		<div className="-mt-3 flex flex-col gap-4 lg:grid lg:grid-cols-[13rem_1fr] lg:gap-10">
			{/* Mobile: a hamburger opens the component list in a sheet. */}
			<Sheet open={menuOpen} onOpenChange={setMenuOpen}>
				<SheetTrigger asChild>
					<Button variant="outline" size="sm" className="self-start lg:hidden">
						<HamburgerMenuLinearIcon />
						All components
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-72 overflow-y-auto">
					<SheetHeader>
						<SheetTitle className="font-heading tracking-tight">
							Components
						</SheetTitle>
					</SheetHeader>
					<div className="px-4">{nav(() => setMenuOpen(false))}</div>
				</SheetContent>
			</Sheet>

			<aside className="hidden lg:sticky lg:top-20 lg:block lg:h-[calc(100vh-6rem)] lg:self-start lg:overflow-y-auto">
				{nav()}
			</aside>

			<div className="min-w-0">
				{demo ? <DemoStage key={demo.id} demo={demo} /> : null}
			</div>
		</div>
	);
}
