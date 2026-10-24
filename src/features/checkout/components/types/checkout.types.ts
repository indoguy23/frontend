import type { PaymentMethod } from "@/features/orders/types/payment.types";
import type { OrderStatus } from "@/features/orders/types/orders.types";
export type { PaymentMethod } from "@/features/orders/types/payment.types";

export interface CheckoutAddressData {
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export type CheckoutAddressErrors = Partial<
  Record<keyof CheckoutAddressData, string>
>;

export interface CheckoutTotals {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}

export interface CheckoutOrderItem {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
}

export interface CheckoutOrderRequest {
  items: CheckoutOrderItem[];
  address: CheckoutAddressData;
  paymentMethod: PaymentMethod;
  totals: CheckoutTotals;
}

export interface CreateOrderRequest {
  items: CheckoutOrderItem[];
  address: CheckoutAddressData;
  paymentMethod: PaymentMethod;
  totals: CheckoutTotals;
}

export interface CreateOrderResponse {
  orderId: string;
  status: OrderStatus;
  total: number;
}
