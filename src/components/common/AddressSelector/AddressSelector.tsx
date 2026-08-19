import { Plus } from "lucide-react";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { cn } from "@/utils/cn";

import { addressSelectorStyles } from "./AddressSelector.styles";
import type { AddressSelectorProps } from "./AddressSelector.types";
import AddressCard from "../Address";

const AddressSelector = ({
  addresses,
  value,
  onChange,
  onEdit,
  onDelete,
  onAddNew,
  className,
}: AddressSelectorProps) => {
  if (addresses.length === 0) {
    return (
      <div className={cn(addressSelectorStyles.root, className)}>
        <EmptyState
          title="No saved addresses"
          description="Add a delivery address to continue."
        />

        {onAddNew && (
          <div className={addressSelectorStyles.emptyAction}>
            <Button leftIcon={<Plus className="h-4 w-4" />} onClick={onAddNew}>
              Add Address
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn(addressSelectorStyles.root, className)}>
      <div className={addressSelectorStyles.grid}>
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            selectable
            selected={value === address.id}
            onSelect={(selectedAddress) => onChange(selectedAddress.id)}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>

      {onAddNew && (
        <Button
          className={addressSelectorStyles.addButton}
          variant="outline"
          leftIcon={<Plus className="h-4 w-4" />}
          onClick={onAddNew}
        >
          Add New Address
        </Button>
      )}
    </div>
  );
};

export default AddressSelector;
