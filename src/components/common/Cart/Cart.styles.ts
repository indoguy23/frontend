export const cartStyles = {
  item: [
    "flex flex-col gap-4",
    "rounded-2xl border border-border",
    "bg-card p-4",
    "sm:flex-row sm:items-center",
  ].join(" "),

  image: ["h-24 w-24 shrink-0", "rounded-xl object-cover", "bg-muted"].join(
    " ",
  ),

  itemContent: "min-w-0 flex-1",

  itemName: ["font-semibold text-foreground", "line-clamp-2"].join(" "),

  priceRow: ["mt-2 flex flex-wrap items-center gap-2"].join(" "),

  price: ["font-semibold text-foreground"].join(" "),

  originalPrice: ["text-sm text-muted-foreground", "line-through"].join(" "),

  itemActions: ["mt-4 flex flex-wrap items-center gap-3"].join(" "),

  summary: ["rounded-2xl border border-border", "bg-card p-5"].join(" "),

  summaryTitle: ["text-lg font-semibold", "text-card-foreground"].join(" "),

  summaryRows: "mt-5 space-y-3",

  summaryRow: ["flex items-center justify-between gap-4", "text-sm"].join(" "),

  summaryLabel: "text-muted-foreground",

  summaryValue: "font-medium text-foreground",

  totalRow: [
    "mt-5 flex items-center justify-between",
    "border-t border-border pt-5",
  ].join(" "),
};
