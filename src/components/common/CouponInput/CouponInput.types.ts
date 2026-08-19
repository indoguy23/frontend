export interface CouponInputProps {
  value: string;

  onChange: (value: string) => void;

  onApply: (code: string) => void;

  onRemove?: () => void;

  applied?: boolean;

  loading?: boolean;

  disabled?: boolean;

  successMessage?: string;

  error?: string;

  placeholder?: string;

  className?: string;
}
