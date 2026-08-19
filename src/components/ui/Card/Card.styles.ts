import { cva } from "class-variance-authority";

export const cardVariants = cva(
  ["rounded-2xl border", "text-card-foreground", "transition-all duration-200"],
  {
    variants: {
      variant: {
        default: ["border-border", "bg-card", "shadow-sm"],

        elevated: ["border-border", "bg-card", "shadow-lg"],

        outlined: ["border-border-strong", "bg-transparent", "shadow-none"],

        subtle: ["border-transparent", "bg-muted", "shadow-none"],
      },

      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },

      interactive: {
        true: [
          "cursor-pointer",
          "hover:-translate-y-0.5",
          "hover:border-primary",
          "hover:shadow-lg",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-ring",
          "focus-visible:ring-offset-2",
          "focus-visible:ring-offset-background",
        ],

        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "md",
      interactive: false,
    },
  },
);
