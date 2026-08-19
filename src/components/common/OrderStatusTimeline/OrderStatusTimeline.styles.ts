export const orderStatusTimelineStyles = {
  root: "w-full",

  list: "space-y-0",

  item: ["relative flex gap-4", "pb-7 last:pb-0"].join(" "),

  indicatorColumn: ["relative flex w-8", "shrink-0 justify-center"].join(" "),

  connector: ["absolute top-8 bottom-0", "w-px bg-border"].join(" "),

  connectorCompleted: "bg-success",

  indicator: [
    "relative z-10 flex h-8 w-8",
    "items-center justify-center",
    "rounded-full border",
    "bg-background",
  ].join(" "),

  completed: ["border-success", "bg-success", "text-success-foreground"].join(
    " ",
  ),

  current: [
    "border-primary",
    "bg-primary",
    "text-primary-foreground",
    "ring-4 ring-primary/15",
  ].join(" "),

  upcoming: ["border-border", "text-muted-foreground"].join(" "),

  cancelled: [
    "border-destructive",
    "bg-destructive",
    "text-destructive-foreground",
  ].join(" "),

  content: "min-w-0 flex-1 pt-1",

  header: [
    "flex flex-col gap-1",
    "sm:flex-row sm:items-start sm:justify-between",
  ].join(" "),

  title: ["font-semibold text-foreground"].join(" "),

  date: ["text-xs text-muted-foreground"].join(" "),

  description: ["mt-1 text-sm leading-6", "text-muted-foreground"].join(" "),
};
