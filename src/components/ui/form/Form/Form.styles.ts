import { cva } from "class-variance-authority";

export const formVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "space-y-0",
      sm: "space-y-3",
      md: "space-y-5",
      lg: "space-y-7",
    },
  },

  defaultVariants: {
    spacing: "md",
  },
});
