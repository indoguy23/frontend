import type { InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type { inputVariants } from "./Input.styles";

export interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  invalid?: boolean;
  fullWidth?: boolean;
}
