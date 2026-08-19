import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import type { skeletonVariants } from "./Skeleton.styles";

export interface SkeletonProps
  extends
    HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}
