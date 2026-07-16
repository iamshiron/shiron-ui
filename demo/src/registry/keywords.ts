/**
 * Search aliases per component id. Used to surface a component under the terms
 * people actually reach for (e.g. a carousel is often called a "gallery"), both
 * in the header search and shown at the bottom of each component's page.
 */
export const KEYWORDS: Record<string, string[]> = {
	// Buttons & actions
	button: ["action", "cta", "click"],
	"button-group": ["segmented", "split button", "cluster"],
	toggle: ["switch button", "pressable", "toggle button"],
	"toggle-group": ["segmented control", "multi toggle"],
	badge: ["tag", "chip", "label", "pill"],
	kbd: ["keyboard", "shortcut", "hotkey", "key"],

	// Forms & inputs
	input: ["text field", "textbox", "field"],
	textarea: ["multiline", "text area", "message box"],
	label: ["form label", "caption"],
	field: ["form field", "form control"],
	checkbox: ["check", "tickbox"],
	"radio-group": ["radio buttons", "options", "single select"],
	switch: ["toggle", "on off", "flip"],
	slider: ["range", "range slider", "track"],
	select: ["dropdown", "picker"],
	"native-select": ["dropdown", "html select"],
	combobox: ["autocomplete", "search select", "typeahead"],
	"input-otp": ["otp", "one time password", "verification code", "pin"],
	"input-group": ["input with addon", "prefixed input"],
	calendar: ["date picker", "datepicker", "month view"],

	// Navigation & disclosure
	tabs: ["tabbed", "segmented views"],
	accordion: ["collapsible list", "disclosure", "faq"],
	collapsible: ["disclosure", "expand", "show hide"],
	breadcrumb: ["breadcrumbs", "path", "trail"],
	pagination: ["pager", "pages", "page navigation"],
	"navigation-menu": ["navbar", "menu", "mega menu", "nav"],

	// Overlays & menus
	dialog: ["modal", "popup"],
	"alert-dialog": ["confirm", "confirmation", "modal"],
	drawer: ["bottom sheet", "slide over"],
	sheet: ["side panel", "slide over", "drawer"],
	popover: ["popup", "overlay", "flyout"],
	"hover-card": ["hover popover", "preview card"],
	tooltip: ["hint", "hover hint"],
	"dropdown-menu": ["menu", "actions menu", "kebab menu"],
	"context-menu": ["right click menu"],
	menubar: ["menu bar", "application menu"],
	command: ["command palette", "search", "spotlight", "cmdk", "quick search"],
	sonner: ["toast", "notification", "snackbar"],

	// Data display
	table: ["data table", "grid", "datagrid"],
	card: ["panel", "tile", "surface"],
	avatar: ["profile picture", "user image", "pfp"],
	stat: ["metric", "kpi", "statistic"],
	"status-dot": ["presence", "indicator", "online status"],
	progress: ["progress bar", "loading bar", "meter"],
	chart: ["graph", "bar chart", "recharts", "visualization"],
	carousel: ["gallery", "slider", "slideshow", "image slider"],
	"aspect-ratio": ["ratio", "responsive box"],

	// Feedback & layout
	alert: ["callout", "banner", "notice"],
	skeleton: ["loading placeholder", "shimmer"],
	spinner: ["loader", "loading", "throbber"],
	empty: ["empty state", "no results", "placeholder"],
	separator: ["divider", "rule", "hr"],
	"scroll-area": ["scrollbar", "scrollable", "overflow"],
	resizable: ["split pane", "panels", "resizer"],
	item: ["list item", "row"],
	"glass-panel": ["glassmorphism", "frosted glass", "panel"],
	"gradient-text": ["gradient heading", "colored text"],
};
