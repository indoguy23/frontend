import { cva } from "class-variance-authority";

export const tooltipContentVariants = cva(
  [
    "z-50 max-w-xs rounded-lg",
    "bg-foreground px-3 py-2",
    "text-xs leading-5 text-background",
    "shadow-lg",
    "select-none",

    "data-[state=delayed-open]:animate-tooltip-in",
    "data-[state=closed]:animate-tooltip-out",
  ],
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-2 text-xs",
        lg: "px-4 py-3 text-sm",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const tooltipStyles = {
  arrow: "fill-foreground",
};
