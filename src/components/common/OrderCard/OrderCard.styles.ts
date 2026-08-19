export const orderCardStyles = {
  root: ["rounded-2xl border border-border", "bg-card p-5"].join(" "),

  header: [
    "flex flex-col gap-4",
    "sm:flex-row sm:items-start sm:justify-between",
  ].join(" "),

  orderNumber: ["font-semibold text-foreground"].join(" "),

  date: ["mt-1 text-sm", "text-muted-foreground"].join(" "),

  items: ["mt-5 space-y-3", "border-t border-border pt-5"].join(" "),

  item: ["flex items-center gap-3"].join(" "),

  image: ["h-12 w-12 shrink-0", "rounded-lg object-cover", "bg-muted"].join(
    " ",
  ),

  fallbackImage: [
    "flex h-12 w-12 shrink-0",
    "items-center justify-center",
    "rounded-lg bg-muted",
    "text-muted-foreground",
  ].join(" "),

  itemInfo: "min-w-0 flex-1",

  itemName: ["truncate text-sm font-medium", "text-foreground"].join(" "),

  quantity: ["mt-1 text-xs", "text-muted-foreground"].join(" "),

  footer: [
    "mt-5 flex flex-col gap-4",
    "border-t border-border pt-5",
    "sm:flex-row sm:items-center sm:justify-between",
  ].join(" "),

  totalLabel: ["text-sm", "text-muted-foreground"].join(" "),

  totalValue: ["mt-1 text-lg font-bold", "text-foreground"].join(" "),

  actions: ["flex flex-wrap gap-2"].join(" "),
};
