export const orderSummaryStyles = {
  root: ["rounded-2xl border border-border", "bg-card p-5"].join(" "),

  title: ["text-lg font-semibold", "text-card-foreground"].join(" "),

  itemCount: ["mt-1 text-sm", "text-muted-foreground"].join(" "),

  details: ["mt-5 space-y-3"].join(" "),

  row: ["flex items-center", "justify-between gap-4", "text-sm"].join(" "),

  label: "text-muted-foreground",

  value: ["font-medium", "text-foreground"].join(" "),

  discount: ["font-medium", "text-success"].join(" "),

  divider: ["my-5 border-t", "border-border"].join(" "),

  totalRow: ["flex items-center", "justify-between gap-4"].join(" "),

  totalLabel: ["font-semibold", "text-foreground"].join(" "),

  totalValue: ["text-xl font-bold", "text-foreground"].join(" "),

  action: "mt-6 w-full",
};
