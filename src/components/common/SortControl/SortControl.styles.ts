export const sortControlStyles = {
  root: ["flex items-center gap-3"].join(" "),

  label: ["shrink-0 text-sm font-medium", "text-muted-foreground"].join(" "),

  select: [
    "h-10 min-w-[180px]",
    "rounded-lg border border-border",
    "bg-background px-3",
    "text-sm text-foreground",
    "outline-none",
    "transition-colors",
    "focus:border-primary",
    "focus:ring-2 focus:ring-primary/10",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ].join(" "),
};
