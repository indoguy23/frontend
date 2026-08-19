import type { OrderCardData } from "@/components/common/OrderCard";

export const ORDER_CARD_DATA: OrderCardData[] = [
  {
    id: "order-1",
    orderNumber: "MH-2026-00124",
    date: "13 Aug 2026",
    status: "shipped",
    total: 8498,
    items: [
      {
        id: "PRD-001",
        name: "Wireless Noise Cancelling Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        quantity: 1,
      },
      {
        id: "PRD-002",
        name: "Mechanical RGB Keyboard",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        quantity: 1,
      },
    ],
  },
  {
    id: "order-2",
    orderNumber: "MH-2026-00115",
    date: "10 Aug 2026",
    status: "delivered",
    total: 2999,
    items: [
      {
        id: "PRD-003",
        name: "Premium Running Shoes",
        quantity: 1,
      },
    ],
  },
];
