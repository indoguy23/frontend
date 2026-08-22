export const mobileNavigationStyles = {
  content: [
    "fixed left-0 top-0",
    "h-screen w-[85%]",
    "max-w-sm",
    "translate-x-0 translate-y-0",
    "rounded-none",
    "border-r border-border",
    "bg-background",
  ].join(" "),

  header: [
    "flex items-center justify-between",
    "border-b border-border",
    "pb-4",
  ].join(" "),

  brand: ["text-xl font-bold tracking-tight", "text-foreground"].join(" "),

  body: ["mt-5 space-y-6"].join(" "),

  sectionTitle: [
    "mb-2 text-xs font-semibold",
    "uppercase tracking-wider",
    "text-muted-foreground",
  ].join(" "),

  nav: "space-y-1",

  link: [
    "flex min-h-11 items-center gap-3",
    "rounded-xl px-3",
    "text-sm font-medium",
    "text-foreground",
    "transition-colors",
    "hover:bg-muted",
  ].join(" "),

  icon: ["h-4 w-4 shrink-0", "text-muted-foreground"].join(" "),
};
