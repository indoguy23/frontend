export const sectionHeaderStyles = {
  root: [
    "flex flex-col gap-4",
    "sm:flex-row sm:items-end sm:justify-between",
  ].join(" "),

  center: ["items-center text-center", "sm:flex-col sm:items-center"].join(" "),

  content: "min-w-0",

  eyebrow: ["text-sm font-semibold", "text-primary"].join(" "),

  title: [
    "text-2xl font-bold tracking-tight",
    "text-foreground",
    "sm:text-3xl",
  ].join(" "),

  description: [
    "mt-2 max-w-2xl",
    "text-sm leading-6",
    "text-muted-foreground",
    "sm:text-base",
  ].join(" "),

  action: ["shrink-0"].join(" "),
};
