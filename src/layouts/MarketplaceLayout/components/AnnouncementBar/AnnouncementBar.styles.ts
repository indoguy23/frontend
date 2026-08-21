export const announcementBarStyles = {
  root: [
    "hidden",
    "border-b border-border",
    "bg-muted/40",
    "text-muted-foreground",
    "md:block",
  ].join(" "),

  container: [
    "mx-auto flex w-full max-w-7xl",
    "items-center justify-between",
    "gap-4 px-6 py-2",
    "lg:px-8",
  ].join(" "),

  message: ["text-xs font-medium"].join(" "),

  links: ["flex items-center gap-4", "text-xs font-medium"].join(" "),

  link: [
    "transition-colors",
    "hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "rounded-sm",
  ].join(" "),

  separator: ["h-3 w-px", "bg-border"].join(" "),
};
