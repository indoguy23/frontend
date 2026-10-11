import type { Order } from "../types/orders.types";

export const getOrders = async (): Promise<Order[]> => {
  throw new Error(
    "Orders API is not connected yet. Please connect the backend orders endpoint.",
  );
};

export const getOrderById = async (orderId: string): Promise<Order> => {
  void orderId;

  throw new Error(
    "Order details API is not connected yet. Please connect the backend orders endpoint.",
  );
};
