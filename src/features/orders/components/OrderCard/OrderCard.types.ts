import type { Order } from "../../types/orders.types";

export interface OrderCardProps {
  order: Order;
  onViewDetails: (orderId: string) => void;
}
