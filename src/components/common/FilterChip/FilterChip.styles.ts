export const filterChipStyles = {
  root: [
    "inline-flex items-center gap-2",
    "rounded-full border border-border",
    "bg-muted px-3 py-1.5",
    "text-sm text-foreground",
  ].join(" "),

  label: "font-medium",

  value: "text-muted-foreground",

  removeButton: [
    "flex h-5 w-5 items-center justify-center",
    "rounded-full",
    "text-muted-foreground",
    "transition-colors",
    "hover:bg-background",
    "hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ].join(" "),
};
