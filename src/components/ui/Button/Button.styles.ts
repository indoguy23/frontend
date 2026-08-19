import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-xl font-semibold",
    "transition-all duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-60",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-primary-foreground",
          "hover:bg-primary-hover",
        ],

        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary-hover",
        ],

        outline: [
          "border border-border-strong",
          "bg-surface text-surface-foreground",
          "hover:bg-muted",
        ],

        ghost: ["bg-transparent text-foreground", "hover:bg-muted"],

        destructive: ["bg-danger text-danger-foreground", "hover:opacity-90"],
      },

      size: {
        sm: "min-h-9 px-3 py-2 text-sm",
        md: "min-h-11 px-5 py-3 text-sm",
        lg: "min-h-12 px-6 py-3 text-base",
        icon: "h-11 w-11 p-0",
      },

      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);
