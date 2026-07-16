import { Calendar } from "@shiron/ui/components/ui/calendar";
import { Checkbox } from "@shiron/ui/components/ui/checkbox";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "@shiron/ui/components/ui/combobox";
import {
	Field,
	FieldDescription,
	FieldLabel,
} from "@shiron/ui/components/ui/field";
import { Input } from "@shiron/ui/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@shiron/ui/components/ui/input-group";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@shiron/ui/components/ui/input-otp";
import { Label } from "@shiron/ui/components/ui/label";
import {
	NativeSelect,
	NativeSelectOption,
} from "@shiron/ui/components/ui/native-select";
import {
	RadioGroup,
	RadioGroupItem,
} from "@shiron/ui/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@shiron/ui/components/ui/select";
import { Slider } from "@shiron/ui/components/ui/slider";
import { Switch } from "@shiron/ui/components/ui/switch";
import { Textarea } from "@shiron/ui/components/ui/textarea";
import { MagnifierLinearIcon } from "@solar-icons/react";
import type { DemoGroup } from "./types";

const frameworks = ["Next.js", "Remix", "Astro", "Nuxt", "SvelteKit"];

export const formsGroup: DemoGroup = {
	name: "Forms & inputs",
	demos: [
		{
			id: "input",
			name: "Input",
			description: "A single-line text field.",
			variants: [
				{ key: "default", label: "Default" },
				{ key: "disabled", label: "Disabled" },
				{ key: "invalid", label: "Invalid" },
			],
			render: (v) => (
				<div className="w-full max-w-sm">
					<Input
						type="email"
						placeholder="you@example.com"
						disabled={v === "disabled"}
						aria-invalid={v === "invalid"}
					/>
				</div>
			),
			code: (v) =>
				v === "default"
					? `<Input type="email" placeholder="you@example.com" />`
					: `<Input type="email" placeholder="you@example.com" ${v === "disabled" ? "disabled" : "aria-invalid"} />`,
		},
		{
			id: "textarea",
			name: "Textarea",
			description: "A multi-line text field that grows with its content.",
			render: () => (
				<div className="w-full max-w-sm">
					<Textarea placeholder="Type your message here..." />
				</div>
			),
			code: () => `<Textarea placeholder="Type your message here..." />`,
		},
		{
			id: "label",
			name: "Label",
			description: "An accessible label bound to a form control.",
			render: () => (
				<div className="grid w-full max-w-sm gap-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="you@example.com" />
				</div>
			),
			code: () => `<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />`,
		},
		{
			id: "field",
			name: "Field",
			description: "Label, control, and description composed into one field.",
			render: () => (
				<div className="w-full max-w-sm">
					<Field>
						<FieldLabel htmlFor="username">Username</FieldLabel>
						<Input id="username" placeholder="shiron" />
						<FieldDescription>
							This is your public display name.
						</FieldDescription>
					</Field>
				</div>
			),
			code: () => `<Field>
  <FieldLabel htmlFor="username">Username</FieldLabel>
  <Input id="username" placeholder="shiron" />
  <FieldDescription>This is your public display name.</FieldDescription>
</Field>`,
		},
		{
			id: "checkbox",
			name: "Checkbox",
			description: "A control for a single on/off choice.",
			render: () => (
				<div className="flex items-center gap-2">
					<Checkbox id="terms" defaultChecked />
					<Label htmlFor="terms">Accept terms and conditions</Label>
				</div>
			),
			code: () => `<Checkbox id="terms" defaultChecked />
<Label htmlFor="terms">Accept terms and conditions</Label>`,
		},
		{
			id: "radio-group",
			name: "Radio group",
			description: "A set of options where only one can be selected.",
			render: () => (
				<RadioGroup defaultValue="comfortable" className="max-w-sm">
					<div className="flex items-center gap-2">
						<RadioGroupItem value="default" id="r1" />
						<Label htmlFor="r1">Default</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroupItem value="comfortable" id="r2" />
						<Label htmlFor="r2">Comfortable</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroupItem value="compact" id="r3" />
						<Label htmlFor="r3">Compact</Label>
					</div>
				</RadioGroup>
			),
			code: () => `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`,
		},
		{
			id: "switch",
			name: "Switch",
			description: "A toggle between two states.",
			render: () => (
				<div className="flex items-center gap-2">
					<Switch id="airplane" defaultChecked />
					<Label htmlFor="airplane">Airplane mode</Label>
				</div>
			),
			code: () => `<Switch id="airplane" defaultChecked />
<Label htmlFor="airplane">Airplane mode</Label>`,
		},
		{
			id: "slider",
			name: "Slider",
			description: "Pick a value from a continuous range.",
			render: () => (
				<div className="w-full max-w-sm">
					<Slider defaultValue={[50]} max={100} step={1} />
				</div>
			),
			code: () => `<Slider defaultValue={[50]} max={100} step={1} />`,
		},
		{
			id: "select",
			name: "Select",
			description: "A styled dropdown for choosing from a list.",
			render: () => (
				<div className="w-full max-w-sm">
					<Select defaultValue="apple">
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select a fruit" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="orange">Orange</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			),
			code: () => `<Select defaultValue="apple">
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`,
		},
		{
			id: "native-select",
			name: "Native select",
			description: "A native OS select with custom styling.",
			render: () => (
				<NativeSelect defaultValue="apple">
					<NativeSelectOption value="apple">Apple</NativeSelectOption>
					<NativeSelectOption value="banana">Banana</NativeSelectOption>
					<NativeSelectOption value="orange">Orange</NativeSelectOption>
				</NativeSelect>
			),
			code: () => `<NativeSelect defaultValue="apple">
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="orange">Orange</NativeSelectOption>
</NativeSelect>`,
		},
		{
			id: "combobox",
			name: "Combobox",
			description: "A searchable, autocompleting select.",
			render: () => (
				<div className="w-full max-w-sm">
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
			code: () => `<Combobox items={frameworks}>
  <ComboboxInput placeholder="Search framework..." />
  <ComboboxContent>
    <ComboboxEmpty>No framework found.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>{item}</ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,
		},
		{
			id: "input-otp",
			name: "Input OTP",
			description: "A segmented field for one-time passcodes.",
			render: () => (
				<InputOTP maxLength={6}>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
			),
			code: () => `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
		},
		{
			id: "input-group",
			name: "Input group",
			description: "An input paired with inline addons like icons.",
			render: () => (
				<div className="w-full max-w-sm">
					<InputGroup>
						<InputGroupAddon>
							<MagnifierLinearIcon />
						</InputGroupAddon>
						<InputGroupInput placeholder="Search..." />
					</InputGroup>
				</div>
			),
			code: () => `<InputGroup>
  <InputGroupAddon>
    <MagnifierLinearIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>`,
		},
		{
			id: "calendar",
			name: "Calendar",
			description: "A date picker for selecting a single day.",
			render: () => <Calendar mode="single" className="rounded-md border" />,
			code: () => `<Calendar mode="single" className="rounded-md border" />`,
		},
	],
};
