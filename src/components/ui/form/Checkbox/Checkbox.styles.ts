export const checkboxStyles = {
  container: ["flex items-start gap-3", "text-foreground"].join(" "),

  controlWrapper: [
    "relative mt-0.5 flex h-5 w-5 shrink-0",
    "items-center justify-center",
  ].join(" "),

  input: [
    "peer h-5 w-5 appearance-none rounded-md",
    "border border-input bg-background",
    "transition-colors duration-200",
    "checked:border-primary checked:bg-primary",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" "),

  invalidInput: ["border-danger", "focus-visible:ring-danger"].join(" "),

  indicator: [
    "pointer-events-none absolute",
    "hidden text-primary-foreground",
    "peer-checked:block",
  ].join(" "),

  indeterminateIndicator: [
    "pointer-events-none absolute",
    "hidden h-0.5 w-2.5 rounded-full",
    "bg-primary-foreground",
  ].join(" "),

  content: "min-w-0",

  label: ["cursor-pointer text-sm font-medium", "text-foreground"].join(" "),

  disabledLabel: "cursor-not-allowed opacity-60",

  description: ["mt-1 text-sm leading-5", "text-muted-foreground"].join(" "),
};
