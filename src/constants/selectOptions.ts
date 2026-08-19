import type { SelectOption } from "@/components/ui/form/Select";

/**
 * General category options.
 *
 * Use these in forms such as:
 * - Create Product
 * - Edit Product
 * - Vendor Product Form
 */
export const CATEGORY_OPTIONS: SelectOption[] = [
  {
    label: "Electronics",
    value: "electronics",
  },
  {
    label: "Fashion",
    value: "fashion",
  },
  {
    label: "Books",
    value: "books",
  },
  {
    label: "Home & Kitchen",
    value: "home-kitchen",
  },
];

/**
 * Product table category filter options.
 *
 * Values match the category values currently stored
 * inside PRODUCT_TABLE_DATA.
 */
export const PRODUCT_CATEGORY_FILTER_OPTIONS: SelectOption[] = [
  {
    label: "All Categories",
    value: "",
  },
  {
    label: "Electronics",
    value: "Electronics",
  },
  {
    label: "Fashion",
    value: "Fashion",
  },
  {
    label: "Books",
    value: "Books",
  },
  {
    label: "Home & Kitchen",
    value: "Home & Kitchen",
  },
];

export const STATUS_OPTIONS: SelectOption[] = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
  {
    label: "Draft",
    value: "draft",
  },
  {
    label: "Archived",
    value: "archived",
    disabled: true,
  },
];

export const COUNTRY_OPTIONS: SelectOption[] = [
  {
    label: "India",
    value: "IN",
  },
  {
    label: "United States",
    value: "US",
  },
  {
    label: "United Kingdom",
    value: "GB",
  },
];

export const PRODUCT_RATING_OPTIONS = [
  {
    label: "All Ratings",
    value: "",
  },
  {
    label: "4★ & above",
    value: "4",
  },
  {
    label: "3★ & above",
    value: "3",
  },
  {
    label: "2 & above",
    value: "2",
  },
];

export const PRODUCT_AVAILABILITY_OPTIONS = [
  {
    label: "All Availability",
    value: "",
  },
  {
    label: "In Stock",
    value: "in-stock",
  },
  {
    label: "Out of Stock",
    value: "out-of-stock",
  },
];

export const PRODUCT_SORT_OPTIONS = [
  {
    label: "Featured",
    value: "featured",
  },
  {
    label: "Price: Low to High",
    value: "price-low-high",
  },
  {
    label: "Price: High to Low",
    value: "price-high-low",
  },
  {
    label: "Top Rated",
    value: "rating",
  },
];
