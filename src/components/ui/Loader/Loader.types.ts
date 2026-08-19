import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type { loaderVariants } from "./Loader.styles";

export interface LoaderProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof loaderVariants> {
  label?: ReactNode;
  showLabel?: boolean;
}
