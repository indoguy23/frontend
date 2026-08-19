export interface ProductTableRow {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "draft" | "out-of-stock";
}
