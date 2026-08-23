export const categorySectionStyles = {
  root: ["bg-background", "py-12", "sm:py-14", "lg:py-20"].join(" "),

  container: ["mx-auto w-full max-w-7xl", "px-4", "sm:px-6", "lg:px-8"].join(
    " ",
  ),

  header: ["flex items-end justify-between", "gap-4"].join(" "),

  headingGroup: ["min-w-0"].join(" "),

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

  viewAll: ["hidden shrink-0", "sm:inline-flex"].join(" "),

  mobileRail: [
    "mt-7 flex gap-4",
    "overflow-x-auto",
    "pb-3",
    "snap-x snap-mandatory",
    "md:hidden",
  ].join(" "),

  mobileItem: ["w-[72%] shrink-0", "snap-start", "sm:w-[45%]"].join(" "),

  grid: [
    "mt-8",
    "hidden",
    "md:grid",
    "md:grid-cols-3",
    "md:gap-5",
    "lg:grid-cols-6",
    "lg:gap-6",
  ].join(" "),

  mobileAction: ["mt-5", "sm:hidden"].join(" "),
};
