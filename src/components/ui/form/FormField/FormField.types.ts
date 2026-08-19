import type { HTMLAttributes, ReactNode } from "react";

export interface FormFieldProps
  extends HTMLAttributes<HTMLDivElement> {
  label?: string;

  required?: boolean;

  helperText?: string;

  error?: string;

  htmlFor?: string;

  children: ReactNode;
}