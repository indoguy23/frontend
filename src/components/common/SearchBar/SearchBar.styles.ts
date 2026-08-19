import { cva } from "class-variance-authority";

export const searchBarVariants = cva(
  [
    "relative flex w-full items-center",
    "rounded-xl border",
    "transition-colors duration-200",
    "focus-within:ring-2 focus-within:ring-ring/20",
  ],
  {
    variants: {
      variant: {
        default: ["border-input", "bg-background", "focus-within:border-ring"],

        filled: ["border-transparent", "bg-muted", "focus-within:border-ring"],

        minimal: [
          "border-transparent",
          "bg-transparent",
          "focus-within:border-border",
        ],
      },

      size: {
        sm: "min-h-9",
        md: "min-h-11",
        lg: "min-h-12",
      },

      disabled: {
        true: ["cursor-not-allowed", "opacity-60"],

        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  },
);

export const searchBarStyles = {
  searchIcon: [
    "pointer-events-none absolute left-4",
    "text-muted-foreground",
  ].join(" "),

  input: [
    "h-full w-full bg-transparent",
    "text-foreground",
    "placeholder:text-muted-foreground",
    "outline-none",
    "disabled:cursor-not-allowed",
  ].join(" "),

  inputSize: {
    sm: "px-10 py-2 text-sm",
    md: "px-11 py-3 text-sm",
    lg: "px-12 py-3 text-base",
  },

  actions: ["absolute right-2", "flex items-center gap-1"].join(" "),

  actionButton: [
    "inline-flex h-8 w-8 items-center justify-center",
    "rounded-lg",
    "text-muted-foreground",
    "transition-colors duration-200",
    "hover:bg-muted hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
  ].join(" "),
};
