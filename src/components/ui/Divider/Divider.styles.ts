import { cva } from "class-variance-authority";

export const dividerVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full min-h-6 w-px",
    },

    spacing: {
      none: "",
      sm: "",
      md: "",
      lg: "",
    },
  },

  compoundVariants: [
    {
      orientation: "horizontal",
      spacing: "sm",
      className: "my-3",
    },
    {
      orientation: "horizontal",
      spacing: "md",
      className: "my-5",
    },
    {
      orientation: "horizontal",
      spacing: "lg",
      className: "my-8",
    },
    {
      orientation: "vertical",
      spacing: "sm",
      className: "mx-3",
    },
    {
      orientation: "vertical",
      spacing: "md",
      className: "mx-5",
    },
    {
      orientation: "vertical",
      spacing: "lg",
      className: "mx-8",
    },
  ],

  defaultVariants: {
    orientation: "horizontal",
    spacing: "none",
  },
});
