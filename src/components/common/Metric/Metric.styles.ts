export const metricStyles = {
  root: [
    "rounded-xl border border-border",
    "bg-card p-4",
  ].join(" "),

  header: [
    "flex items-start justify-between gap-3",
  ].join(" "),

  label: [
    "text-xs font-medium",
    "uppercase tracking-wide",
    "text-muted-foreground",
  ].join(" "),

  icon: [
    "flex h-8 w-8 shrink-0",
    "items-center justify-center",
    "rounded-lg bg-muted",
    "text-muted-foreground",
  ].join(" "),

  value: [
    "mt-2 text-xl font-semibold",
    "text-foreground",
  ].join(" "),

  footer: [
    "mt-2 flex flex-wrap items-center gap-2",
    "text-xs",
  ].join(" "),

  description: "text-muted-foreground",

  trendUp: "text-success",

  trendDown: "text-destructive",

  trendNeutral: "text-muted-foreground",
};