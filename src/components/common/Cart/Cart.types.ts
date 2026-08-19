export interface CartItemData {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  stock: number;
}

export interface CartItemProps {
  item: CartItemData;

  onQuantityChange?: (item: CartItemData, quantity: number) => void;

  onRemove?: (item: CartItemData) => void;

  className?: string;
}

export interface CartSummaryProps {
  subtotal: number;
  discount?: number;
  shipping?: number;
  tax?: number;

  total: number;

  itemCount?: number;

  actionLabel?: string;

  onAction?: () => void;

  loading?: boolean;

  className?: string;
}
