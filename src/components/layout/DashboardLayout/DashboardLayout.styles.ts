export const dashboardLayoutStyles = {
  root: ["min-h-screen", "bg-background", "text-foreground"].join(" "),

  desktopSidebar: ["fixed inset-y-0 left-0 z-40", "hidden lg:block"].join(" "),

  content: ["min-h-screen", "transition-[padding] duration-300"].join(" "),

  expandedContent: "lg:pl-64",

  collapsedContent: "lg:pl-20",

  header: [
    "sticky top-0 z-30",
    "border-b border-border",
    "bg-background/95",
    "backdrop-blur",
  ].join(" "),

  headerInner: [
    "flex min-h-16 items-center justify-between gap-4",
    "px-4 sm:px-6 lg:px-8",
  ].join(" "),

  headerLeft: ["flex min-w-0 items-center gap-3"].join(" "),

  titleWrapper: "min-w-0",

  title: ["truncate text-lg font-semibold", "text-foreground"].join(" "),

  description: [
    "mt-0.5 hidden truncate text-sm",
    "text-muted-foreground sm:block",
  ].join(" "),

  headerActions: ["flex shrink-0 items-center gap-2"].join(" "),

  main: ["px-4 py-6", "sm:px-6 lg:px-8 lg:py-8"].join(" "),

  mobileOverlay: ["fixed inset-0 z-40", "bg-overlay", "lg:hidden"].join(" "),

  mobileSidebar: ["fixed inset-y-0 left-0 z-50", "w-64 lg:hidden"].join(" "),
};
