export const pageHeaderStyles = {
  root: [
    "flex flex-col gap-5",
    "border-b border-border",
    "pb-6",
    "sm:pb-8",
  ].join(" "),

  breadcrumb: "min-w-0",

  contentRow: [
    "flex flex-col gap-4",
    "sm:flex-row sm:items-start sm:justify-between",
  ].join(" "),

  content: "min-w-0 flex-1",

  title: [
    "text-2xl font-bold tracking-tight",
    "text-foreground",
    "sm:text-3xl",
  ].join(" "),

  description: [
    "mt-2 max-w-3xl",
    "text-sm leading-6",
    "text-muted-foreground",
    "sm:text-base",
  ].join(" "),

  meta: ["mt-3 flex flex-wrap", "items-center gap-2"].join(" "),

  actions: ["flex shrink-0 flex-wrap", "items-center gap-2"].join(" "),
};
