import { BriefcaseBusiness, Home, MapPin, Pencil, Trash2 } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { addressCardStyles } from "./AddressCard.styles";
import type { AddressCardProps, AddressType } from "./AddressCard.types";

interface AddressTypeIconProps {
  type?: AddressType;
}

const AddressTypeIcon = ({ type }: AddressTypeIconProps) => {
  if (type === "home") {
    return (
      <Home aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
    );
  }

  if (type === "work") {
    return (
      <BriefcaseBusiness
        aria-hidden="true"
        className="h-4 w-4 text-muted-foreground"
      />
    );
  }

  return (
    <MapPin aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
  );
};

const getAddressTypeLabel = (type?: AddressType) => {
  if (!type) {
    return "Other";
  }

  return type.charAt(0).toUpperCase() + type.slice(1);
};

const AddressCard = ({
  address,
  selected = false,
  selectable = false,
  onSelect,
  onEdit,
  onDelete,
  onSetDefault,
  className,
}: AddressCardProps) => {
  const handleSelect = () => {
    if (!selectable) {
      return;
    }

    onSelect?.(address);
  };

  return (
    <article
      className={cn(
        addressCardStyles.card,
        selectable && addressCardStyles.selectable,
        selected && addressCardStyles.selected,
        className,
      )}
      onClick={handleSelect}
    >
      <div className={addressCardStyles.header}>
        <div>
          <div className={addressCardStyles.nameRow}>
            <AddressTypeIcon type={address.type} />

            <h3 className={addressCardStyles.name}>{address.fullName}</h3>

            <Badge variant="secondary">
              {getAddressTypeLabel(address.type)}
            </Badge>

            {address.isDefault && <Badge variant="success">Default</Badge>}
          </div>

          <p className={addressCardStyles.phone}>{address.phone}</p>
        </div>

        {selectable && (
          <input
            type="radio"
            checked={selected}
            readOnly
            aria-label={`Select address for ${address.fullName}`}
            className="h-4 w-4 accent-primary"
          />
        )}
      </div>

      <address className={cn(addressCardStyles.address, "not-italic")}>
        <p>{address.addressLine1}</p>

        {address.addressLine2 && <p>{address.addressLine2}</p>}

        <p>
          {address.city}, {address.state} {address.postalCode}
        </p>

        <p>{address.country}</p>
      </address>

      {(onEdit || onDelete || (onSetDefault && !address.isDefault)) && (
        <div className={addressCardStyles.actions}>
          {onEdit && (
            <Button
              size="sm"
              variant="ghost"
              leftIcon={<Pencil className="h-4 w-4" />}
              onClick={(event) => {
                event.stopPropagation();
                onEdit(address);
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
                onDelete(address);
              }}
            >
              Delete
            </Button>
          )}

          {onSetDefault && !address.isDefault && (
            <Button
              size="sm"
              variant="ghost"
              onClick={(event) => {
                event.stopPropagation();
                onSetDefault(address);
              }}
            >
              Set as Default
            </Button>
          )}
        </div>
      )}
    </article>
  );
};

export default AddressCard;
