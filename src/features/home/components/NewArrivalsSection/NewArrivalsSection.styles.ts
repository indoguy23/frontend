export const newArrivalsSectionStyles = {
  root: ["bg-background", "py-8", "sm:py-10", "lg:py-12"].join(" "),

  container: ["mx-auto w-full max-w-7xl", "px-4", "sm:px-6", "lg:px-8"].join(
    " ",
  ),

  header: ["flex items-end justify-between", "gap-4"].join(" "),

  headingGroup: "min-w-0",

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

  desktopAction: ["hidden shrink-0", "sm:inline-flex"].join(" "),

  products: ["mt-5", "sm:mt-6"].join(" "),

  mobileAction: ["mt-5", "sm:hidden"].join(" "),
};
