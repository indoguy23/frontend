export type OrderCardStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderCardItem {
  id: string;
  name: string;
  image?: string;
  quantity: number;
}

export interface OrderCardData {
  id: string;

  orderNumber: string;

  date: string;

  status: OrderCardStatus;

  total: number;

  items: OrderCardItem[];
}

export interface OrderCardProps {
  order: OrderCardData;

  currency?: string;

  locale?: string;

  onViewDetails?: (order: OrderCardData) => void;

  onTrackOrder?: (order: OrderCardData) => void;

  onCancelOrder?: (order: OrderCardData) => void;

  className?: string;
}
