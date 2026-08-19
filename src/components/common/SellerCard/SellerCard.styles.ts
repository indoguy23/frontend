export const sellerCardStyles = {
  card: [
    "group rounded-2xl border border-border",
    "bg-card p-5 text-card-foreground",
    "transition-all duration-300",
    "hover:-translate-y-1",
    "hover:shadow-lg",
  ].join(" "),

  header: ["flex items-start gap-4"].join(" "),

  logo: ["h-14 w-14 shrink-0", "rounded-xl object-cover", "bg-muted"].join(" "),

  logoFallback: [
    "flex h-14 w-14 shrink-0",
    "items-center justify-center",
    "rounded-xl bg-muted",
    "font-semibold text-foreground",
  ].join(" "),

  content: "min-w-0 flex-1",

  nameRow: ["flex flex-wrap items-center gap-2"].join(" "),

  name: ["truncate font-semibold", "text-foreground"].join(" "),

  description: [
    "mt-3 line-clamp-2",
    "text-sm leading-6",
    "text-muted-foreground",
  ].join(" "),

  meta: [
    "mt-4 flex flex-wrap",
    "items-center gap-x-4 gap-y-2",
    "text-sm text-muted-foreground",
  ].join(" "),

  footer: [
    "mt-5 flex items-center",
    "justify-between gap-3",
    "border-t border-border pt-4",
  ].join(" "),
};
