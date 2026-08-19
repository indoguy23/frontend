import type { AddressData } from "../Address/AddressCard.types";

export interface AddressSelectorProps {
  addresses: AddressData[];

  value?: string;

  onChange: (addressId: string) => void;

  onEdit?: (address: AddressData) => void;

  onDelete?: (address: AddressData) => void;

  onAddNew?: () => void;

  className?: string;
}
