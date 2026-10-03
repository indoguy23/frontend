import type { PaymentMethod } from "./payment.types";

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

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
}

export interface OrderAddress {
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

export interface Order {
  id: string;
  orderId: string;
  status: OrderStatus;
  items: OrderItem[];
  address: OrderAddress;
  paymentMethod: PaymentMethod;
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}
