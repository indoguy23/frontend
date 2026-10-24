import type { Order } from "@/features/orders/types/orders.types";
import type {
  CreateOrderRequest,
  CreateOrderResponse,
} from "../components/types/checkout.types";

const MOCK_ORDERS_STORAGE_KEY = "markethub-orders";

export const createOrder = async (
  payload: CreateOrderRequest,
): Promise<CreateOrderResponse> => {
  if (payload.items.length === 0) {
    throw new Error("Your cart is empty.");
  }

  const now = new Date().toISOString();
  const orderId = `MH-${Date.now()}`;

  const order: Order = {
    id: orderId,
    orderId,
    status: "confirmed",
    items: payload.items,
    address: payload.address,
    paymentMethod: payload.paymentMethod,
    subtotal: payload.totals.subtotal,
    shipping: payload.totals.shipping,
    discount: payload.totals.discount,
    total: payload.totals.total,
    createdAt: now,
    updatedAt: now,
  };

  try {
    const storedOrders = localStorage.getItem(MOCK_ORDERS_STORAGE_KEY);

    const parsedOrders: unknown = storedOrders ? JSON.parse(storedOrders) : [];

    if (!Array.isArray(parsedOrders)) {
      throw new Error("Invalid stored orders.");
    }

    const orders: Order[] = [...parsedOrders, order];

    localStorage.setItem(MOCK_ORDERS_STORAGE_KEY, JSON.stringify(orders));

    return {
      orderId: order.orderId,
      status: order.status,
      total: order.total,
    };
  } catch {
    throw new Error("Unable to save the mock order. Please try again.");
  }
};
