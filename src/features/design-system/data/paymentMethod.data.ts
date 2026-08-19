import type { PaymentMethodData } from "@/components/common/PaymentMethodCard";

export const PAYMENT_METHOD_DATA: PaymentMethodData[] = [
  {
    id: "payment-1",
    type: "card",
    title: "Visa Card",
    description: "Credit / Debit Card",
    maskedValue: "•••• •••• •••• 4821",
    isDefault: true,
  },

  {
    id: "payment-2",
    type: "upi",
    title: "UPI",
    description: "Pay using your UPI ID",
    maskedValue: "aryan@upi",
  },

  {
    id: "payment-3",
    type: "cod",
    title: "Cash on Delivery",
    description: "Pay when your order arrives.",
  },

  {
    id: "payment-4",
    type: "wallet",
    title: "Wallet",
    description: "Marketplace wallet balance.",
    maskedValue: "Balance: ₹1,250",
  },
];
