import { useState } from "react";
import PriceDisplay from "@/components/common/PriceDisplay";
import { Heart, ImageOff, ShoppingCart } from "lucide-react";
import RatingDisplay from "@/components/common/RatingDisplay";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import { cn } from "@/utils/cn";
import StockBadge from "@/components/common/StockBadge";
import { productCardStyles } from "./ProductCard.styles";
import type { ProductCardProps } from "./ProductCard.types";

const calculateDiscount = (price: number, originalPrice?: number) => {
  if (!originalPrice || originalPrice <= price) {
    return null;
  }

  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

const ProductCard = ({
  product,
  onAddToCart,
  onToggleWishlist,
  onViewDetails,
  isWishlisted = false,
  loading = false,
  className,
}: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  const discount = calculateDiscount(product.price, product.originalPrice);

  const isOutOfStock = product.stock <= 0;

  if (loading) {
    return (
      <div className={cn(productCardStyles.card, className)}>
        <Skeleton className="aspect-square w-full rounded-none" />

        <div className="space-y-4 p-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />

          <div className="flex gap-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-5 w-16" />
          </div>

          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    );
  }

  return (
    <article className={cn(productCardStyles.card, className)}>
      <div className={productCardStyles.imageWrapper}>
        {imageError ? (
          <div className={productCardStyles.imageFallback}>
            <div className="flex flex-col items-center gap-2">
              <ImageOff className="h-6 w-6" />

              <span>Image unavailable</span>
            </div>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={productCardStyles.image}
            onError={() => setImageError(true)}
          />
        )}

        <button
          type="button"
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={isWishlisted}
          className={productCardStyles.wishlistButton}
          onClick={() => onToggleWishlist?.(product)}
        >
          <Heart
            className={cn(
              "h-4 w-4",
              isWishlisted && "fill-current text-destructive",
            )}
          />
        </button>

        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.featured && <Badge size="sm">Featured</Badge>}

          {discount !== null && (
            <Badge size="sm" variant="destructive">
              {discount}% Off
            </Badge>
          )}
        </div>
      </div>

      <div className={productCardStyles.content}>
        <p className={productCardStyles.category}>{product.category}</p>

        <button
          type="button"
          className="block w-full text-left"
          onClick={() => onViewDetails?.(product)}
        >
          <h3 className={productCardStyles.title}>{product.name}</h3>
        </button>

        {typeof product.rating === "number" && (
          <RatingDisplay
            rating={product.rating}
            reviewCount={product.reviewCount}
            size="sm"
          />
        )}

        <PriceDisplay
          price={product.price}
          originalPrice={product.originalPrice}
        />

        <div className="mt-3">
          <StockBadge stock={product.stock} showQuantity={false} />
        </div>

        <div className={productCardStyles.footer}>
          <Button
            className="flex-1"
            disabled={isOutOfStock}
            leftIcon={<ShoppingCart className="h-4 w-4" />}
            onClick={() => onAddToCart?.(product)}
          >
            {isOutOfStock ? "Unavailable" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
