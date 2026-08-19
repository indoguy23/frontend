export const ratingInputStyles = {
  root: "inline-flex flex-col gap-2",

  label: ["text-sm font-medium", "text-foreground"].join(" "),

  stars: ["flex items-center gap-1"].join(" "),

  button: [
    "rounded-md",
    "transition-transform duration-150",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "hover:scale-110",
  ].join(" "),

  active: ["fill-current", "text-warning"].join(" "),

  inactive: ["text-muted-foreground/40"].join(" "),

  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};
