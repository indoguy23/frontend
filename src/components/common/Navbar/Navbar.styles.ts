export const navbarStyles = {
  root: [
    "sticky top-0 z-40",
    "border-b border-border",
    "bg-background/95",
    "backdrop-blur",
  ].join(" "),

  container: [
    "mx-auto flex h-16 max-w-7xl items-center gap-4",
    "px-4 sm:px-6 lg:px-8",
  ].join(" "),

  brand: ["shrink-0 text-xl font-bold", "text-foreground"].join(" "),

  nav: ["hidden items-center gap-6", "lg:flex"].join(" "),

  navLink: [
    "text-sm font-medium",
    "text-muted-foreground",
    "transition-colors",
    "hover:text-foreground",
  ].join(" "),

  search: ["hidden flex-1", "md:block"].join(" "),

  actions: ["ml-auto flex items-center gap-2"].join(" "),

  iconWrapper: "relative",

  count: [
    "absolute -right-1 -top-1",
    "flex h-5 min-w-5 items-center justify-center",
    "rounded-full px-1",
    "bg-primary text-primary-foreground",
    "text-[10px] font-semibold",
  ].join(" "),

  mobileButton: "lg:hidden",

  mobilePanel: [
    "border-t border-border",
    "bg-background",
    "px-4 py-4",
    "lg:hidden",
  ].join(" "),

  mobileNav: "space-y-1",

  mobileLink: [
    "block rounded-lg px-3 py-2",
    "text-sm font-medium",
    "text-muted-foreground",
    "transition-colors",
    "hover:bg-muted hover:text-foreground",
  ].join(" "),
};
