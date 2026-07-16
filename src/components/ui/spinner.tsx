import { cn } from "@shiron/ui/lib/utils";
import { RefreshLinearIcon } from "@solar-icons/react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<RefreshLinearIcon
			role="status"
			aria-label="Loading"
			className={cn("size-4 animate-spin", className)}
			{...props}
		/>
	);
}

export { Spinner };
