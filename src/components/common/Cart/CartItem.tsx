import { Trash2 } from "lucide-react";
import QuantitySelector from "@/components/common/QuantitySelector";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { cartStyles } from "./Cart.styles";
import type { CartItemProps } from "./Cart.types";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const CartItem = ({
  item,
  onQuantityChange,
  onRemove,
  className,
}: CartItemProps) => {
  return (
    <article className={cn(cartStyles.item, className)}>
      <img src={item.image} alt={item.name} className={cartStyles.image} />

      <div className={cartStyles.itemContent}>
        <h3 className={cartStyles.itemName}>{item.name}</h3>

        <div className={cartStyles.priceRow}>
          <span className={cartStyles.price}>
            {currencyFormatter.format(item.price)}
          </span>

          {item.originalPrice && item.originalPrice > item.price && (
            <span className={cartStyles.originalPrice}>
              {currencyFormatter.format(item.originalPrice)}
            </span>
          )}
        </div>

        <div className={cartStyles.itemActions}>
          <QuantitySelector
            value={item.quantity}
            min={1}
            max={item.stock}
            size="sm"
            decrementLabel={`Decrease quantity of ${item.name}`}
            incrementLabel={`Increase quantity of ${item.name}`}
            onChange={(quantity) => onQuantityChange?.(item, quantity)}
          />

          <Button
            size="sm"
            variant="ghost"
            leftIcon={<Trash2 className="h-4 w-4" />}
            onClick={() => onRemove?.(item)}
          >
            Remove
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
