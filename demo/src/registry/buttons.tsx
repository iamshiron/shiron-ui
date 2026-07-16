import { Badge } from "@shiron/ui/components/ui/badge";
import { Button } from "@shiron/ui/components/ui/button";
import { ButtonGroup } from "@shiron/ui/components/ui/button-group";
import { Kbd, KbdGroup } from "@shiron/ui/components/ui/kbd";
import { Toggle } from "@shiron/ui/components/ui/toggle";
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@shiron/ui/components/ui/toggle-group";
import {
	TextBoldLinearIcon,
	TextItalicLinearIcon,
	TextUnderlineLinearIcon,
} from "@solar-icons/react";
import type { DemoGroup } from "./types";

export const buttonsGroup: DemoGroup = {
	name: "Buttons & actions",
	demos: [
		{
			id: "button",
			name: "Button",
			description: "Clickable action with variants and sizes.",
			variants: [
				{ key: "default", label: "Default" },
				{ key: "secondary", label: "Secondary" },
				{ key: "outline", label: "Outline" },
				{ key: "ghost", label: "Ghost" },
				{ key: "destructive", label: "Destructive" },
				{ key: "link", label: "Link" },
			],
			render: (v) => (
				<Button
					variant={
						v as
							| "default"
							| "secondary"
							| "outline"
							| "ghost"
							| "destructive"
							| "link"
					}
				>
					{v === "default" ? "Button" : v[0].toUpperCase() + v.slice(1)}
				</Button>
			),
			code: (v) => `<Button variant="${v}">Button</Button>`,
		},
		{
			id: "button-group",
			name: "Button group",
			description: "Segmented cluster of related buttons.",
			render: () => (
				<ButtonGroup>
					<Button variant="outline">Copy</Button>
					<Button variant="outline">Paste</Button>
					<Button variant="outline">Delete</Button>
				</ButtonGroup>
			),
			code: () => `<ButtonGroup>
  <Button variant="outline">Copy</Button>
  <Button variant="outline">Paste</Button>
  <Button variant="outline">Delete</Button>
</ButtonGroup>`,
		},
		{
			id: "toggle",
			name: "Toggle",
			description: "A two-state button that stays pressed.",
			render: () => (
				<Toggle aria-label="Bold">
					<TextBoldLinearIcon />
				</Toggle>
			),
			code: () => `<Toggle aria-label="Bold">
  <TextBoldLinearIcon />
</Toggle>`,
		},
		{
			id: "toggle-group",
			name: "Toggle group",
			description: "A set of toggles for exclusive or multiple selection.",
			render: () => (
				<ToggleGroup type="multiple" defaultValue={["bold"]}>
					<ToggleGroupItem value="bold" aria-label="Bold">
						<TextBoldLinearIcon />
					</ToggleGroupItem>
					<ToggleGroupItem value="italic" aria-label="Italic">
						<TextItalicLinearIcon />
					</ToggleGroupItem>
					<ToggleGroupItem value="underline" aria-label="Underline">
						<TextUnderlineLinearIcon />
					</ToggleGroupItem>
				</ToggleGroup>
			),
			code: () => `<ToggleGroup type="multiple" defaultValue={["bold"]}>
  <ToggleGroupItem value="bold"><TextBoldLinearIcon /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><TextItalicLinearIcon /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><TextUnderlineLinearIcon /></ToggleGroupItem>
</ToggleGroup>`,
		},
		{
			id: "badge",
			name: "Badge",
			description: "A small status or count label.",
			variants: [
				{ key: "default", label: "Default" },
				{ key: "secondary", label: "Secondary" },
				{ key: "outline", label: "Outline" },
				{ key: "destructive", label: "Destructive" },
			],
			render: (v) => (
				<Badge
					variant={v as "default" | "secondary" | "outline" | "destructive"}
				>
					{v[0].toUpperCase() + v.slice(1)}
				</Badge>
			),
			code: (v) => `<Badge variant="${v}">Badge</Badge>`,
		},
		{
			id: "kbd",
			name: "Kbd",
			description: "Keyboard shortcut hints.",
			render: () => (
				<KbdGroup>
					<Kbd>⌘</Kbd>
					<Kbd>K</Kbd>
				</KbdGroup>
			),
			code: () => `<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`,
		},
	],
};
