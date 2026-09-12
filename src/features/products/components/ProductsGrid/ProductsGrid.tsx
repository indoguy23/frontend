import { useNavigate } from "react-router-dom";

import ProductCard from "@/components/common/ProductCard";
import type { ProductCardData } from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

import { productsGridStyles } from "./ProductsGrid.styles";
import { useCart } from "@/features/cart/hooks/useCart";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";

interface ProductsGridProps {
  products: ProductCardData[];
  onClearFilters?: () => void;
}

const ProductsGrid = ({ products, onClearFilters }: ProductsGridProps) => {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const { toggleWishlist, isWishlisted } = useWishlist();

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
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          isWishlisted={isWishlisted(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
