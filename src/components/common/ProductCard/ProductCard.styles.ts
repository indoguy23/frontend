export const productCardStyles = {
  card: [
    "group overflow-hidden",
    "rounded-2xl border border-border",
    "bg-card text-card-foreground",
    "transition-all duration-300",
    "hover:-translate-y-1",
    "hover:shadow-lg",
  ].join(" "),

  imageWrapper: ["relative aspect-square overflow-hidden", "bg-muted"].join(
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
    "inline-flex h-9 w-9 items-center justify-center",
    "rounded-full border border-border",
    "bg-background/90",
    "text-muted-foreground",
    "shadow-sm backdrop-blur",
    "transition-colors duration-200",
    "hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
  ].join(" "),

  content: "p-4",

  category: [
    "text-xs font-medium uppercase tracking-wide",
    "text-muted-foreground",
  ].join(" "),

  title: ["mt-2 line-clamp-2", "text-base font-semibold text-foreground"].join(
    " ",
  ),

  ratingRow: ["mt-3 flex items-center gap-2", "text-sm"].join(" "),

  priceRow: ["mt-4 flex flex-wrap items-center gap-2"].join(" "),

  price: ["text-lg font-bold", "text-foreground"].join(" "),

  originalPrice: ["text-sm text-muted-foreground", "line-through"].join(" "),

  footer: ["mt-4 flex items-center gap-2"].join(" "),
};
