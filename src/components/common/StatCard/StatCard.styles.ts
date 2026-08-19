export const statCardStyles = {
  card: [
    "rounded-2xl border border-border",
    "bg-card p-5 text-card-foreground",
    "shadow-sm",
  ].join(" "),

  header: ["flex items-start justify-between gap-4"].join(" "),

  title: ["text-sm font-medium", "text-muted-foreground"].join(" "),

  iconWrapper: [
    "flex h-10 w-10 shrink-0 items-center justify-center",
    "rounded-xl bg-muted",
    "text-foreground",
  ].join(" "),

  value: ["mt-4 text-3xl font-bold", "tracking-tight text-foreground"].join(
    " ",
  ),

  description: ["mt-2 text-sm", "text-muted-foreground"].join(" "),

  footer: ["mt-4 flex flex-wrap items-center gap-2", "text-sm"].join(" "),

  trendBase: ["inline-flex items-center gap-1", "font-medium"].join(" "),

  trendUp: "text-success",

  trendDown: "text-destructive",

  trendNeutral: "text-muted-foreground",

  trendLabel: "text-muted-foreground",
};
