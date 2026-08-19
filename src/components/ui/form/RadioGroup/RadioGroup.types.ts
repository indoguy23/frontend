import type { InputHTMLAttributes, ReactNode } from "react";

export interface RadioOption {
  label: ReactNode;
  value: string;
  description?: ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange" | "size"
> {
  name: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  invalid?: boolean;
  orientation?: "vertical" | "horizontal";
}
