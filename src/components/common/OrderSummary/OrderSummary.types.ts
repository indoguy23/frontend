export interface OrderSummaryProps {
  subtotal: number;

  discount?: number;

  shipping?: number;

  tax?: number;

  total: number;

  currency?: string;

  locale?: string;

  itemCount?: number;

  actionLabel?: string;

  onAction?: () => void;

  actionDisabled?: boolean;

  actionLoading?: boolean;

  className?: string;
}
