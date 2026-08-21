export const categoryNavigationStyles = {
  root: ["border-b border-border", "bg-background"].join(" "),

  container: [
    "mx-auto flex w-full max-w-7xl",
    "items-center gap-3",
    "px-4",
    "sm:px-6",
    "lg:px-8",
  ].join(" "),

  allCategories: [
    "hidden shrink-0",
    "items-center gap-2",
    "border-r border-border",
    "py-3 pr-5",
    "text-sm font-semibold",
    "text-foreground",
    "transition-colors",
    "hover:text-primary",
    "lg:flex",
  ].join(" "),

  scrollArea: ["min-w-0 flex-1", "overflow-x-auto", "scrollbar-none"].join(" "),

  list: ["flex w-max items-center", "gap-1"].join(" "),

  item: [
    "relative shrink-0",
    "px-3 py-3",
    "text-sm font-medium",
    "text-muted-foreground",
    "transition-colors duration-200",
    "hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
  ].join(" "),

  activeItem: [
    "text-primary",
    "after:absolute",
    "after:bottom-0",
    "after:left-3",
    "after:right-3",
    "after:h-0.5",
    "after:rounded-full",
    "after:bg-primary",
  ].join(" "),
};
