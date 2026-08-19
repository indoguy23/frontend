export const dataListStyles = {
  root: ["overflow-hidden", "rounded-2xl border border-border", "bg-card"].join(
    " ",
  ),

  item: ["flex items-start gap-4", "p-4", "transition-colors"].join(" "),

  compactItem: "p-3",

  dividedItem: ["border-b border-border", "last:border-b-0"].join(" "),

  clickable: ["cursor-pointer", "hover:bg-muted/40"].join(" "),

  disabled: ["pointer-events-none", "opacity-50"].join(" "),

  leading: "shrink-0",

  content: "min-w-0 flex-1",

  titleRow: ["flex flex-wrap items-start", "justify-between gap-2"].join(" "),

  title: ["min-w-0 font-medium", "text-foreground"].join(" "),

  meta: ["shrink-0 text-xs", "text-muted-foreground"].join(" "),

  description: ["mt-1 text-sm leading-6", "text-muted-foreground"].join(" "),

  trailing: ["shrink-0 self-center"].join(" "),

  empty: "p-6",
};
