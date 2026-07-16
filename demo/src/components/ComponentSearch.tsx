import { Button } from "@shiron/ui/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@shiron/ui/components/ui/command";
import { Kbd } from "@shiron/ui/components/ui/kbd";
import { MagnifierLinearIcon } from "@solar-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { registry } from "@/registry";

/** Header search — a ⌘K command palette over every component + its aliases. */
export function ComponentSearch() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				setOpen((prev) => !prev);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	function go(id: string) {
		setOpen(false);
		navigate(`/components#${id}`);
	}

	return (
		<>
			<Button
				variant="outline"
				size="sm"
				onClick={() => setOpen(true)}
				className="gap-2 text-muted-foreground"
			>
				<MagnifierLinearIcon />
				<span className="hidden sm:inline">Search…</span>
				<Kbd className="hidden sm:inline-flex">⌘K</Kbd>
			</Button>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Search components…" />
				<CommandList>
					<CommandEmpty>No components found.</CommandEmpty>
					{registry.map((group) => (
						<CommandGroup key={group.name} heading={group.name}>
							{group.demos.map((demo) => (
								<CommandItem
									key={demo.id}
									value={`${demo.name} ${demo.id}`}
									keywords={demo.keywords}
									onSelect={() => go(demo.id)}
								>
									<span>{demo.name}</span>
									{demo.keywords && demo.keywords.length > 0 ? (
										<span className="ml-auto truncate pl-4 text-muted-foreground text-xs">
											{demo.keywords.slice(0, 3).join(", ")}
										</span>
									) : null}
								</CommandItem>
							))}
						</CommandGroup>
					))}
				</CommandList>
			</CommandDialog>
		</>
	);
}
