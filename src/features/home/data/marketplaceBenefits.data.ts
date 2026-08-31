import type { LucideIcon } from "lucide-react";
import { Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";

export interface MarketplaceBenefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const MARKETPLACE_BENEFITS: MarketplaceBenefit[] = [
  {
    id: "secure-payment",
    title: "Secure Payments",
    description: "Your payments are protected with a safe checkout experience.",
    icon: ShieldCheck,
  },
  {
    id: "easy-returns",
    title: "Easy Returns",
    description: "Simple and hassle-free returns when something is not right.",
    icon: RotateCcw,
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description:
      "Reliable delivery from trusted sellers across the marketplace.",
    icon: Truck,
  },
  {
    id: "customer-support",
    title: "Customer Support",
    description:
      "Helpful support whenever you need assistance with your order.",
    icon: Headphones,
  },
];
