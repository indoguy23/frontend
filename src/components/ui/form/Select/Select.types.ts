import type { SelectHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import type { selectVariants } from "./Select.styles";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  options: SelectOption[];
  placeholder?: string;
  invalid?: boolean;
  fullWidth?: boolean;
}