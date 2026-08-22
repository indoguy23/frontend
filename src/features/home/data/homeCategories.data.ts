export interface HomeCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
  productCount?: number;
}

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    id: "electronics",
    name: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    href: "/categories/electronics",
    productCount: 1240,
  },
  {
    id: "fashion",
    name: "Fashion",
    slug: "fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    href: "/categories/fashion",
    productCount: 2180,
  },
  {
    id: "home-kitchen",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    href: "/categories/home-kitchen",
    productCount: 860,
  },
  {
    id: "beauty",
    name: "Beauty",
    slug: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    href: "/categories/beauty",
    productCount: 640,
  },
  {
    id: "sports",
    name: "Sports",
    slug: "sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    href: "/categories/sports",
    productCount: 520,
  },
  {
    id: "gaming",
    name: "Gaming",
    slug: "gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    href: "/categories/gaming",
    productCount: 430,
  },
];
