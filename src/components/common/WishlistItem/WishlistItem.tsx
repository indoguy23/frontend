import { Eye, ImageOff, ShoppingCart, Trash2 } from "lucide-react";

import PriceDisplay from "@/components/common/PriceDisplay";
import RatingDisplay from "@/components/common/RatingDisplay";
import StockBadge from "@/components/common/StockBadge";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { wishlistItemStyles } from "./WishlistItem.styles";
import type { WishlistItemProps } from "./WishlistItem.types";

const WishlistItem = ({
  product,
  onAddToCart,
  onRemove,
  onViewDetails,
  className,
}: WishlistItemProps) => {
  const isOutOfStock = product.stock <= 0;

  return (
    <article className={cn(wishlistItemStyles.root, className)}>
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className={wishlistItemStyles.image}
        />
      ) : (
        <div className={wishlistItemStyles.fallback}>
          <ImageOff aria-hidden="true" className="h-5 w-5" />
        </div>
      )}

      <div className={wishlistItemStyles.content}>
        <p className={wishlistItemStyles.category}>{product.category}</p>

        <h3 className={wishlistItemStyles.name}>{product.name}</h3>

        <div className={wishlistItemStyles.meta}>
          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            size="sm"
          />

          <StockBadge stock={product.stock} showQuantity={false} />
        </div>

        {typeof product.rating === "number" && (
          <div className="mt-3">
            <RatingDisplay
              rating={product.rating}
              reviewCount={product.reviewCount}
              size="sm"
            />
          </div>
        )}

        <div className={wishlistItemStyles.actions}>
          {onAddToCart && (
            <Button
              size="sm"
              disabled={isOutOfStock}
              leftIcon={<ShoppingCart className="h-4 w-4" />}
              onClick={() => onAddToCart(product)}
            >
              {isOutOfStock ? "Unavailable" : "Add to Cart"}
            </Button>
          )}

          {onViewDetails && (
            <Button
              size="sm"
              variant="outline"
              leftIcon={<Eye className="h-4 w-4" />}
              onClick={() => onViewDetails(product)}
            >
              View
            </Button>
          )}

          {onRemove && (
            <Button
              size="sm"
              variant="ghost"
              leftIcon={<Trash2 className="h-4 w-4" />}
              onClick={() => onRemove(product)}
            >
              Remove
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default WishlistItem;
