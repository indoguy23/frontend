export const paymentMethodCardStyles = {
  root: [
    "relative rounded-2xl border",
    "border-border bg-card p-5",
    "transition-all duration-200",
  ].join(" "),

  selectable: ["cursor-pointer", "hover:border-primary/50"].join(" "),

  selected: ["border-primary", "ring-1 ring-primary"].join(" "),

  disabled: ["cursor-not-allowed", "opacity-50"].join(" "),

  header: ["flex items-start justify-between gap-4"].join(" "),

  method: ["flex min-w-0 items-start gap-3"].join(" "),

  icon: [
    "flex h-10 w-10 shrink-0",
    "items-center justify-center",
    "rounded-xl bg-muted",
    "text-muted-foreground",
  ].join(" "),

  content: "min-w-0",

  titleRow: ["flex flex-wrap items-center gap-2"].join(" "),

  title: ["font-semibold text-foreground"].join(" "),

  description: ["mt-1 text-sm", "text-muted-foreground"].join(" "),

  maskedValue: ["mt-2 text-sm font-medium", "text-foreground"].join(" "),

  actions: ["mt-5 flex flex-wrap gap-2", "border-t border-border pt-4"].join(
    " ",
  ),
};
