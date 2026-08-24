export const spotlightSectionStyles = {
  root: ["overflow-hidden", "bg-muted/30", "py-8", "sm:py-10", "lg:py-12"].join(
    " ",
  ),

  container: ["mx-auto w-full max-w-7xl", "px-4", "sm:px-6", "lg:px-8"].join(
    " ",
  ),

  header: "text-center",

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
    "mx-auto mt-2 max-w-2xl",
    "text-sm leading-6",
    "text-muted-foreground",
    "sm:text-base",
  ].join(" "),

  carousel: ["mt-6", "sm:mt-8"].join(" "),

  card: [
    "overflow-hidden",
    "rounded-3xl",
    "border border-border",
    "bg-card",
    "shadow-xl",
  ].join(" "),

  imageWrapper: [
    "relative",
    "h-[230px]",
    "overflow-hidden",
    "bg-muted",
    "sm:h-[280px]",
    "lg:h-[320px]",
  ].join(" "),

  image: ["h-full w-full", "object-cover object-center"].join(" "),

  overlay: [
    "pointer-events-none",
    "absolute inset-0",
    "bg-gradient-to-t",
    "from-background/90",
    "via-background/10",
    "to-transparent",
  ].join(" "),

  content: ["p-5", "sm:p-6"].join(" "),

  cardEyebrow: [
    "text-xs font-semibold",
    "uppercase tracking-wide",
    "text-primary",
  ].join(" "),

  cardTitle: [
    "mt-2",
    "text-xl font-semibold",
    "text-foreground",
    "sm:text-2xl",
  ].join(" "),

  cardDescription: ["mt-2", "text-sm leading-6", "text-muted-foreground"].join(
    " ",
  ),

  footer: [
    "mt-5",
    "flex flex-col gap-3",
    "sm:flex-row",
    "sm:items-center",
    "sm:justify-between",
  ].join(" "),

  price: ["text-sm font-semibold", "text-foreground"].join(" "),
};
