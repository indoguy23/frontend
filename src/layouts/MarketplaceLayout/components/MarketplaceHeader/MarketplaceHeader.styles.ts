export const marketplaceHeaderStyles = {
  root: [
    "sticky top-0 z-50",
    "border-b border-border",
    "bg-background/95",
    "backdrop-blur",
  ].join(" "),

  container: [
    "mx-auto w-full max-w-7xl",
    "px-4 py-3",
    "sm:px-6",
    "lg:px-8",
  ].join(" "),

  desktopRow: ["hidden", "md:flex", "items-center gap-5"].join(" "),

  mobileTopRow: ["flex items-center justify-between gap-3", "md:hidden"].join(
    " ",
  ),

  mobileSearch: ["mt-3", "md:hidden"].join(" "),

  brand: [
    "shrink-0",
    "text-xl font-bold tracking-tight",
    "text-foreground",
  ].join(" "),

  searchWrapper: ["min-w-0 flex-1"].join(" "),

  actions: ["flex shrink-0 items-center gap-1", "sm:gap-2"].join(" "),

  actionButton: ["relative", "rounded-full"].join(" "),

  badge: [
    "absolute -right-1 -top-1",
    "flex min-h-4 min-w-4",
    "items-center justify-center",
    "rounded-full bg-primary",
    "px-1 text-[10px] font-semibold",
    "text-primary-foreground",
  ].join(" "),
};
