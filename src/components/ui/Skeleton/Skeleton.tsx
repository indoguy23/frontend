import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import { skeletonVariants } from "./Skeleton.styles";
import type { SkeletonProps } from "./Skeleton.types";

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(skeletonVariants({ variant }), className)}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";

export default Skeleton;
