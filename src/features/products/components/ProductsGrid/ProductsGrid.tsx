import ProductCard from "@/components/common/ProductCard";

import type { ProductCardData } from "@/components/common/ProductCard";

import { productsGridStyles } from "./ProductsGrid.styles";
import EmptyState from "@/components/ui/EmptyState";
import Button from "@/components/ui/Button";

interface ProductsGridProps {
  products: ProductCardData[];
  onClearFilters?: () => void;
}

const ProductsGrid = ({ products, onClearFilters }: ProductsGridProps) => {
  if (products.length === 0) {
    return (
      <EmptyState
        title="No products found"
        description="Try changing or clearing your filters to discover more products."
        primaryAction={
          onClearFilters ? (
            <Button type="button" variant="outline" onClick={onClearFilters}>
              Clear filters
            </Button>
          ) : undefined
        }
      />
    );
  }

  return (
    <div className={productsGridStyles.root}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
