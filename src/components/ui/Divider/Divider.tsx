import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import { dividerVariants } from "./Divider.styles";
import type { DividerProps } from "./Divider.types";

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation, spacing, label, className, ...props }, ref) => {
    const resolvedOrientation = orientation ?? "horizontal";

    if (label && resolvedOrientation === "horizontal") {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          className={cn(
            "flex w-full items-center gap-4",
            spacing === "sm" && "my-3",
            spacing === "md" && "my-5",
            spacing === "lg" && "my-8",
            className,
          )}
          {...props}
        >
          <span aria-hidden="true" className="h-px flex-1 bg-border" />

          <span className="shrink-0 text-sm text-muted-foreground">
            {label}
          </span>

          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={resolvedOrientation}
        className={cn(
          dividerVariants({
            orientation: resolvedOrientation,
            spacing,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";

export default Divider;
