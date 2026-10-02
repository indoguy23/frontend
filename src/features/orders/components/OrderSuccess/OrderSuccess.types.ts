import type { OrderSuccessData } from "../../types/orders.types";

export interface OrderSuccessProps {
  order: OrderSuccessData;
  onContinueShopping: () => void;
  onViewOrders: () => void;
}
