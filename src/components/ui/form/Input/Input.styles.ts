import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "w-full rounded-xl border bg-background text-foreground",
    "placeholder:text-muted-foreground",
    "transition-colors duration-200",
    "outline-none",
    "focus:border-ring focus:ring-2 focus:ring-ring/20",
    "disabled:cursor-not-allowed disabled:opacity-60",
    "read-only:cursor-default read-only:bg-muted",
  ],
  {
    variants: {
      size: {
        sm: "min-h-9 px-3 py-2 text-sm",
        md: "min-h-11 px-4 py-3 text-sm",
        lg: "min-h-12 px-4 py-3 text-base",
      },

      invalid: {
        true: ["border-danger", "focus:border-danger focus:ring-danger/20"],
        false: "border-input",
      },

      hasLeftIcon: {
        true: "",
        false: "",
      },

      hasRightIcon: {
        true: "",
        false: "",
      },
    },

    compoundVariants: [
      {
        size: "sm",
        hasLeftIcon: true,
        className: "pl-10",
      },
      {
        size: "md",
        hasLeftIcon: true,
        className: "pl-11",
      },
      {
        size: "lg",
        hasLeftIcon: true,
        className: "pl-12",
      },
      {
        size: "sm",
        hasRightIcon: true,
        className: "pr-10",
      },
      {
        size: "md",
        hasRightIcon: true,
        className: "pr-11",
      },
      {
        size: "lg",
        hasRightIcon: true,
        className: "pr-12",
      },
    ],

    defaultVariants: {
      size: "md",
      invalid: false,
      hasLeftIcon: false,
      hasRightIcon: false,
    },
  },
);

export const inputWrapperStyles = {
  base: "relative",
  fullWidth: "w-full",
  fitContent: "w-fit",
};

export const inputIconStyles = {
  base: [
    "pointer-events-none absolute top-1/2",
    "-translate-y-1/2 text-muted-foreground",
  ].join(" "),

  left: "left-4",
  right: "right-4",
};
