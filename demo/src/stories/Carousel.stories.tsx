import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@shiron/ui/components/ui/carousel";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data display/Carousel",
	component: Carousel,
	tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
};
