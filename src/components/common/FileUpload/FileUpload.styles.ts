export const fileUploadStyles = {
  container: "w-full",

  dropzone: [
    "relative flex min-h-44 w-full cursor-pointer",
    "flex-col items-center justify-center",
    "rounded-2xl border border-dashed border-border",
    "bg-background p-6 text-center",
    "transition-colors duration-200",
    "hover:bg-muted/50",
    "focus-within:ring-2 focus-within:ring-ring",
  ].join(" "),

  dragging: ["border-primary", "bg-primary-subtle"].join(" "),

  disabled: ["cursor-not-allowed", "opacity-60"].join(" "),

  invalid: ["border-destructive"].join(" "),

  iconWrapper: [
    "flex h-12 w-12 items-center justify-center",
    "rounded-xl bg-muted",
    "text-muted-foreground",
  ].join(" "),

  title: ["mt-4 text-sm font-semibold", "text-foreground"].join(" "),

  description: ["mt-1 text-sm", "text-muted-foreground"].join(" "),

  helperText: ["mt-2 text-xs", "text-muted-foreground"].join(" "),

  error: ["mt-2 text-sm", "text-destructive"].join(" "),

  preview: [
    "mt-4 flex items-center gap-4",
    "rounded-xl border border-border",
    "bg-card p-3",
  ].join(" "),

  previewImage: [
    "h-16 w-16 shrink-0",
    "rounded-lg object-cover",
    "bg-muted",
  ].join(" "),

  fileInfo: "min-w-0 flex-1",

  fileName: ["truncate text-sm font-medium", "text-foreground"].join(" "),

  fileSize: ["mt-1 text-xs", "text-muted-foreground"].join(" "),
};
