export const productsHeaderStyles = {
  root: [
    "flex",
    "flex-col",
    "gap-2",
    "sm:flex-row",
    "sm:items-end",
    "sm:justify-between",
  ].join(" "),

  content: "min-w-0",

  eyebrow: [
    "text-xs",
    "font-semibold",
    "uppercase",
    "tracking-[0.16em]",
    "text-primary",
  ].join(" "),

  title: [
    "mt-1",
    "text-2xl",
    "font-bold",
    "tracking-tight",
    "text-foreground",
    "sm:text-3xl",
    "lg:text-4xl",
  ].join(" "),

  description: [
    "mt-2",
    "max-w-2xl",
    "text-sm",
    "leading-6",
    "text-muted-foreground",
    "sm:text-base",
  ].join(" "),

  count: ["shrink-0", "text-sm", "text-muted-foreground"].join(" "),
};
