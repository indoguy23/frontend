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

export interface CheckOutTotals {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}
