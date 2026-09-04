export const productGalleryStyles = {
  root: ["grid", "gap-4", "sm:grid-cols-[72px_minmax(0,1fr)]"].join(" "),

  thumbnails: [
    "order-2",
    "flex",
    "gap-3",
    "overflow-x-auto",
    "sm:order-1",
    "sm:flex-col",
    "sm:overflow-visible",
  ].join(" "),

  thumbnailButton: [
    "shrink-0",
    "overflow-hidden",
    "rounded-xl",
    "border",
    "border-border",
    "bg-muted",
    "transition-all",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
  ].join(" "),

  activeThumbnail: ["border-primary", "ring-2", "ring-primary/20"].join(" "),

  thumbnailImage: [
    "h-16",
    "w-16",
    "object-cover",
    "sm:h-[68px]",
    "sm:w-[68px]",
  ].join(" "),

  mainWrapper: [
    "order-1",
    "relative",
    "overflow-hidden",
    "rounded-2xl",
    "border",
    "border-border",
    "bg-muted",
    "sm:order-2",
  ].join(" "),

  mainImage: ["aspect-square", "h-full", "w-full", "object-cover"].join(" "),

  fallback: [
    "flex",
    "aspect-square",
    "items-center",
    "justify-center",
    "text-muted-foreground",
  ].join(" "),
};
