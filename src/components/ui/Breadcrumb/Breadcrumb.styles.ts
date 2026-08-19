export const breadcrumbStyles = {
  nav: "w-full",

  list: [
    "flex flex-wrap items-center gap-2",
    "text-sm text-muted-foreground",
  ].join(" "),

  item: "inline-flex items-center gap-2",

  link: [
    "inline-flex items-center gap-1.5",
    "rounded-md",
    "transition-colors duration-200",
    "hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
  ].join(" "),

  current: [
    "inline-flex items-center gap-1.5",
    "font-medium text-foreground",
  ].join(" "),

  separator: ["inline-flex items-center", "text-muted-foreground"].join(" "),

  ellipsis: [
    "inline-flex h-6 min-w-6 items-center justify-center",
    "rounded-md text-muted-foreground",
  ].join(" "),
};
