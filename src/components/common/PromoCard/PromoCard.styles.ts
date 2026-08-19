export const promoCardStyles = {
  root: [
    "group relative overflow-hidden",
    "rounded-2xl border border-border",
    "bg-card",
  ].join(" "),

  defaultLayout: ["grid min-h-[260px]", "md:grid-cols-[1fr_0.9fr]"].join(" "),

  compactLayout: ["min-h-[220px]"].join(" "),

  content: ["relative z-10 flex", "flex-col justify-center", "p-6 sm:p-7"].join(
    " ",
  ),

  eyebrow: [
    "text-xs font-semibold",
    "uppercase tracking-wider",
    "text-primary",
  ].join(" "),

  title: ["mt-2 text-2xl font-bold", "tracking-tight text-foreground"].join(
    " ",
  ),

  description: [
    "mt-3 max-w-md",
    "text-sm leading-6",
    "text-muted-foreground",
  ].join(" "),

  discount: [
    "mt-4 inline-flex w-fit",
    "rounded-full bg-primary/10",
    "px-3 py-1",
    "text-sm font-semibold",
    "text-primary",
  ].join(" "),

  action: "mt-6",

  imageWrapper: ["relative min-h-[220px]", "overflow-hidden bg-muted"].join(
    " ",
  ),

  image: [
    "absolute inset-0",
    "h-full w-full object-cover",
    "transition-transform duration-500",
    "group-hover:scale-105",
  ].join(" "),

  imageOverlay: [
    "pointer-events-none absolute inset-0",
    "bg-gradient-to-r",
    "from-card/30 to-transparent",
  ].join(" "),

  fallback: [
    "flex h-full min-h-[220px]",
    "items-center justify-center",
    "text-muted-foreground",
  ].join(" "),
};
