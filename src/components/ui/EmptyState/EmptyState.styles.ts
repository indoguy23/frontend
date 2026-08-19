import { cva } from "class-variance-authority";

export const emptyStateVariants = cva(
  ["flex w-full flex-col items-center justify-center", "text-center"],
  {
    variants: {
      size: {
        sm: "min-h-48 px-4 py-8",
        md: "min-h-64 px-5 py-10",
        lg: "min-h-80 px-6 py-14",
      },

      variant: {
        default: "",
        bordered: ["rounded-2xl border border-dashed", "border-border bg-card"],
        subtle: ["rounded-2xl", "bg-muted"],
      },
    },

    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

export const emptyStateStyles = {
  iconContainer: [
    "flex h-14 w-14 items-center justify-center",
    "rounded-2xl",
    "bg-primary-subtle",
    "text-primary-subtle-foreground",
  ].join(" "),

  title: ["mt-5 text-lg font-semibold", "text-foreground"].join(" "),

  description: [
    "mt-2 max-w-md text-sm leading-6",
    "text-muted-foreground",
  ].join(" "),

  actions: [
    "mt-6 flex w-full flex-col justify-center gap-3",
    "sm:w-auto sm:flex-row",
  ].join(" "),
};
