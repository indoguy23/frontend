export const footerStyles = {
  root: ["mt-8", "border-t", "border-border", "bg-muted/30"].join(" "),

  container: [
    "mx-auto",
    "w-full",
    "max-w-7xl",
    "px-4",
    "sm:px-6",
    "lg:px-8",
  ].join(" "),

  main: [
    "grid",
    "gap-8",
    "py-10",
    "sm:grid-cols-2",
    "lg:grid-cols-[1.2fr_2fr_1.2fr]",
    "lg:gap-10",
    "lg:py-12",
  ].join(" "),

  brand: ["max-w-sm"].join(" "),

  logo: ["text-xl", "font-bold", "tracking-tight", "text-foreground"].join(" "),

  logoAccent: ["text-primary"].join(" "),

  description: ["mt-3", "text-sm", "leading-6", "text-muted-foreground"].join(
    " ",
  ),

  linkColumns: [
    "grid",
    "grid-cols-2",
    "gap-6",
    "sm:col-span-2",
    "sm:grid-cols-3",
    "lg:col-span-1",
  ].join(" "),

  sectionTitle: ["text-sm", "font-semibold", "text-foreground"].join(" "),

  linkList: ["mt-3", "space-y-2"].join(" "),

  link: [
    "text-sm",
    "text-muted-foreground",
    "transition-colors",
    "duration-200",
    "hover:text-foreground",
  ].join(" "),

  newsletter: ["sm:col-span-2", "lg:col-span-1"].join(" "),

  newsletterTitle: ["text-sm", "font-semibold", "text-foreground"].join(" "),

  newsletterDescription: [
    "mt-2",
    "text-sm",
    "leading-6",
    "text-muted-foreground",
  ].join(" "),

  newsletterForm: [
    "mt-4",
    "flex",
    "flex-col",
    "gap-2",
    "sm:flex-row",
    "lg:flex-col",
    "xl:flex-row",
  ].join(" "),

  input: [
    "h-10",
    "min-w-0",
    "flex-1",
    "rounded-lg",
    "border",
    "border-input",
    "bg-background",
    "px-3",
    "text-sm",
    "text-foreground",
    "outline-none",
    "placeholder:text-muted-foreground",
    "focus:ring-2",
    "focus:ring-ring",
  ].join(" "),

  bottom: [
    "flex",
    "flex-col",
    "gap-3",
    "border-t",
    "border-border",
    "py-5",
    "text-sm",
    "text-muted-foreground",
    "sm:flex-row",
    "sm:items-center",
    "sm:justify-between",
  ].join(" "),

  legalLinks: ["flex", "flex-wrap", "gap-x-5", "gap-y-2"].join(" "),

  legalLink: ["transition-colors", "hover:text-foreground"].join(" "),
};
