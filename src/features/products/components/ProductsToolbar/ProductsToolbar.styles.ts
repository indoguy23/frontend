export const productsToolbarStyles = {
  root: [
    "mt-6",
    "flex",
    "items-center",
    "justify-between",
    "gap-3",
    "border-y",
    "border-border",
    "py-3",
  ].join(" "),

  left: ["flex", "items-center", "gap-2"].join(" "),

  filterButton: ["lg:hidden"].join(" "),

  sortWrapper: ["flex", "items-center", "gap-2"].join(" "),

  sortLabel: ["hidden", "text-sm", "text-muted-foreground", "sm:block"].join(
    " ",
  ),

  select: [
    "h-9",
    "min-w-[145px]",
    "rounded-lg",
    "border",
    "border-input",
    "bg-background",
    "px-3",
    "text-sm",
    "text-foreground",
    "outline-none",
    "transition-colors",
    "focus:ring-2",
    "focus:ring-ring",
  ].join(" "),
};
