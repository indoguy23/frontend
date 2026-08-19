import type { SellerCardData } from "@/components/common/SellerCard";

export const SELLER_CARD_DATA: SellerCardData[] = [
  {
    id: "seller-1",
    name: "TechNova Store",
    slug: "technova-store",
    description:
      "Electronics, accessories and smart devices from trusted brands.",
    rating: 4.8,
    reviewCount: 1240,
    productCount: 184,
    location: "Bengaluru, Karnataka",
    verified: true,
    featured: true,
  },
  {
    id: "seller-2",
    name: "Urban Style",
    slug: "urban-style",
    description: "Modern fashion, footwear and everyday lifestyle essentials.",
    rating: 4.5,
    reviewCount: 638,
    productCount: 96,
    location: "Mumbai, Maharashtra",
    verified: true,
  },
  {
    id: "seller-3",
    name: "HomeCraft",
    slug: "homecraft",
    description:
      "Home, kitchen and décor products designed for everyday living.",
    rating: 4.3,
    reviewCount: 315,
    productCount: 72,
    location: "Pune, Maharashtra",
  },
];
