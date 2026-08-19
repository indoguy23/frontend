export const infoListStyles = {
  root: "w-full",

  grid: "grid",

  columns1: "grid-cols-1",

  columns2: ["grid-cols-1", "md:grid-cols-2"].join(" "),

  columns3: ["grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3"].join(" "),

  bordered: [
    "overflow-hidden",
    "rounded-2xl",
    "border border-border",
    "bg-card",
  ].join(" "),

  item: ["min-w-0 p-4"].join(" "),

  borderedItem: [
    "border-b border-border",
    "last:border-b-0",
    "md:border-r",
  ].join(" "),

  label: [
    "text-xs font-medium",
    "uppercase tracking-wide",
    "text-muted-foreground",
  ].join(" "),

  value: ["mt-1.5 break-words", "text-sm font-medium", "text-foreground"].join(
    " ",
  ),

  description: ["mt-1 text-xs leading-5", "text-muted-foreground"].join(" "),
};
