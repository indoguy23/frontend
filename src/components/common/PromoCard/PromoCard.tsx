import { ImageOff } from "lucide-react";

import { cn } from "@/utils/cn";

import { promoCardStyles } from "./PromoCard.styles";
import type { PromoCardProps } from "./PromoCard.types";

const PromoCard = ({
  promo,
  action,
  variant = "default",
  className,
}: PromoCardProps) => {
  const isCompact = variant === "compact";

  return (
    <article
      className={cn(
        promoCardStyles.root,
        isCompact
          ? promoCardStyles.compactLayout
          : promoCardStyles.defaultLayout,
        className,
      )}
    >
      <div className={promoCardStyles.content}>
        {promo.eyebrow && (
          <p className={promoCardStyles.eyebrow}>{promo.eyebrow}</p>
        )}

        <h3 className={promoCardStyles.title}>{promo.title}</h3>

        {promo.description && (
          <p className={promoCardStyles.description}>{promo.description}</p>
        )}

        {promo.discountLabel && (
          <span className={promoCardStyles.discount}>
            {promo.discountLabel}
          </span>
        )}

        {action && <div className={promoCardStyles.action}>{action}</div>}
      </div>

      {!isCompact && (
        <div className={promoCardStyles.imageWrapper}>
          {promo.image ? (
            <>
              <img
                src={promo.image}
                alt={promo.imageAlt ?? promo.title}
                className={promoCardStyles.image}
              />

              <div
                aria-hidden="true"
                className={promoCardStyles.imageOverlay}
              />
            </>
          ) : (
            <div className={promoCardStyles.fallback}>
              <ImageOff aria-hidden="true" className="h-7 w-7" />
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export default PromoCard;
