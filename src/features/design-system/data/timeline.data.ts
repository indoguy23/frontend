import type { TimelineItem } from "@/components/common/Timeline";

export const ACTIVITY_TIMELINE_DATA: TimelineItem[] = [
  {
    id: "created",
    title: "Order created",
    description: "The customer successfully placed the order.",
    timestamp: "10:32 AM",
    status: "completed",
  },

  {
    id: "payment",
    title: "Payment confirmed",
    description: "Payment was successfully received.",
    timestamp: "10:34 AM",
    status: "completed",
  },

  {
    id: "processing",
    title: "Seller processing",
    description: "The seller is preparing the products for shipment.",
    timestamp: "11:15 AM",
    status: "current",
  },

  {
    id: "shipping",
    title: "Ready for shipping",
    description: "Shipment details will appear once dispatched.",
    status: "pending",
  },

  {
    id: "delivery",
    title: "Delivery",
    description: "The order will be delivered to the customer.",
    status: "pending",
  },
];

export const VERIFICATION_TIMELINE_DATA: TimelineItem[] = [
  {
    id: "application",
    title: "Application submitted",
    description: "Seller registration information was received.",
    timestamp: "15 Aug 2026",
    status: "completed",
  },

  {
    id: "documents",
    title: "Documents verified",
    description: "Business documents passed verification.",
    timestamp: "16 Aug 2026",
    status: "completed",
  },

  {
    id: "bank",
    title: "Bank verification",
    description: "Bank account verification requires attention.",
    timestamp: "17 Aug 2026",
    status: "error",
  },
];
