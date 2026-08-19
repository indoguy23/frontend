export const categoryCardStyles = {
  card: [
    "group relative overflow-hidden",
    "rounded-2xl border border-border",
    "bg-card",
    "transition-all duration-300",
    "hover:-translate-y-1",
    "hover:shadow-lg",
  ].join(" "),

  clickable: "cursor-pointer",

  imageWrapper: ["relative aspect-[4/3]", "overflow-hidden bg-muted"].join(" "),

  image: [
    "h-full w-full object-cover",
    "transition-transform duration-500",
    "group-hover:scale-105",
  ].join(" "),

  fallback: [
    "flex h-full w-full",
    "items-center justify-center",
    "text-muted-foreground",
  ].join(" "),

  badge: ["absolute left-3 top-3"].join(" "),

  content: "p-5",

  name: ["text-lg font-semibold", "text-card-foreground"].join(" "),

  description: [
    "mt-2 line-clamp-2",
    "text-sm leading-6",
    "text-muted-foreground",
  ].join(" "),

  footer: ["mt-4 flex items-center", "justify-between gap-3"].join(" "),

  count: ["text-sm", "text-muted-foreground"].join(" "),

  action: [
    "flex h-8 w-8",
    "items-center justify-center",
    "rounded-full border border-border",
    "text-muted-foreground",
    "transition-all duration-200",
    "group-hover:border-primary",
    "group-hover:bg-primary",
    "group-hover:text-primary-foreground",
  ].join(" "),
};
