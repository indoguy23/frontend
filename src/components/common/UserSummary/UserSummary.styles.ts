export const userSummaryStyles = {
  root: [
    "flex items-center gap-4",
    "rounded-2xl border border-border",
    "bg-card p-4",
  ].join(" "),

  clickable: ["cursor-pointer", "transition-colors", "hover:bg-muted/40"].join(
    " ",
  ),

  compact: "p-3",

  content: "min-w-0 flex-1",

  nameRow: ["flex flex-wrap items-center gap-2"].join(" "),

  name: ["truncate font-semibold", "text-foreground"].join(" "),

  role: [
    "rounded-full bg-muted",
    "px-2 py-0.5",
    "text-xs font-medium",
    "text-muted-foreground",
  ].join(" "),

  email: ["mt-1 truncate text-sm", "text-muted-foreground"].join(" "),

  phone: ["mt-1 text-sm", "text-muted-foreground"].join(" "),

  description: [
    "mt-2 line-clamp-2",
    "text-sm leading-6",
    "text-muted-foreground",
  ].join(" "),
};
