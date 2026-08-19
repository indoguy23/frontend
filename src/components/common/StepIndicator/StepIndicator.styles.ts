export const stepIndicatorStyles = {
  root: "w-full",

  horizontal: ["flex items-start", "overflow-x-auto"].join(" "),

  vertical: "space-y-0",

  horizontalItem: [
    "relative flex min-w-[150px]",
    "flex-1 flex-col items-center",
    "text-center",
  ].join(" "),

  verticalItem: ["relative flex gap-4", "pb-6 last:pb-0"].join(" "),

  indicator: [
    "relative z-10 flex h-9 w-9",
    "shrink-0 items-center justify-center",
    "rounded-full border",
    "bg-background",
    "text-sm font-semibold",
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

  error: [
    "border-destructive",
    "bg-destructive",
    "text-destructive-foreground",
  ].join(" "),

  horizontalConnector: [
    "absolute left-[calc(50%+18px)]",
    "right-[calc(-50%+18px)]",
    "top-[18px]",
    "h-px bg-border",
  ].join(" "),

  verticalConnector: [
    "absolute left-[17px]",
    "top-9 bottom-0",
    "w-px bg-border",
  ].join(" "),

  completedConnector: "bg-success",

  label: ["font-medium text-foreground"].join(" "),

  description: ["mt-1 text-xs leading-5", "text-muted-foreground"].join(" "),

  horizontalContent: "mt-3",

  verticalContent: "min-w-0 pt-1",
};
