import { cva } from "class-variance-authority";

export const selectVariants = cva(
  [
    "appearance-none rounded-xl border bg-background text-foreground",
    "transition-colors duration-200",
    "outline-none",
    "focus:border-ring focus:ring-2 focus:ring-ring/20",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ],
  {
    variants: {
      size: {
        sm: "min-h-9 px-3 py-2 pr-9 text-sm",
        md: "min-h-11 px-4 py-3 pr-10 text-sm",
        lg: "min-h-12 px-4 py-3 pr-11 text-base",
      },

      invalid: {
        true: ["border-danger", "focus:border-danger focus:ring-danger/20"],
        false: "border-input",
      },

      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },

    defaultVariants: {
      size: "md",
      invalid: false,
      fullWidth: true,
    },
  },
);

export const selectIconStyles = [
  "pointer-events-none absolute right-4 top-1/2",
  "h-4 w-4 -translate-y-1/2 text-muted-foreground",
].join(" ");
