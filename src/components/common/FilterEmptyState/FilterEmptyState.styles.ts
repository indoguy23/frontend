export const filterEmptyStateStyles = {
  root: [
    "flex flex-col items-center",
    "justify-center text-center",
    "rounded-2xl border border-dashed",
    "border-border bg-card",
    "px-6 py-12",
  ].join(" "),

  iconWrapper: [
    "flex h-12 w-12",
    "items-center justify-center",
    "rounded-xl bg-muted",
    "text-muted-foreground",
  ].join(" "),

  title: ["mt-4 text-lg font-semibold", "text-foreground"].join(" "),

  description: [
    "mt-2 max-w-md",
    "text-sm leading-6",
    "text-muted-foreground",
  ].join(" "),

  meta: ["mt-3 flex flex-wrap", "items-center justify-center gap-2"].join(" "),

  badge: [
    "rounded-full bg-muted",
    "px-2.5 py-1",
    "text-xs font-medium",
    "text-muted-foreground",
  ].join(" "),

  actions: ["mt-6 flex flex-wrap", "justify-center gap-3"].join(" "),
};
