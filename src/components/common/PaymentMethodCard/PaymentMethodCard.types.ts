export type PaymentMethodType = "card" | "upi" | "cod" | "wallet";

export interface PaymentMethodData {
  id: string;

  type: PaymentMethodType;

  title: string;

  description?: string;

  maskedValue?: string;

  isDefault?: boolean;

  disabled?: boolean;
}

export interface PaymentMethodCardProps {
  method: PaymentMethodData;

  selected?: boolean;

  selectable?: boolean;

  onSelect?: (method: PaymentMethodData) => void;

  onEdit?: (method: PaymentMethodData) => void;

  onDelete?: (method: PaymentMethodData) => void;

  className?: string;
}
