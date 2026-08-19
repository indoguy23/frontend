export const notificationPanelStyles = {
  root: ["rounded-2xl border border-border", "bg-card"].join(" "),

  header: [
    "flex flex-col gap-4",
    "border-b border-border p-5",
    "sm:flex-row sm:items-center sm:justify-between",
  ].join(" "),

  titleWrapper: "min-w-0",

  title: ["font-semibold", "text-card-foreground"].join(" "),

  count: ["mt-1 text-sm", "text-muted-foreground"].join(" "),

  actions: ["flex flex-wrap items-center gap-2"].join(" "),

  filters: ["flex items-center gap-2", "border-b border-border px-5 py-3"].join(
    " ",
  ),

  filterButton: [
    "rounded-lg px-3 py-1.5",
    "text-sm font-medium",
    "text-muted-foreground",
    "transition-colors",
    "hover:bg-muted",
    "hover:text-foreground",
  ].join(" "),

  activeFilter: ["bg-muted", "text-foreground"].join(" "),

  list: ["space-y-3 p-5"].join(" "),

  empty: "p-5",
};
