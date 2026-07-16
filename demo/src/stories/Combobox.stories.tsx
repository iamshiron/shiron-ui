import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "@shiron/ui/components/ui/combobox";
import type { Meta, StoryObj } from "@storybook/react-vite";

const frameworks = ["Next.js", "Remix", "Astro", "Nuxt", "SvelteKit"];

const meta = {
	title: "Forms & inputs/Combobox",
	component: Combobox,
	tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => (
		<div className="w-72">
			<Combobox items={frameworks}>
				<ComboboxInput placeholder="Search framework..." />
				<ComboboxContent>
					<ComboboxEmpty>No framework found.</ComboboxEmpty>
					<ComboboxList>
						{(item: string) => (
							<ComboboxItem key={item} value={item}>
								{item}
							</ComboboxItem>
						)}
					</ComboboxList>
				</ComboboxContent>
			</Combobox>
		</div>
	),
};
