export const reviewStyles = {
  card: ["rounded-2xl border border-border", "bg-card p-5"].join(" "),

  header: ["flex items-start justify-between gap-4"].join(" "),

  author: ["flex min-w-0 items-center gap-3"].join(" "),

  authorInfo: "min-w-0",

  authorName: ["truncate text-sm font-semibold", "text-foreground"].join(" "),

  date: ["mt-1 text-xs", "text-muted-foreground"].join(" "),

  title: ["mt-4 font-semibold", "text-foreground"].join(" "),

  comment: ["mt-2 text-sm leading-6", "text-muted-foreground"].join(" "),

  footer: [
    "mt-5 flex flex-wrap items-center justify-between gap-3",
    "border-t border-border pt-4",
  ].join(" "),

  summary: ["rounded-2xl border border-border", "bg-card p-5"].join(" "),

  average: ["text-4xl font-bold", "text-foreground"].join(" "),

  breakdown: ["mt-6 space-y-3"].join(" "),

  breakdownRow: [
    "grid grid-cols-[44px_minmax(0,1fr)_40px]",
    "items-center gap-3",
  ].join(" "),

  progress: ["h-2 overflow-hidden", "rounded-full bg-muted"].join(" "),

  progressValue: ["h-full rounded-full", "bg-warning"].join(" "),
};
