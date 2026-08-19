import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type { emptyStateVariants } from "./EmptyState.styles";

export interface EmptyStateProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof emptyStateVariants> {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
}
