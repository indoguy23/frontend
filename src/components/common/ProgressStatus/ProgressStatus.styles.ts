export const progressStatusStyles = {
  root: "w-full",

  header: ["flex items-center justify-between gap-4"].join(" "),

  label: ["text-sm font-medium", "text-foreground"].join(" "),

  value: ["text-sm font-medium", "text-muted-foreground"].join(" "),

  description: ["mt-1 text-sm", "text-muted-foreground"].join(" "),

  track: ["mt-3 h-2 overflow-hidden", "rounded-full bg-muted"].join(" "),

  bar: ["h-full rounded-full", "transition-[width] duration-300"].join(" "),

  default: "bg-primary",

  success: "bg-success",

  warning: "bg-warning",

  danger: "bg-destructive",
};
