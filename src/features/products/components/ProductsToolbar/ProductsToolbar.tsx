import { SlidersHorizontal } from "lucide-react";

import { productsToolbarStyles } from "./ProductsToolbar.styles";
import Button from "@/components/ui/Button";

export type ProductSortValue =
  | "featured"
  | "newest"
  | "price-low-high"
  | "price-high-low"
  | "rating";

interface ProductsToolbarProps {
  sortBy: ProductSortValue;
  onSortChange: (value: ProductSortValue) => void;
  onFilterClick: () => void;
}

const ProductsToolbar = ({
  sortBy,
  onSortChange,
  onFilterClick,
}: ProductsToolbarProps) => {
  return (
    <div className={productsToolbarStyles.root}>
      <div className={productsToolbarStyles.left}>
        <Button
          type="button"
          variant="outline"
          className={productsToolbarStyles.filterButton}
          onClick={onFilterClick}
          leftIcon={<SlidersHorizontal className="h-4 w-4" />}
        >
          Filters
        </Button>
      </div>

      <div className={productsToolbarStyles.sortWrapper}>
        <span className={productsToolbarStyles.sortLabel}>Sort by</span>

        <select
          value={sortBy}
          onChange={(event) =>
            onSortChange(event.target.value as ProductSortValue)
          }
          className={productsToolbarStyles.select}
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsToolbar;
