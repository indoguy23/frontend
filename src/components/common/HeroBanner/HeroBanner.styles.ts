export const heroBannerStyles = {
  root: [
    "relative overflow-hidden",
    "rounded-3xl border border-border",
    "bg-card",
  ].join(" "),

  grid: ["grid items-center gap-8", "p-6 sm:p-8 lg:grid-cols-2 lg:p-10"].join(
    " ",
  ),

  centered: ["text-center", "lg:grid-cols-1"].join(" "),

  content: "min-w-0",

  eyebrow: ["text-sm font-semibold", "text-primary"].join(" "),

  title: [
    "mt-3 text-3xl font-bold tracking-tight",
    "text-foreground",
    "sm:text-4xl",
    "lg:text-5xl",
  ].join(" "),

  description: [
    "mt-4 max-w-2xl",
    "text-base leading-7",
    "text-muted-foreground",
  ].join(" "),

  actions: ["mt-6 flex flex-wrap gap-3"].join(" "),

  imageWrapper: ["relative overflow-hidden", "rounded-2xl bg-muted"].join(" "),

  image: ["aspect-[4/3] h-full w-full", "object-cover"].join(" "),

  fallback: [
    "flex aspect-[4/3]",
    "items-center justify-center",
    "text-muted-foreground",
  ].join(" "),
};
