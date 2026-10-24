import type { Order } from "../types/orders.types";

const ORDERS_STORAGE_KEY = "markethub-orders";

const readOrders = (): Order[] => {
  try {
    const storedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);

    if (!storedOrders) {
      return [];
    }

    const parsedOrders: unknown = JSON.parse(storedOrders);

    if (!Array.isArray(parsedOrders)) {
      throw new Error("Invalid stored orders.");
    }

    return parsedOrders as Order[];
  } catch {
    throw new Error("Unable to retrieve saved orders.");
  }
};

export const getOrders = async (): Promise<Order[]> => {
  return readOrders().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
};

export const getOrderById = async (orderId: string): Promise<Order> => {
  const orders = readOrders();

  const order = orders.find(
    (item) => item.orderId === orderId || item.id === orderId,
  );

  if (!order) {
    throw new Error("Order not found.");
  }

  return order;
};

export const cancelOrder = async (orderId: string): Promise<Order> => {
  const orders = readOrders();

  const orderIndex = orders.findIndex(
    (order) => order.orderId === orderId || order.id === orderId,
  );

  if (orderIndex === -1) {
    throw new Error("Order not found.");
  }

  const order = orders[orderIndex];

  if (!["pending", "confirmed"].includes(order.status)) {
    throw new Error("This order can no longer be cancelled.");
  }

  const updatedOrder: Order = {
    ...order,
    status: "cancelled",
    updatedAt: new Date().toISOString(),
  };

  orders[orderIndex] = updatedOrder;

  try {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  } catch {
    throw new Error("Unable to cancel the order. Please try again.");
  }

  return updatedOrder;
};
