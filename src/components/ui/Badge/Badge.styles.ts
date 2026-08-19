import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex w-fit items-center justify-center gap-1.5",
    "rounded-full border font-medium",
    "whitespace-nowrap",
    "transition-colors duration-200",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-transparent",
          "bg-primary-subtle",
          "text-primary-subtle-foreground",
        ],

        secondary: [
          "border-transparent",
          "bg-secondary-subtle",
          "text-secondary-subtle-foreground",
        ],

        success: [
          "border-transparent",
          "bg-success-subtle",
          "text-success-subtle-foreground",
        ],

        warning: [
          "border-transparent",
          "bg-warning-subtle",
          "text-warning-subtle-foreground",
        ],

        destructive: [
          "border-transparent",
          "bg-danger-subtle",
          "text-danger-subtle-foreground",
        ],

        info: [
          "border-transparent",
          "bg-info-subtle",
          "text-info-subtle-foreground",
        ],

        outline: ["border-border-strong", "bg-transparent", "text-foreground"],
      },

      size: {
        sm: "min-h-6 px-2 py-0.5 text-xs",
        md: "min-h-7 px-2.5 py-1 text-xs",
        lg: "min-h-8 px-3 py-1 text-sm",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);
