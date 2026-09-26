import type {
  CreateOrderRequest,
  CreateOrderResponse,
} from "../components/types/checkout.types";

export const createOrder = async (
  payload: CreateOrderRequest,
): Promise<CreateOrderResponse> => {
  void payload;

  throw new Error(
    "Order API is not connected yet. Please connect the backend order endpoint.",
  );
};
