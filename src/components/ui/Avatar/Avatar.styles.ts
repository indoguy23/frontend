import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  [
    "relative inline-flex shrink-0 items-center justify-center",
    "overflow-visible rounded-full",
    "bg-primary-subtle text-primary-subtle-foreground",
    "font-semibold uppercase",
  ],
  {
    variants: {
      size: {
        xs: "h-7 w-7 text-[10px]",
        sm: "h-9 w-9 text-xs",
        md: "h-11 w-11 text-sm",
        lg: "h-14 w-14 text-base",
        xl: "h-20 w-20 text-xl",
      },

      ring: {
        true: "ring-2 ring-background",
        false: "",
      },
    },

    defaultVariants: {
      size: "md",
      ring: false,
    },
  },
);

export const avatarImageStyles = [
  "h-full w-full rounded-full",
  "object-cover",
].join(" ");

export const avatarFallbackStyles = [
  "flex h-full w-full items-center justify-center",
  "rounded-full",
].join(" ");

export const avatarStatusStyles = {
  base: [
    "absolute bottom-0 right-0 rounded-full",
    "border-2 border-background",
  ].join(" "),

  size: {
    xs: "h-2 w-2",
    sm: "h-2.5 w-2.5",
    md: "h-3 w-3",
    lg: "h-3.5 w-3.5",
    xl: "h-4 w-4",
  },

  variant: {
    online: "bg-success",
    offline: "bg-muted-foreground",
    busy: "bg-danger",
    away: "bg-warning",
  },
};
