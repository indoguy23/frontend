import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import { badgeVariants } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { children, variant, size, leftIcon, rightIcon, className, ...props },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      >
        {leftIcon && (
          <span aria-hidden="true" className="shrink-0">
            {leftIcon}
          </span>
        )}

        <span>{children}</span>

        {rightIcon && (
          <span aria-hidden="true" className="shrink-0">
            {rightIcon}
          </span>
        )}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
