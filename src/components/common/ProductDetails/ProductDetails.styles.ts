export const productDetailsStyles = {
  root: ["grid gap-8", "lg:grid-cols-2", "lg:items-start"].join(" "),

  content: "min-w-0",

  category: [
    "text-sm font-medium uppercase tracking-wide",
    "text-muted-foreground",
  ].join(" "),

  title: [
    "mt-2 text-3xl font-bold tracking-tight",
    "text-foreground",
    "sm:text-4xl",
  ].join(" "),

  ratingRow: ["mt-4 flex flex-wrap items-center gap-3", "text-sm"].join(" "),

  priceRow: ["mt-6 flex flex-wrap items-center gap-3"].join(" "),

  price: ["text-3xl font-bold", "text-foreground"].join(" "),

  originalPrice: ["text-lg text-muted-foreground", "line-through"].join(" "),

  description: ["mt-6 leading-7", "text-muted-foreground"].join(" "),

  divider: "my-6 h-px bg-border",

  quantitySection: ["flex flex-col gap-3", "sm:flex-row sm:items-center"].join(
    " ",
  ),

  actions: ["mt-6 flex flex-col gap-3", "sm:flex-row"].join(" "),
};
