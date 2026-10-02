import type { OrderStatus } from "../types/orders.types";

interface OrderStatusConfig {
  label: string;
}

export const ORDER_STATUS_CONFIG: Record<OrderStatus, OrderStatusConfig> = {
  pending: {
    label: "Pending",
  },
  confirmed: {
    label: "Confirmed",
  },
  processing: {
    label: "Processing",
  },
  shipped: {
    label: "Shipped",
  },
  delivered: {
    label: "Delivered",
  },
  cancelled: {
    label: "Cancelled",
  },
};
