export type AddressType = "home" | "work" | "other";

export interface AddressData {
  id: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  type?: AddressType;
  isDefault?: boolean;
}

export interface AddressCardProps {
  address: AddressData;

  selected?: boolean;

  selectable?: boolean;

  onSelect?: (address: AddressData) => void;

  onEdit?: (address: AddressData) => void;

  onDelete?: (address: AddressData) => void;

  onSetDefault?: (address: AddressData) => void;

  className?: string;
}
