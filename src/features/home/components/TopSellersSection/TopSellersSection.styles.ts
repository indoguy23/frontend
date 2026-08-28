export const topSellersSectionStyles = {
  root: ["py-8", "sm:py-10", "lg:py-12"].join(" "),

  container: [
    "mx-auto",
    "w-full",
    "max-w-7xl",
    "px-4",
    "sm:px-6",
    "lg:px-8",
  ].join(" "),

  header: ["flex", "items-end", "justify-between", "gap-4"].join(" "),

  headingGroup: "max-w-2xl",

  eyebrow: [
    "text-xs",
    "font-semibold",
    "uppercase",
    "tracking-[0.16em]",
    "text-primary",
  ].join(" "),

  title: [
    "mt-2",
    "text-2xl",
    "font-bold",
    "tracking-tight",
    "text-foreground",
    "sm:text-3xl",
  ].join(" "),

  description: [
    "mt-2",
    "text-sm",
    "leading-6",
    "text-muted-foreground",
    "sm:text-base",
  ].join(" "),

  sellers: [
    "mt-5",
    "grid",
    "grid-cols-1",
    "gap-4",
    "sm:mt-6",
    "sm:grid-cols-2",
    "lg:grid-cols-4",
  ].join(" "),
};
