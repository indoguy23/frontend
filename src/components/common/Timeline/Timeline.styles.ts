export const timelineStyles = {
  root: "w-full",

  item: ["relative flex gap-4", "pb-7 last:pb-0"].join(" "),

  indicatorWrapper: ["relative flex shrink-0", "flex-col items-center"].join(
    " ",
  ),

  indicator: [
    "relative z-10 flex h-9 w-9",
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
    "ring-4 ring-primary/10",
  ].join(" "),

  pending: ["border-border", "text-muted-foreground"].join(" "),

  error: [
    "border-destructive",
    "bg-destructive",
    "text-destructive-foreground",
  ].join(" "),

  connector: [
    "absolute left-1/2 top-9",
    "bottom-0 w-px",
    "-translate-x-1/2",
    "bg-border",
  ].join(" "),

  completedConnector: "bg-success",

  content: ["min-w-0 flex-1", "pt-1"].join(" "),

  header: [
    "flex flex-col gap-1",
    "sm:flex-row",
    "sm:items-start",
    "sm:justify-between",
    "sm:gap-4",
  ].join(" "),

  title: ["font-medium", "text-foreground"].join(" "),

  timestamp: ["shrink-0 text-xs", "text-muted-foreground"].join(" "),

  description: ["mt-1 text-sm leading-6", "text-muted-foreground"].join(" "),

  customContent: "mt-3",
};
