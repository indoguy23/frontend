export interface OrderItemData {
  id: string;

  name: string;

  image?: string;

  variant?: string;

  quantity: number;

  price: number;

  originalPrice?: number;

  sellerName?: string;
}

export interface OrderItemProps {
  item: OrderItemData;

  currency?: string;

  locale?: string;

  onViewProduct?: (item: OrderItemData) => void;

  onBuyAgain?: (item: OrderItemData) => void;

  className?: string;
}
