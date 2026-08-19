import type { OrderItemData } from "@/components/common/OrderItem";

export const ORDER_ITEM_DATA: OrderItemData[] = [
  {
    id: "item-1",
    name: "Wireless Noise Cancelling Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    variant: "Color: Black",
    quantity: 1,
    price: 4999,
    originalPrice: 6999,
    sellerName: "TechNova Store",
  },

  {
    id: "item-2",
    name: "Mechanical RGB Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    variant: "Switch: Brown",
    quantity: 2,
    price: 2499,
    originalPrice: 2999,
    sellerName: "TechNova Store",
  },

  {
    id: "item-3",
    name: "USB-C Fast Charging Cable",
    variant: "Length: 2 metres",
    quantity: 3,
    price: 499,
    sellerName: "Digital Accessories",
  },
];
