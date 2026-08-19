import { Minus, Plus } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { quantitySelectorStyles } from "./QuantitySelector.styles";
import type { QuantitySelectorProps } from "./QuantitySelector.types";

const QuantitySelector = ({
  value,
  onChange,
  min = 1,
  max,
  disabled = false,
  size = "md",
  className,
  decrementLabel = "Decrease quantity",
  incrementLabel = "Increase quantity",
}: QuantitySelectorProps) => {
  const canDecrease = !disabled && value > min;

  const canIncrease = !disabled && (max === undefined || value < max);

  const handleDecrease = () => {
    if (!canDecrease) {
      return;
    }

    onChange(value - 1);
  };

  const handleIncrease = () => {
    if (!canIncrease) {
      return;
    }

    onChange(value + 1);
  };

  return (
    <div
      className={cn(
        quantitySelectorStyles.root,
        disabled && quantitySelectorStyles.disabled,
        className,
      )}
    >
      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label={decrementLabel}
        disabled={!canDecrease}
        onClick={handleDecrease}
      >
        <Minus
          aria-hidden="true"
          className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"}
        />
      </Button>

      <span
        aria-live="polite"
        aria-atomic="true"
        className={cn(
          quantitySelectorStyles.value,
          size === "sm"
            ? quantitySelectorStyles.valueSm
            : quantitySelectorStyles.valueMd,
        )}
      >
        {value}
      </span>

      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label={incrementLabel}
        disabled={!canIncrease}
        onClick={handleIncrease}
      >
        <Plus
          aria-hidden="true"
          className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"}
        />
      </Button>
    </div>
  );
};

export default QuantitySelector;
