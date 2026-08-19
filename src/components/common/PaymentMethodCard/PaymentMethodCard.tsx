import {
  Banknote,
  CreditCard,
  Pencil,
  QrCode,
  Trash2,
  WalletCards,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { paymentMethodCardStyles } from "./PaymentMethodCard.styles";
import type {
  PaymentMethodCardProps,
  PaymentMethodType,
} from "./PaymentMethodCard.types";

interface PaymentMethodIconProps {
  type: PaymentMethodType;
}

const PaymentMethodIcon = ({ type }: PaymentMethodIconProps) => {
  if (type === "card") {
    return <CreditCard aria-hidden="true" className="h-5 w-5" />;
  }

  if (type === "upi") {
    return <QrCode aria-hidden="true" className="h-5 w-5" />;
  }

  if (type === "cod") {
    return <Banknote aria-hidden="true" className="h-5 w-5" />;
  }

  return <WalletCards aria-hidden="true" className="h-5 w-5" />;
};

const PaymentMethodCard = ({
  method,
  selected = false,
  selectable = false,
  onSelect,
  onEdit,
  onDelete,
  className,
}: PaymentMethodCardProps) => {
  const handleSelect = () => {
    if (!selectable || method.disabled) {
      return;
    }

    onSelect?.(method);
  };

  return (
    <article
      className={cn(
        paymentMethodCardStyles.root,
        selectable && paymentMethodCardStyles.selectable,
        selected && paymentMethodCardStyles.selected,
        method.disabled && paymentMethodCardStyles.disabled,
        className,
      )}
      onClick={handleSelect}
    >
      <div className={paymentMethodCardStyles.header}>
        <div className={paymentMethodCardStyles.method}>
          <div className={paymentMethodCardStyles.icon}>
            <PaymentMethodIcon type={method.type} />
          </div>

          <div className={paymentMethodCardStyles.content}>
            <div className={paymentMethodCardStyles.titleRow}>
              <h3 className={paymentMethodCardStyles.title}>{method.title}</h3>

              {method.isDefault && <Badge variant="success">Default</Badge>}
            </div>

            {method.description && (
              <p className={paymentMethodCardStyles.description}>
                {method.description}
              </p>
            )}

            {method.maskedValue && (
              <p className={paymentMethodCardStyles.maskedValue}>
                {method.maskedValue}
              </p>
            )}
          </div>
        </div>

        {selectable && (
          <input
            type="radio"
            checked={selected}
            disabled={method.disabled}
            readOnly
            aria-label={`Select ${method.title}`}
            className="h-4 w-4 accent-primary"
          />
        )}
      </div>

      {(onEdit || onDelete) && (
        <div className={paymentMethodCardStyles.actions}>
          {onEdit && (
            <Button
              size="sm"
              variant="ghost"
              leftIcon={<Pencil className="h-4 w-4" />}
              onClick={(event) => {
                event.stopPropagation();
                onEdit(method);
              }}
            >
              Edit
            </Button>
          )}

          {onDelete && (
            <Button
              size="sm"
              variant="ghost"
              leftIcon={<Trash2 className="h-4 w-4" />}
              onClick={(event) => {
                event.stopPropagation();
                onDelete(method);
              }}
            >
              Remove
            </Button>
          )}
        </div>
      )}
    </article>
  );
};

export default PaymentMethodCard;
