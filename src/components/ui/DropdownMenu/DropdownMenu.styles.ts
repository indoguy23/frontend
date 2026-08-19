export const dropdownMenuStyles = {
  content: [
    "z-50 min-w-48 overflow-hidden",
    "rounded-xl border border-border",
    "bg-popover p-1 text-popover-foreground",
    "shadow-xl",
    "data-[state=open]:animate-dropdown-in",
    "data-[state=closed]:animate-dropdown-out",
  ].join(" "),

  subContent: [
    "z-50 min-w-44 overflow-hidden",
    "rounded-xl border border-border",
    "bg-popover p-1 text-popover-foreground",
    "shadow-xl",
    "data-[state=open]:animate-dropdown-in",
    "data-[state=closed]:animate-dropdown-out",
  ].join(" "),

  item: [
    "relative flex min-h-9 cursor-default select-none",
    "items-center gap-2 rounded-lg px-3 py-2",
    "text-sm outline-none",
    "transition-colors duration-150",
    "focus:bg-muted focus:text-foreground",
    "data-[disabled]:pointer-events-none",
    "data-[disabled]:opacity-50",
  ].join(" "),

  destructiveItem: [
    "text-danger",
    "focus:bg-danger-subtle",
    "focus:text-danger-subtle-foreground",
  ].join(" "),

  insetItem: "pl-8",

  label: ["px-3 py-2 text-xs font-semibold", "text-muted-foreground"].join(" "),

  separator: "my-1 h-px bg-border",

  shortcut: ["ml-auto text-xs tracking-widest", "text-muted-foreground"].join(
    " ",
  ),

  indicator: [
    "absolute left-2 flex h-4 w-4",
    "items-center justify-center",
  ].join(" "),

  subTrigger: [
    "relative flex min-h-9 cursor-default select-none",
    "items-center gap-2 rounded-lg px-3 py-2",
    "text-sm outline-none",
    "transition-colors duration-150",
    "focus:bg-muted focus:text-foreground",
    "data-[state=open]:bg-muted",
    "data-[disabled]:pointer-events-none",
    "data-[disabled]:opacity-50",
  ].join(" "),

  arrow: "fill-popover",
};
