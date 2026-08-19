export const switchStyles = {
  container: "flex items-start justify-between gap-4",

  content: "min-w-0 flex-1",

  label: ["text-sm font-medium text-foreground", "cursor-pointer"].join(" "),

  disabledLabel: "cursor-not-allowed opacity-60",

  description: ["mt-1 text-sm leading-5", "text-muted-foreground"].join(" "),

  root: [
    "relative inline-flex h-6 w-11 shrink-0",
    "cursor-pointer items-center rounded-full",
    "border border-border-strong bg-muted",
    "transition-colors duration-200",
    "data-[state=checked]:border-primary",
    "data-[state=checked]:bg-primary",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" "),

  invalidRoot: ["border-danger", "focus-visible:ring-danger"].join(" "),

  thumb: [
    "pointer-events-none block h-5 w-5",
    "rounded-full bg-surface shadow-sm",
    "transition-transform duration-200",
    "translate-x-0.5",
    "data-[state=checked]:translate-x-[1.25rem]",
  ].join(" "),
};
