export const addressCardStyles = {
  card: [
    "relative rounded-2xl border",
    "border-border bg-card p-5",
    "transition-colors",
  ].join(" "),

  selectable: ["cursor-pointer", "hover:border-primary/50"].join(" "),

  selected: ["border-primary", "ring-1 ring-primary"].join(" "),

  header: ["flex items-start", "justify-between gap-4"].join(" "),

  nameRow: ["flex flex-wrap items-center gap-2"].join(" "),

  name: ["font-semibold", "text-card-foreground"].join(" "),

  phone: ["mt-1 text-sm", "text-muted-foreground"].join(" "),

  address: ["mt-4 text-sm leading-6", "text-muted-foreground"].join(" "),

  actions: [
    "mt-5 flex flex-wrap items-center gap-2",
    "border-t border-border pt-4",
  ].join(" "),
};
