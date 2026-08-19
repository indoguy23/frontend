export const couponInputStyles = {
  root: "w-full",

  fieldRow: ["flex flex-col gap-3", "sm:flex-row sm:items-start"].join(" "),

  inputWrapper: "min-w-0 flex-1",

  appliedBox: [
    "mt-3 flex flex-col gap-3",
    "rounded-xl border border-success/30",
    "bg-success/10 p-3",
    "sm:flex-row sm:items-center sm:justify-between",
  ].join(" "),

  successText: ["text-sm font-medium", "text-success"].join(" "),

  errorText: ["mt-2 text-sm", "text-destructive"].join(" "),
};
