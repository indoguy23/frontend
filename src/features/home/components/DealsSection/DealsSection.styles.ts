export const dealsSectionStyles = {
  root: ["bg-background", "py-8", "sm:py-10", "lg:py-12"].join(" "),

  container: ["mx-auto w-full max-w-7xl", "px-4", "sm:px-6", "lg:px-8"].join(
    " ",
  ),

  header: "min-w-0",

  eyebrow: [
    "text-sm font-semibold",
    "uppercase tracking-[0.14em]",
    "text-primary",
  ].join(" "),

  title: [
    "mt-2",
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

  grid: [
    "mt-6 grid",
    "grid-cols-1",
    "gap-5",
    "lg:grid-cols-2",
    "lg:gap-6",
  ].join(" "),
};
