export const productImageGalleryStyles = {
  root: ["grid gap-4", "md:grid-cols-[88px_minmax(0,1fr)]"].join(" "),

  thumbnails: [
    "order-2 flex gap-3 overflow-x-auto",
    "md:order-1 md:flex-col md:overflow-y-auto",
  ].join(" "),

  thumbnailButton: [
    "shrink-0 overflow-hidden",
    "rounded-xl border border-border",
    "bg-muted",
    "transition-all duration-200",
    "hover:border-foreground/30",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
  ].join(" "),

  activeThumbnail: ["border-primary", "ring-2 ring-primary/20"].join(" "),

  thumbnailImage: ["h-20 w-20 object-cover"].join(" "),

  main: [
    "order-1 relative overflow-hidden",
    "rounded-2xl border border-border",
    "bg-muted",
    "md:order-2",
  ].join(" "),

  mainImage: ["aspect-square h-full w-full", "object-contain"].join(" "),

  fallback: [
    "flex aspect-square items-center justify-center",
    "text-muted-foreground",
  ].join(" "),
};
