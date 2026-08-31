export const marketplaceBenefitsStyles = {
  root: ["py-8", "sm:py-10", "lg:py-12"].join(" "),

  container: [
    "mx-auto",
    "w-full",
    "max-w-7xl",
    "px-4",
    "sm:px-6",
    "lg:px-8",
  ].join(" "),

  wrapper: [
    "overflow-hidden",
    "rounded-2xl",
    "border",
    "border-border",
    "bg-muted/30",
  ].join(" "),

  grid: ["grid", "grid-cols-2", "lg:grid-cols-4"].join(" "),

  item: [
    "group",
    "relative",
    "flex",
    "min-w-0",
    "flex-col",
    "items-center",
    "px-4",
    "py-6",
    "text-center",
    "sm:px-6",
    "sm:py-7",
    "lg:items-start",
    "lg:px-7",
    "lg:text-left",
  ].join(" "),

  iconWrapper: [
    "flex",
    "h-11",
    "w-11",
    "shrink-0",
    "items-center",
    "justify-center",
    "rounded-xl",
    "bg-primary/10",
    "text-primary",
    "transition-transform",
    "duration-300",
    "group-hover:-translate-y-0.5",
  ].join(" "),

  icon: ["h-5", "w-5"].join(" "),

  title: [
    "mt-4",
    "text-sm",
    "font-semibold",
    "text-foreground",
    "sm:text-base",
  ].join(" "),

  description: [
    "mt-1.5",
    "max-w-xs",
    "text-xs",
    "leading-5",
    "text-muted-foreground",
    "sm:text-sm",
  ].join(" "),
};
