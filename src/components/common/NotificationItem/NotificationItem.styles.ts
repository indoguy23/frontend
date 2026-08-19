export const notificationItemStyles = {
  root: [
    "flex gap-4 rounded-2xl border",
    "border-border bg-card p-4",
    "transition-colors",
  ].join(" "),

  clickable: ["cursor-pointer", "hover:bg-muted/40"].join(" "),

  unread: ["border-primary/20", "bg-primary/5"].join(" "),

  iconWrapper: [
    "flex h-10 w-10 shrink-0",
    "items-center justify-center",
    "rounded-xl",
  ].join(" "),

  info: ["bg-primary/10", "text-primary"].join(" "),

  success: ["bg-success/10", "text-success"].join(" "),

  warning: ["bg-warning/10", "text-warning"].join(" "),

  error: ["bg-destructive/10", "text-destructive"].join(" "),

  content: "min-w-0 flex-1",

  header: ["flex items-start justify-between gap-4"].join(" "),

  title: ["font-medium text-foreground"].join(" "),

  timestamp: ["shrink-0 text-xs", "text-muted-foreground"].join(" "),

  description: ["mt-1 text-sm leading-6", "text-muted-foreground"].join(" "),

  footer: ["mt-3 flex items-center gap-3"].join(" "),

  unreadDot: ["h-2 w-2 rounded-full", "bg-primary"].join(" "),
};
