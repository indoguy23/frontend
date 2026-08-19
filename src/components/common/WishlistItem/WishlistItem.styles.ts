export const wishlistItemStyles = {
  root: [
    "flex flex-col gap-4",
    "rounded-2xl border border-border",
    "bg-card p-4",
    "sm:flex-row sm:items-center",
  ].join(" "),

  image: ["h-28 w-28 shrink-0", "rounded-xl object-cover", "bg-muted"].join(
    " ",
  ),

  fallback: [
    "flex h-28 w-28 shrink-0",
    "items-center justify-center",
    "rounded-xl bg-muted",
    "text-muted-foreground",
  ].join(" "),

  content: "min-w-0 flex-1",

  category: [
    "text-xs font-medium uppercase tracking-wide",
    "text-muted-foreground",
  ].join(" "),

  name: ["mt-1 line-clamp-2", "font-semibold text-foreground"].join(" "),

  meta: ["mt-3 flex flex-wrap items-center gap-3"].join(" "),

  actions: ["mt-4 flex flex-wrap gap-2"].join(" "),
};
