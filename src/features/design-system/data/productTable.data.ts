import type { ProductTableRow } from "../types/productTable.types";

export const PRODUCT_TABLE_DATA: ProductTableRow[] = [
  {
    id: "PRD-001",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 4999,
    stock: 32,
    status: "active",
  },
  {
    id: "PRD-002",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 3499,
    stock: 18,
    status: "active",
  },
  {
    id: "PRD-003",
    name: "Running Shoes",
    category: "Fashion",
    price: 2999,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PRD-004",
    name: "React Design Patterns",
    category: "Books",
    price: 899,
    stock: 14,
    status: "draft",
  },
  {
    id: "PRD-005",
    name: "Coffee Maker",
    category: "Home & Kitchen",
    price: 5499,
    stock: 8,
    status: "active",
  },
];
