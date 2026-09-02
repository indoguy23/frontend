export const productsPaginationStyles = {
  root: [
    "mt-8",
    "flex",
    "flex-col",
    "items-center",
    "justify-between",
    "gap-4",
    "border-t",
    "border-border",
    "pt-6",
    "sm:flex-row",
  ].join(" "),

  info: ["text-sm", "text-muted-foreground"].join(" "),

  controls: ["flex", "items-center", "gap-1"].join(" "),

  pageButton: [
    "flex",
    "h-9",
    "min-w-9",
    "items-center",
    "justify-center",
    "rounded-lg",
    "border",
    "border-border",
    "px-2",
    "text-sm",
    "font-medium",
    "transition-colors",
    "hover:bg-muted",
  ].join(" "),

  activePage: [
    "border-primary",
    "bg-primary",
    "text-primary-foreground",
    "hover:bg-primary",
  ].join(" "),

  disabled: ["pointer-events-none", "opacity-40"].join(" "),
};
