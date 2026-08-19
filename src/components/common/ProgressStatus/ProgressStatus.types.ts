export type ProgressStatusVariant =
  | "default"
  | "success"
  | "warning"
  | "danger";

export interface ProgressStatusProps {
  value: number;

  label?: string;

  description?: string;

  showValue?: boolean;

  variant?: ProgressStatusVariant;

  className?: string;
}
