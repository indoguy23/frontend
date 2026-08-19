import { Heart, ShoppingCart } from "lucide-react";
import PriceDisplay from "@/components/common/PriceDisplay";
import QuantitySelector from "@/components/common/QuantitySelector";
import ProductImageGallery from "@/components/common/ProductImageGallery";
import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import { cn } from "@/utils/cn";
import StockBadge from "@/components/common/StockBadge";
import { productDetailsStyles } from "./ProductDetails.styles";
import type { ProductDetailsProps } from "./ProductDetails.types";
import RatingDisplay from "@/components/common/RatingDisplay";

const ProductDetails = ({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
  loading = false,
  className,
}: ProductDetailsProps) => {
  const isOutOfStock = product.stock <= 0;

  const maxQuantity = product.maxQuantity ?? product.stock;

  if (loading) {
    return (
      <div className={cn(productDetailsStyles.root, className)}>
        <Skeleton className="aspect-square w-full rounded-2xl" />

        <div>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-4 h-10 w-3/4" />
          <Skeleton className="mt-3 h-10 w-1/2" />

          <Skeleton className="mt-6 h-8 w-40" />

          <div className="mt-6 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <Skeleton className="mt-8 h-12 w-full" />
        </div>
      </div>
    );
  }

  return (
    <section className={cn(productDetailsStyles.root, className)}>
      <ProductImageGallery images={product.images} />

      <div className={productDetailsStyles.content}>
        <p className={productDetailsStyles.category}>{product.category}</p>

        <h1 className={productDetailsStyles.title}>{product.name}</h1>

        <div className={productDetailsStyles.ratingRow}>
          {typeof product.rating === "number" && (
            <RatingDisplay
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          )}

          {typeof product.reviewCount === "number" && (
            <span className="text-muted-foreground">
              {product.reviewCount} reviews
            </span>
          )}

          <StockBadge stock={product.stock} showQuantity={false} />
        </div>

        <PriceDisplay
          price={product.price}
          originalPrice={product.originalPrice}
          size="lg"
        />

        {product.description && (
          <p className={productDetailsStyles.description}>
            {product.description}
          </p>
        )}

        <div className={productDetailsStyles.divider} />

        <div className={productDetailsStyles.quantitySection}>
          <span className="text-sm font-medium text-foreground">Quantity</span>

          <QuantitySelector
            value={quantity}
            onChange={onQuantityChange}
            min={1}
            max={maxQuantity}
            disabled={isOutOfStock}
          />

          {!isOutOfStock && (
            <span className="text-sm text-muted-foreground">
              {product.stock} available
            </span>
          )}
        </div>

        <div className={productDetailsStyles.actions}>
          <Button
            size="lg"
            className="flex-1"
            disabled={isOutOfStock}
            leftIcon={<ShoppingCart className="h-5 w-5" />}
            onClick={() => onAddToCart?.(product, quantity)}
          >
            {isOutOfStock ? "Unavailable" : "Add to Cart"}
          </Button>

          <Button
            size="lg"
            variant="outline"
            aria-pressed={isWishlisted}
            leftIcon={
              <Heart
                className={cn(
                  "h-5 w-5",
                  isWishlisted && "fill-current text-destructive",
                )}
              />
            }
            onClick={() => onToggleWishlist?.(product)}
          >
            {isWishlisted ? "Wishlisted" : "Wishlist"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
