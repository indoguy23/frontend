import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type { dividerVariants } from "./Divider.styles";

export interface DividerProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
  label?: ReactNode;
}
