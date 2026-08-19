export const orderItemStyles = {
  root: [
    "flex flex-col gap-4",
    "border-b border-border py-5",
    "last:border-b-0",
    "sm:flex-row sm:items-start",
  ].join(" "),

  image: ["h-24 w-24 shrink-0", "rounded-xl object-cover", "bg-muted"].join(
    " ",
  ),

  imageFallback: [
    "flex h-24 w-24 shrink-0",
    "items-center justify-center",
    "rounded-xl bg-muted",
    "text-muted-foreground",
  ].join(" "),

  content: "min-w-0 flex-1",

  header: [
    "flex flex-col gap-3",
    "sm:flex-row",
    "sm:items-start",
    "sm:justify-between",
  ].join(" "),

  name: ["line-clamp-2", "font-semibold text-foreground"].join(" "),

  seller: ["mt-1 text-xs", "text-muted-foreground"].join(" "),

  variant: ["mt-2 text-sm", "text-muted-foreground"].join(" "),

  quantity: ["mt-1 text-sm", "text-muted-foreground"].join(" "),

  price: ["shrink-0", "sm:text-right"].join(" "),

  total: ["mt-2 text-sm", "text-muted-foreground"].join(" "),

  actions: ["mt-4 flex flex-wrap gap-2"].join(" "),
};
