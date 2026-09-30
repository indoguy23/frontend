import {
  Banknote,
  CreditCard,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import type { PaymentMethod } from "../components/types/checkout.types";

export interface PaymentOption {
  value: PaymentMethod;
  label: string;
  description: string;
  icon: LucideIcon;
}

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    value: "cash-on-delivery",
    label: "Cash on Delivery",
    description: "Pay when your order is delivered.",
    icon: Banknote,
  },
  {
    value: "upi",
    label: "UPI",
    description: "Pay securely using UPI.",
    icon: Smartphone,
  },
  {
    value: "card",
    label: "Credit / Debit Card",
    description: "Pay securely using your card.",
    icon: CreditCard,
  },
];
