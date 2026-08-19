import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type { alertVariants } from "./Alert.styles";

export interface AlertProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof alertVariants> {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}
