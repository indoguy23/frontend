export const paginationStyles = {
  nav: "flex w-full items-center justify-between gap-4",

  mobileInfo: ["text-sm text-muted-foreground", "sm:hidden"].join(" "),

  list: ["hidden items-center gap-1", "sm:flex"].join(" "),

  button: [
    "inline-flex h-10 min-w-10 items-center justify-center",
    "rounded-lg border border-border",
    "bg-background px-3",
    "text-sm font-medium text-foreground",
    "transition-colors duration-200",
    "hover:bg-muted",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ].join(" "),

  activeButton: [
    "border-primary",
    "bg-primary",
    "text-primary-foreground",
    "hover:bg-primary-hover",
  ].join(" "),

  navigationButton: [
    "inline-flex h-10 items-center justify-center gap-2",
    "rounded-lg border border-border",
    "bg-background px-3",
    "text-sm font-medium text-foreground",
    "transition-colors duration-200",
    "hover:bg-muted",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ].join(" "),

  ellipsis: [
    "inline-flex h-10 min-w-10 items-center justify-center",
    "text-muted-foreground",
  ].join(" "),
};
