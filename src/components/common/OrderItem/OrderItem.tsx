import { Eye, ImageOff, RotateCcw } from "lucide-react";

import PriceDisplay from "@/components/common/PriceDisplay";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { orderItemStyles } from "./OrderItem.styles";
import type { OrderItemProps } from "./OrderItem.types";

const OrderItem = ({
  item,
  currency = "INR",
  locale = "en-IN",
  onViewProduct,
  onBuyAgain,
  className,
}: OrderItemProps) => {
  const total = item.price * item.quantity;

  const totalFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  return (
    <article className={cn(orderItemStyles.root, className)}>
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className={orderItemStyles.image}
        />
      ) : (
        <div className={orderItemStyles.imageFallback}>
          <ImageOff aria-hidden="true" className="h-5 w-5" />
        </div>
      )}

      <div className={orderItemStyles.content}>
        <div className={orderItemStyles.header}>
          <div className="min-w-0">
            <h3 className={orderItemStyles.name}>{item.name}</h3>

            {item.sellerName && (
              <p className={orderItemStyles.seller}>
                Sold by {item.sellerName}
              </p>
            )}

            {item.variant && (
              <p className={orderItemStyles.variant}>{item.variant}</p>
            )}

            <p className={orderItemStyles.quantity}>
              Quantity: {item.quantity}
            </p>
          </div>

          <div className={orderItemStyles.price}>
            <PriceDisplay
              price={item.price}
              originalPrice={item.originalPrice}
              size="sm"
            />

            {item.quantity > 1 && (
              <p className={orderItemStyles.total}>
                Total:{" "}
                <strong className="text-foreground">
                  {totalFormatter.format(total)}
                </strong>
              </p>
            )}
          </div>
        </div>

        {(onViewProduct || onBuyAgain) && (
          <div className={orderItemStyles.actions}>
            {onViewProduct && (
              <Button
                size="sm"
                variant="outline"
                leftIcon={<Eye className="h-4 w-4" />}
                onClick={() => onViewProduct(item)}
              >
                View Product
              </Button>
            )}

            {onBuyAgain && (
              <Button
                size="sm"
                variant="ghost"
                leftIcon={<RotateCcw className="h-4 w-4" />}
                onClick={() => onBuyAgain(item)}
              >
                Buy Again
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default OrderItem;
