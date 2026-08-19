import { forwardRef } from "react";

import { PackageOpen } from "lucide-react";

import { cn } from "@/utils/cn";

import { emptyStateStyles, emptyStateVariants } from "./EmptyState.styles";
import type { EmptyStateProps } from "./EmptyState.types";

const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      title,
      description,
      icon,
      primaryAction,
      secondaryAction,
      size,
      variant,
      className,
      ...props
    },
    ref,
  ) => {
    const hasActions = Boolean(primaryAction) || Boolean(secondaryAction);

    return (
      <div
        ref={ref}
        className={cn(
          emptyStateVariants({
            size,
            variant,
          }),
          className,
        )}
        {...props}
      >
        <div aria-hidden="true" className={emptyStateStyles.iconContainer}>
          {icon ?? <PackageOpen className="h-6 w-6" />}
        </div>

        <h3 className={emptyStateStyles.title}>{title}</h3>

        {description && (
          <div className={emptyStateStyles.description}>{description}</div>
        )}

        {hasActions && (
          <div className={emptyStateStyles.actions}>
            {secondaryAction}

            {primaryAction}
          </div>
        )}
      </div>
    );
  },
);

EmptyState.displayName = "EmptyState";

export default EmptyState;
