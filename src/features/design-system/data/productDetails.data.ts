import type { ProductDetailsData } from "@/components/common/ProductDetails";

import { PRODUCT_GALLERY_IMAGES } from "./productGallery.data";

export const PRODUCT_DETAILS_DATA: ProductDetailsData = {
  id: "PRD-001",

  name: "Wireless Noise Cancelling Headphones",

  slug: "wireless-noise-cancelling-headphones",

  image: PRODUCT_GALLERY_IMAGES[0]?.src ?? "",

  images: PRODUCT_GALLERY_IMAGES,

  category: "Electronics",

  price: 4999,

  originalPrice: 6999,

  rating: 4.7,

  reviewCount: 284,

  stock: 8,

  maxQuantity: 5,

  featured: true,

  description:
    "Premium wireless headphones with active noise cancellation, immersive sound, comfortable ear cushions and long-lasting battery life.",
};
