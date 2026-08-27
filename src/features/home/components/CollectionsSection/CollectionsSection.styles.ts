export const collectionsSectionStyles = {
  root: ["bg-background", "py-8", "sm:py-10", "lg:py-12"].join(" "),

  container: ["mx-auto w-full max-w-7xl", "px-4", "sm:px-6", "lg:px-8"].join(
    " ",
  ),

  header: ["flex items-end justify-between gap-4"].join(" "),

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

  grid: ["mt-6 grid", "grid-cols-1 gap-4", "sm:grid-cols-2", "lg:gap-6"].join(
    " ",
  ),

  card: [
    "group relative",
    "min-h-[280px]",
    "overflow-hidden rounded-3xl",
    "border border-border",
    "sm:min-h-[320px]",
    "lg:min-h-[360px]",
  ].join(" "),

  image: [
    "absolute inset-0",
    "h-full w-full object-cover",
    "transition-transform duration-700",
    "group-hover:scale-105",
  ].join(" "),

  overlay: [
    "absolute inset-0",
    "bg-gradient-to-t",
    "from-black/80",
    "via-black/30",
    "to-black/5",
  ].join(" "),

  content: [
    "relative z-10",
    "flex h-full min-h-[280px]",
    "flex-col justify-end",
    "p-5",
    "sm:min-h-[320px] sm:p-6",
    "lg:min-h-[360px]",
  ].join(" "),

  cardEyebrow: [
    "text-xs font-semibold",
    "uppercase tracking-[0.14em]",
    "text-white/80",
  ].join(" "),

  cardTitle: ["mt-2", "text-2xl font-semibold", "text-white"].join(" "),

  cardDescription: ["mt-2 max-w-md", "text-sm leading-6", "text-white/75"].join(
    " ",
  ),

  action: ["mt-5", "w-fit"].join(" "),
};
