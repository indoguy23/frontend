import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import { loaderVariants } from "./Loader.styles";
import type { LoaderProps } from "./Loader.types";

const Loader = forwardRef<HTMLSpanElement, LoaderProps>(
  (
    {
      size,
      variant,
      label = "Loading",
      showLabel = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        role="status"
        className="inline-flex items-center gap-2"
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            loaderVariants({
              size,
              variant,
            }),
            className,
          )}
        />

        {showLabel ? (
          <span className="text-sm text-muted-foreground">{label}</span>
        ) : (
          <span className="sr-only">{label}</span>
        )}
      </span>
    );
  },
);

Loader.displayName = "Loader";

export default Loader;
