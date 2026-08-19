export const sidebarStyles = {
  root: [
    "flex h-full flex-col",
    "border-r border-border",
    "bg-card text-card-foreground",
    "transition-[width] duration-300",
  ].join(" "),

  expanded: "w-64",

  collapsed: "w-20",

  header: ["flex h-16 items-center", "border-b border-border", "px-4"].join(
    " ",
  ),

  brand: ["flex items-center gap-3", "font-semibold text-foreground"].join(" "),

  brandMark: [
    "flex h-9 w-9 shrink-0 items-center justify-center",
    "rounded-xl bg-primary",
    "text-sm font-bold text-primary-foreground",
  ].join(" "),

  content: ["flex-1 overflow-y-auto", "px-3 py-4"].join(" "),

  group: "space-y-2",

  groupLabel: [
    "px-3 text-xs font-semibold uppercase",
    "tracking-wide text-muted-foreground",
  ].join(" "),

  groupSpacing: "mt-6",

  item: [
    "flex w-full items-center gap-3",
    "rounded-xl px-3 py-2.5",
    "text-sm font-medium",
    "text-muted-foreground",
    "transition-colors duration-200",
    "hover:bg-muted hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
  ].join(" "),

  activeItem: ["bg-primary-subtle", "text-primary-subtle-foreground"].join(" "),

  disabledItem: ["cursor-not-allowed", "opacity-50"].join(" "),

  icon: "h-5 w-5 shrink-0",

  label: "min-w-0 flex-1 truncate text-left",

  badge: [
    "ml-auto rounded-full",
    "bg-muted px-2 py-0.5",
    "text-xs font-medium text-muted-foreground",
  ].join(" "),

  footer: ["border-t border-border", "p-3"].join(" "),
};
