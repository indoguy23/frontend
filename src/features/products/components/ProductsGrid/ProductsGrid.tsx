import { useNavigate } from "react-router-dom";

import ProductCard from "@/components/common/ProductCard";
import type { ProductCardData } from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

import { productsGridStyles } from "./ProductsGrid.styles";

interface ProductsGridProps {
  products: ProductCardData[];
  onClearFilters?: () => void;
}

const ProductsGrid = ({ products, onClearFilters }: ProductsGridProps) => {
  const navigate = useNavigate();

  const handleViewDetails = (product: ProductCardData) => {
    navigate(`/products/${product.slug}`);
  };

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
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={handleViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
