import { cva } from "class-variance-authority";

export const skeletonVariants = cva(
  [
    "relative overflow-hidden",
    "bg-muted",
    "before:absolute before:inset-0",
    "before:-translate-x-full",
    "before:animate-shimmer",
    "before:bg-gradient-to-r",
    "before:from-transparent",
    "before:via-foreground/5",
    "before:to-transparent",
  ],
  {
    variants: {
      variant: {
        rectangle: "rounded-xl",
        circle: "rounded-full",
        text: "rounded-md",
      },
    },

    defaultVariants: {
      variant: "rectangle",
    },
  },
);
