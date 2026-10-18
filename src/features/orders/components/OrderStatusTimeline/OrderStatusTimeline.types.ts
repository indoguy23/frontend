import type { OrderStatus } from "../../types/orders.types";

export interface OrderStatusTimelineProps {
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}
