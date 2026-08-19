export const quantitySelectorStyles = {
  root: [
    "inline-flex items-center",
    "rounded-xl border border-border",
    "bg-background",
  ].join(" "),

  disabled: "opacity-60",

  value: [
    "flex items-center justify-center",
    "border-x border-border",
    "font-medium text-foreground",
    "tabular-nums",
  ].join(" "),

  valueSm: ["h-9 min-w-10", "text-sm"].join(" "),

  valueMd: ["h-10 min-w-12", "text-sm"].join(" "),
};
