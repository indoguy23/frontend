export const productCardStyles = {
  card: [
    "group overflow-hidden",
    "flex h-full min-w-0 flex-col",
    "rounded-2xl border border-border",
    "bg-card text-card-foreground",
    "transition-all duration-300",
    "hover:-translate-y-1",
    "hover:shadow-lg",
  ].join(" "),

  imageWrapper: ["relative overflow-hidden", "aspect-[4/3]", "bg-muted"].join(
    " ",
  ),

  image: [
    "h-full w-full object-cover",
    "transition-transform duration-500",
    "group-hover:scale-105",
  ].join(" "),

  imageFallback: [
    "flex h-full w-full items-center justify-center",
    "text-sm text-muted-foreground",
  ].join(" "),

  wishlistButton: [
    "absolute right-3 top-3",
    "inline-flex h-8 w-8 items-center justify-center",
    "rounded-full border border-border",
    "bg-background/90",
    "text-muted-foreground",
    "shadow-sm backdrop-blur",
    "transition-colors duration-200",
    "hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
  ].join(" "),

  content: ["flex min-w-0 flex-1 flex-col", "p-3.5"].join(" "),

  category: [
    "truncate",
    "text-[11px] font-medium uppercase tracking-wide",
    "text-muted-foreground",
  ].join(" "),

  title: [
    "mt-1.5",
    "line-clamp-2",
    "min-h-10",
    "break-words",
    "text-sm font-semibold",
    "leading-5",
    "text-foreground",
  ].join(" "),

  ratingRow: ["mt-2 flex items-center gap-2", "text-sm"].join(" "),

  priceRow: ["mt-2 flex flex-wrap items-center gap-2"].join(" "),

  price: ["text-base font-bold", "text-foreground"].join(" "),

  originalPrice: ["text-xs text-muted-foreground", "line-through"].join(" "),

  footer: ["mt-auto flex items-center gap-2", "pt-3"].join(" "),
};
