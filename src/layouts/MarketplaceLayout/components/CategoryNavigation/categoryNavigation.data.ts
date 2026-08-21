export interface CategoryNavigationItem {
  id: string;
  label: string;
  href: string;
}

export const CATEGORY_NAVIGATION_ITEMS: CategoryNavigationItem[] = [
  {
    id: "electronics",
    label: "Electronics",
    href: "/categories/electronics",
  },
  {
    id: "fashion",
    label: "Fashion",
    href: "/categories/fashion",
  },
  {
    id: "home-kitchen",
    label: "Home & Kitchen",
    href: "/categories/home-kitchen",
  },
  {
    id: "beauty",
    label: "Beauty",
    href: "/categories/beauty",
  },
  {
    id: "sports",
    label: "Sports",
    href: "/categories/sports",
  },
  {
    id: "books",
    label: "Books",
    href: "/categories/books",
  },
  {
    id: "grocery",
    label: "Grocery",
    href: "/categories/grocery",
  },
  {
    id: "gaming",
    label: "Gaming",
    href: "/categories/gaming",
  },
];
