import { Background } from "@shiron/ui/components/ui/background";
import { Button } from "@shiron/ui/components/ui/button";
import { ThemeSelect } from "@shiron/ui/components/ui/theme-select";
import { ThemeToggle } from "@shiron/ui/components/ui/theme-toggle";
import { useTheme } from "@shiron/ui/hooks/use-theme";
import { getTheme } from "@shiron/ui/lib/themes";
import { cn } from "@shiron/ui/lib/utils";
import { NavLink, Outlet } from "react-router";
import { ComponentSearch } from "@/components/ComponentSearch";
import { site } from "@/lib/site";

const NAV = [
	{ to: "/", label: "Home", end: true },
	{ to: "/docs", label: "Docs", end: false },
	{ to: "/components", label: "Components", end: false },
];

function NavItem({
	to,
	label,
	end,
}: {
	to: string;
	label: string;
	end: boolean;
}) {
	return (
		<NavLink
			to={to}
			end={end}
			className={({ isActive }) =>
				cn(
					"rounded-md px-2.5 py-1.5 font-medium text-sm transition-colors",
					isActive
						? "bg-foreground/10 text-foreground"
						: "text-muted-foreground hover:text-foreground",
				)
			}
		>
			{label}
		</NavLink>
	);
}

export function Layout() {
	const { theme } = useTheme();
	const accent = getTheme(theme)?.accent ?? "purple";

	return (
		<div className="relative flex min-h-screen flex-col">
			<Background
				variant="atmosphere"
				intensity="subtle"
				className="opacity-80 blur-[1px]"
			/>

			<header className="sticky top-0 z-40 border-border/60 border-b bg-background/70 backdrop-blur-xl">
				<div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
					<NavLink to="/" className="flex items-center gap-2">
						<span className="font-heading font-semibold text-base tracking-tight">
							shiron/ui
						</span>
					</NavLink>

					<nav className="ml-2 hidden items-center gap-1 sm:flex">
						{NAV.map((item) => (
							<NavItem key={item.to} {...item} />
						))}
					</nav>

					<div className="ml-auto flex items-center gap-2">
						<ComponentSearch />
						<Button asChild variant="outline" size="sm">
							<a href={site.storybook} target="_blank" rel="noreferrer">
								Storybook
							</a>
						</Button>
						<Button
							asChild
							variant="ghost"
							size="sm"
							className="hidden sm:inline-flex"
						>
							<a href={site.repo} target="_blank" rel="noreferrer">
								GitHub
							</a>
						</Button>
						<ThemeToggle accent={accent} />
						<ThemeSelect className="hidden w-40 md:flex" />
					</div>
				</div>
			</header>

			<main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
				<Outlet />
			</main>

			<footer className="relative z-10 border-border/60 border-t">
				<div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-muted-foreground text-sm sm:flex-row sm:px-6">
					<span>
						{site.name} · MIT ·{" "}
						<a className="hover:text-foreground" href={site.repo}>
							GitHub
						</a>
					</span>
					<span>Neo-Tokyo at Night</span>
				</div>
			</footer>
		</div>
	);
}
