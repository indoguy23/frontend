export const radioGroupStyles = {
  group: {
    vertical: "flex flex-col gap-4",
    horizontal: "flex flex-wrap gap-4",
  },

  option: [
    "flex items-start gap-3",
    "rounded-xl border border-border bg-background p-4",
    "transition-colors duration-200",
    "has-[:checked]:border-primary",
    "has-[:checked]:bg-primary-subtle",
  ].join(" "),

  disabledOption: "cursor-not-allowed opacity-60",

  controlWrapper: [
    "relative mt-0.5 flex h-5 w-5 shrink-0",
    "items-center justify-center",
  ].join(" "),

  input: [
    "peer h-5 w-5 appearance-none rounded-full",
    "border border-input bg-background",
    "transition-colors duration-200",
    "checked:border-primary",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed",
  ].join(" "),

  invalidInput: ["border-danger", "focus-visible:ring-danger"].join(" "),

  indicator: [
    "pointer-events-none absolute",
    "hidden h-2.5 w-2.5 rounded-full",
    "bg-primary",
    "peer-checked:block",
  ].join(" "),

  content: "min-w-0",

  label: ["cursor-pointer text-sm font-medium", "text-foreground"].join(" "),

  description: ["mt-1 text-sm leading-5", "text-muted-foreground"].join(" "),
};
