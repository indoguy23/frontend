import { useState } from "react";

import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";

import PriceDisplay from "@/components/common/PriceDisplay";
import RatingDisplay from "@/components/common/RatingDisplay";
import StockBadge from "@/components/common/StockBadge";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import type { ProductDetailsData } from "../../../types/products.types";

import { productInfoStyles } from "./ProductInfo.styles";

interface ProductInfoProps {
  product: ProductDetailsData;
  onAddToCart?: (product: ProductDetailsData, quantity: number) => void;
  onToggleWishlist?: (product: ProductDetailsData) => void;
  isWishlisted?: boolean;
}

const ProductInfo = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const isOutOfStock = product.stock <= 0;

  const handleDecreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((current) => Math.min(product.stock, current + 1));
  };

  const handleAddToCart = () => {
    if (isOutOfStock) {
      return;
    }

    onAddToCart?.(product, quantity);
  };

  return (
    <div className={productInfoStyles.root}>
      <div className="flex flex-wrap items-center gap-2">
        <p className={productInfoStyles.category}>{product.category}</p>

        {product.featured && <Badge size="sm">Featured</Badge>}
      </div>

      <h1 className={productInfoStyles.title}>{product.name}</h1>

      {typeof product.rating === "number" && (
        <div className={productInfoStyles.rating}>
          <RatingDisplay
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        </div>
      )}

      <div className={productInfoStyles.price}>
        <PriceDisplay
          price={product.price}
          originalPrice={product.originalPrice}
        />
      </div>

      <div className={productInfoStyles.stock}>
        <StockBadge stock={product.stock} showQuantity />
      </div>

      <p className={productInfoStyles.description}>{product.description}</p>

      <div className={productInfoStyles.divider} />

      {!isOutOfStock && (
        <div className={productInfoStyles.quantitySection}>
          <p className={productInfoStyles.quantityLabel}>Quantity</p>

          <div className={productInfoStyles.quantityControls}>
            <button
              type="button"
              className={productInfoStyles.quantityButton}
              onClick={handleDecreaseQuantity}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>

            <span className={productInfoStyles.quantityValue}>{quantity}</span>

            <button
              type="button"
              className={productInfoStyles.quantityButton}
              onClick={handleIncreaseQuantity}
              disabled={quantity >= product.stock}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <div className={productInfoStyles.actions}>
        <Button
          type="button"
          className={productInfoStyles.addToCart}
          disabled={isOutOfStock}
          leftIcon={<ShoppingCart className="h-4 w-4" />}
          onClick={handleAddToCart}
        >
          {isOutOfStock ? "Unavailable" : "Add to Cart"}
        </Button>

        <Button
          type="button"
          variant="outline"
          className={productInfoStyles.wishlist}
          leftIcon={
            <Heart
              className={isWishlisted ? "h-4 w-4 fill-current" : "h-4 w-4"}
            />
          }
          onClick={() => onToggleWishlist?.(product)}
        >
          {isWishlisted ? "Wishlisted" : "Wishlist"}
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
