export const heroSectionStyles = {
  root: ["relative overflow-hidden", "bg-background"].join(" "),

  container: [
    "mx-auto grid w-full max-w-7xl",
    "items-center gap-8",
    "px-4 pt-10 pb-6",
    "sm:px-6 sm:pt-14 sm:pb-10",
    "lg:grid-cols-2",
    "lg:gap-12",
    "lg:px-8",
    "lg:pt-20 lg:pb-12",
  ].join(" "),

  content: ["order-2", "lg:order-1"].join(" "),

  eyebrow: [
    "text-sm font-semibold",
    "uppercase tracking-[0.16em]",
    "text-primary",
  ].join(" "),

  title: [
    "mt-3",
    "text-4xl font-bold tracking-tight",
    "text-foreground",
    "sm:text-5xl",
    "lg:text-6xl",
  ].join(" "),

  description: [
    "mt-5 max-w-xl",
    "text-base leading-7",
    "text-muted-foreground",
    "sm:text-lg",
  ].join(" "),

  actions: ["mt-7 flex flex-col gap-3", "sm:flex-row"].join(" "),

  visual: ["order-1", "relative", "lg:order-2"].join(" "),

  visualCard: [
    "relative overflow-hidden",
    "rounded-3xl",
    "border border-border",
    "bg-card",
    "shadow-xl",
  ].join(" "),

  image: [
    "h-[280px] w-full",
    "object-cover object-center",
    "sm:h-[380px]",
    "lg:h-[500px]",
  ].join(" "),

  overlay: [
    "pointer-events-none",
    "absolute inset-0",
    "bg-gradient-to-t",
    "from-background/60",
    "via-transparent",
    "to-transparent",
  ].join(" "),

  floatingCard: [
    "absolute bottom-4 left-4",
    "rounded-2xl border border-border",
    "bg-background/90",
    "px-4 py-3",
    "shadow-lg",
    "backdrop-blur-md",
    "sm:bottom-6 sm:left-6",
  ].join(" "),

  floatingTitle: ["text-sm font-semibold", "text-foreground"].join(" "),

  floatingText: ["mt-1 text-xs", "text-muted-foreground"].join(" "),
};
