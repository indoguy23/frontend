export type QuantitySelectorSize = "sm" | "md";

export interface QuantitySelectorProps {
  value: number;

  onChange: (value: number) => void;

  min?: number;

  max?: number;

  disabled?: boolean;

  size?: QuantitySelectorSize;

  className?: string;

  decrementLabel?: string;

  incrementLabel?: string;
}
