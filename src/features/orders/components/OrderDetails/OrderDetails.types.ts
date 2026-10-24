import type { Order } from "../../types/orders.types";

export interface OrderDetailsProps {
  order: Order;
  onBack: () => void;
  onTrackOrder: () => void;
  onCancelOrder: (orderId: string) => void;
  isCancelling?: boolean;
}
