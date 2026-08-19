export const statusBadgeStyles = {
  base: [
    "inline-flex items-center gap-1.5",
    "rounded-full border",
    "px-2.5 py-1",
    "text-xs font-medium",
  ].join(" "),

  dot: "h-1.5 w-1.5 rounded-full",

  success: ["border-success/20", "bg-success/10", "text-success"].join(" "),

  warning: ["border-warning/20", "bg-warning/10", "text-warning"].join(" "),

  danger: [
    "border-destructive/20",
    "bg-destructive/10",
    "text-destructive",
  ].join(" "),

  neutral: ["border-border", "bg-muted", "text-muted-foreground"].join(" "),

  info: ["border-primary/20", "bg-primary/10", "text-primary"].join(" "),

  successDot: "bg-success",

  warningDot: "bg-warning",

  dangerDot: "bg-destructive",

  neutralDot: "bg-muted-foreground",

  infoDot: "bg-primary",
};
