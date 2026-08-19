import { cva } from "class-variance-authority";

export const dialogContentVariants = cva(
  [
    "fixed left-1/2 top-1/2 z-50",
    "w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2",
    "rounded-2xl border border-border bg-card text-card-foreground",
    "shadow-2xl",
    "focus:outline-none",

    "data-[state=open]:animate-dialog-in",
    "data-[state=closed]:animate-dialog-out",
  ],
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: ["h-[calc(100vh-2rem)]", "max-w-[calc(100vw-2rem)]"],
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const dialogStyles = {
  overlay: [
    "fixed inset-0 z-40",
    "bg-overlay backdrop-blur-sm",
    "data-[state=open]:animate-overlay-in",
    "data-[state=closed]:animate-overlay-out",
  ].join(" "),

  header: "space-y-2",

  title: ["text-xl font-semibold", "text-card-foreground"].join(" "),

  description: ["text-sm leading-6", "text-muted-foreground"].join(" "),

  body: "mt-6",

  footer: [
    "mt-6 flex flex-col-reverse gap-3",
    "sm:flex-row sm:justify-end",
  ].join(" "),

  closeButton: [
    "absolute right-4 top-4",
    "inline-flex h-9 w-9 items-center justify-center",
    "rounded-lg text-muted-foreground",
    "transition-colors duration-200",
    "hover:bg-muted hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
};
