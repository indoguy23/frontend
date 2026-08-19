import { cva } from "class-variance-authority";

export const tabsListVariants = cva(
  ["flex w-fit min-w-max items-center gap-1", "rounded-xl bg-muted p-1"],
  {
    variants: {
      size: {
        sm: "min-h-9",
        md: "min-h-10",
        lg: "min-h-12",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const tabsTriggerVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2",
    "rounded-lg font-medium",
    "text-muted-foreground",
    "transition-colors duration-200",

    "hover:text-foreground",

    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "data-[state=active]:bg-card",
    "data-[state=active]:text-card-foreground",
    "data-[state=active]:shadow-sm",
  ],
  {
    variants: {
      size: {
        sm: "min-h-7 px-3 text-xs",
        md: "min-h-8 px-4 text-sm",
        lg: "min-h-10 px-5 text-base",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const tabsStyles = {
  root: "w-full",

  listViewport: ["w-full overflow-x-auto", "scrollbar-none"].join(" "),

  content: [
    "mt-6",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
  ].join(" "),
};
