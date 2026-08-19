import { CheckCircle2, Tag, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/form/Input";
import { cn } from "@/utils/cn";

import { couponInputStyles } from "./CouponInput.styles";
import type { CouponInputProps } from "./CouponInput.types";

const CouponInput = ({
  value,
  onChange,
  onApply,
  onRemove,
  applied = false,
  loading = false,
  disabled = false,
  successMessage = "Coupon applied successfully.",
  error,
  placeholder = "Enter coupon code",
  className,
}: CouponInputProps) => {
  const normalizedValue = value.trim();

  const handleApply = () => {
    if (!normalizedValue || loading || disabled || applied) {
      return;
    }

    onApply(normalizedValue);
  };

  return (
    <div className={cn(couponInputStyles.root, className)}>
      {!applied && (
        <div className={couponInputStyles.fieldRow}>
          <div className={couponInputStyles.inputWrapper}>
            <Input
              value={value}
              placeholder={placeholder}
              disabled={disabled || loading}
              aria-invalid={Boolean(error)}
              onChange={(event) => onChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleApply();
                }
              }}
            />

            {error && (
              <p role="alert" className={couponInputStyles.errorText}>
                {error}
              </p>
            )}
          </div>

          <Button
            leftIcon={<Tag className="h-4 w-4" />}
            loading={loading}
            disabled={disabled || loading || !normalizedValue}
            onClick={handleApply}
          >
            Apply
          </Button>
        </div>
      )}

      {applied && (
        <div className={couponInputStyles.appliedBox}>
          <div className="flex items-start gap-2">
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-success"
            />

            <div>
              <p className={couponInputStyles.successText}>{successMessage}</p>

              {normalizedValue && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Coupon:{" "}
                  <strong className="text-foreground">{normalizedValue}</strong>
                </p>
              )}
            </div>
          </div>

          {onRemove && (
            <Button
              size="sm"
              variant="ghost"
              leftIcon={<X className="h-4 w-4" />}
              onClick={onRemove}
            >
              Remove
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default CouponInput;
