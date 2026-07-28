import { cn } from "@shiron/ui/lib/utils";
import { RefreshIcon } from "@solar-icons/react/linear/refresh";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<RefreshIcon
			role="status"
			aria-label="Loading"
			className={cn("size-4 animate-spin", className)}
			{...props}
		/>
	);
}

export { Spinner };
