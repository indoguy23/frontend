import { cva } from "class-variance-authority";

export const alertVariants = cva(
  [
    "relative flex w-full items-start gap-3",
    "rounded-2xl border p-4",
    "text-sm",
  ],
  {
    variants: {
      variant: {
        default: ["border-border", "bg-card", "text-card-foreground"],

        info: [
          "border-info/30",
          "bg-info-subtle",
          "text-info-subtle-foreground",
        ],

        success: [
          "border-success/30",
          "bg-success-subtle",
          "text-success-subtle-foreground",
        ],

        warning: [
          "border-warning/30",
          "bg-warning-subtle",
          "text-warning-subtle-foreground",
        ],

        destructive: [
          "border-danger/30",
          "bg-danger-subtle",
          "text-danger-subtle-foreground",
        ],
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export const alertStyles = {
  icon: ["mt-0.5 flex h-5 w-5 shrink-0", "items-center justify-center"].join(
    " ",
  ),

  content: "min-w-0 flex-1",

  title: ["font-semibold leading-5", "text-current"].join(" "),

  description: ["mt-1 leading-6", "text-current/80"].join(" "),

  action: "ml-auto shrink-0",

  dismissButton: [
    "inline-flex h-8 w-8 items-center justify-center",
    "rounded-lg text-current/70",
    "transition-colors duration-200",
    "hover:bg-foreground/5 hover:text-current",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
  ].join(" "),
};
