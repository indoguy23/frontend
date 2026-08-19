import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  [
    "rounded-xl border bg-background text-foreground",
    "placeholder:text-muted-foreground",
    "transition-colors duration-200",
    "outline-none",
    "focus:border-ring focus:ring-2 focus:ring-ring/20",
    "disabled:cursor-not-allowed disabled:opacity-60",
    "read-only:cursor-default read-only:bg-muted",
  ],
  {
    variants: {
      size: {
        sm: "min-h-24 px-3 py-2 text-sm",
        md: "min-h-32 px-4 py-3 text-sm",
        lg: "min-h-40 px-4 py-3 text-base",
      },

      invalid: {
        true: ["border-danger", "focus:border-danger focus:ring-danger/20"],
        false: "border-input",
      },

      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },

      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
    },

    defaultVariants: {
      size: "md",
      invalid: false,
      fullWidth: true,
      resize: "vertical",
    },
  },
);
