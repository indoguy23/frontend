export const reviewFormStyles = {
  root: "w-full",

  fields: "space-y-5",

  field: "space-y-2",

  label: ["text-sm font-medium", "text-foreground"].join(" "),

  error: ["text-sm", "text-destructive"].join(" "),

  footer: [
    "mt-6 flex flex-col gap-3",
    "sm:flex-row sm:items-center sm:justify-between",
  ].join(" "),

  hint: ["text-xs", "text-muted-foreground"].join(" "),
};
