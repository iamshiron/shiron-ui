import { Button } from "@shiron/ui/components/ui/button";
import { GradientText } from "@shiron/ui/components/ui/gradient-text";
import { Link } from "react-router";
import { EssentialsShowcase } from "@/components/EssentialsShowcase";
import { builtOn, site } from "@/lib/site";

export function HomePage() {
	return (
		<div className="flex flex-col gap-16">
			<section className="grid items-center gap-10 pt-6 lg:grid-cols-2">
				<div className="flex flex-col gap-6">
					<h1 className="font-heading font-semibold text-4xl leading-[1.1] tracking-tight sm:text-5xl">
						A component set with a <GradientText>Neo-Tokyo</GradientText> look.
					</h1>
					<p className="max-w-prose text-base text-muted-foreground leading-relaxed">
						{site.name} is a source-only React 19 + Tailwind v4 library built on
						shadcn/ui — muted mauve surfaces, glassmorphism, gradient accents
						and twelve named themes. Drop it in as a git submodule and style
						everything through one token layer.
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
									className="text-foreground/80 underline-offset-4 hover:underline"
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

				<div className="flex justify-center lg:justify-end">
					<EssentialsShowcase />
				</div>
			</section>
		</div>
	);
}
