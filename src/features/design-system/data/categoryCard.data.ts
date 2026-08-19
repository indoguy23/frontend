import type { CategoryCardData } from "@/components/common/CategoryCard";

export const CATEGORY_CARD_DATA: CategoryCardData[] = [
  {
    id: "category-1",
    name: "Electronics",
    slug: "electronics",
    description: "Smartphones, laptops, audio devices and everyday technology.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    productCount: 1248,
    featured: true,
  },
  {
    id: "category-2",
    name: "Fashion",
    slug: "fashion",
    description: "Clothing, footwear and accessories for every style.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    productCount: 864,
  },
  {
    id: "category-3",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    description: "Furniture, kitchen essentials and products for your home.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    productCount: 542,
  },
  {
    id: "category-4",
    name: "Books",
    slug: "books",
    description: "Fiction, technology, business and educational books.",
    productCount: 376,
  },
];
