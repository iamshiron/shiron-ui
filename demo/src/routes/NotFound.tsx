import { Button } from "@shiron/ui/components/ui/button";
import { Link } from "react-router";

export function NotFoundPage() {
	return (
		<div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
			<span className="font-heading font-semibold text-6xl text-primary">
				404
			</span>
			<p className="text-muted-foreground">This page drifted off the grid.</p>
			<Button asChild variant="outline">
				<Link to="/">Back home</Link>
			</Button>
		</div>
	);
}
