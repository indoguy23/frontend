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

export type PaymentMethod = "cash-on-delivery" | "card" | "upi";

export interface CheckoutTotals {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}
export interface CheckoutOrderItem {
  productId: string;
  quantity: number;
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
}

export interface CreateOrderResponse {
  orderId: string;
  status: "pending" | "confirmed";
  total: number;
}
