export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderSuccessData {
  orderId: string;
  status: OrderStatus;
  total: number;
}
