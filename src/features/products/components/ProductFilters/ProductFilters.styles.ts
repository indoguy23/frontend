export const productFiltersStyles = {
  root: ["w-full"].join(" "),

  header: ["flex", "items-center", "justify-between", "gap-3"].join(" "),

  title: ["text-base", "font-semibold", "text-foreground"].join(" "),

  clearButton: [
    "text-xs",
    "font-medium",
    "text-primary",
    "transition-opacity",
    "hover:opacity-80",
  ].join(" "),

  section: ["border-b", "border-border", "py-5"].join(" "),

  sectionTitle: ["mb-3", "text-sm", "font-semibold", "text-foreground"].join(
    " ",
  ),

  options: ["space-y-3"].join(" "),

  option: [
    "flex",
    "cursor-pointer",
    "items-center",
    "gap-2.5",
    "text-sm",
    "text-muted-foreground",
    "transition-colors",
    "hover:text-foreground",
  ].join(" "),

  checkbox: ["h-4", "w-4", "rounded", "border-border", "accent-primary"].join(
    " ",
  ),

  priceInputs: ["grid", "grid-cols-2", "gap-2"].join(" "),

  priceInput: [
    "h-9",
    "w-full",
    "min-w-0",
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

  radio: ["h-4", "w-4", "accent-primary"].join(" "),
};
