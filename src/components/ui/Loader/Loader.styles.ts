import { cva } from "class-variance-authority";

export const loaderVariants = cva(
  [
    "inline-block animate-spin rounded-full",
    "border-current border-r-transparent",
  ],
  {
    variants: {
      size: {
        xs: "h-3 w-3 border",
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-9 w-9 border-[3px]",
        xl: "h-12 w-12 border-4",
      },

      variant: {
        primary: "text-primary",
        secondary: "text-secondary",
        foreground: "text-foreground",
        muted: "text-muted-foreground",
        success: "text-success",
        destructive: "text-danger",
        current: "text-current",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  },
);
