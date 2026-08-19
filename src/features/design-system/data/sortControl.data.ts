import type { SortOption } from "@/components/common/SortControl";

export const PRODUCT_SORT_OPTIONS: SortOption[] = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "price-low-high",
    label: "Price: Low to High",
  },
  {
    value: "price-high-low",
    label: "Price: High to Low",
  },
  {
    value: "rating",
    label: "Highest Rated",
  },
  {
    value: "popular",
    label: "Most Popular",
  },
];
