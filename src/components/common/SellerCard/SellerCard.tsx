import { BadgeCheck, MapPin, Package, Store } from "lucide-react";

import RatingDisplay from "@/components/common/RatingDisplay";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { sellerCardStyles } from "./SellerCard.styles";
import type { SellerCardProps } from "./SellerCard.types";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const SellerCard = ({ seller, onViewStore, className }: SellerCardProps) => {
  return (
    <article className={cn(sellerCardStyles.card, className)}>
      <div className={sellerCardStyles.header}>
        {seller.logo ? (
          <img
            src={seller.logo}
            alt={`${seller.name} logo`}
            className={sellerCardStyles.logo}
          />
        ) : (
          <div className={sellerCardStyles.logoFallback} aria-hidden="true">
            {getInitials(seller.name)}
          </div>
        )}

        <div className={sellerCardStyles.content}>
          <div className={sellerCardStyles.nameRow}>
            <h3 className={sellerCardStyles.name}>{seller.name}</h3>

            {seller.verified && (
              <Badge variant="success">
                <BadgeCheck className="mr-1 h-3.5 w-3.5" />
                Verified
              </Badge>
            )}

            {seller.featured && <Badge variant="secondary">Featured</Badge>}
          </div>

          {typeof seller.rating === "number" && (
            <div className="mt-2">
              <RatingDisplay
                rating={seller.rating}
                reviewCount={seller.reviewCount}
                size="sm"
              />
            </div>
          )}
        </div>
      </div>

      {seller.description && (
        <p className={sellerCardStyles.description}>{seller.description}</p>
      )}

      <div className={sellerCardStyles.meta}>
        {seller.productCount !== undefined && (
          <span className="inline-flex items-center gap-1.5">
            <Package aria-hidden="true" className="h-4 w-4" />
            {seller.productCount}{" "}
            {seller.productCount === 1 ? "product" : "products"}
          </span>
        )}

        {seller.location && (
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-4 w-4" />

            {seller.location}
          </span>
        )}
      </div>

      <div className={sellerCardStyles.footer}>
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Store aria-hidden="true" className="h-4 w-4" />
          Marketplace Seller
        </span>

        {onViewStore && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => onViewStore(seller)}
          >
            View Store
          </Button>
        )}
      </div>
    </article>
  );
};

export default SellerCard;
