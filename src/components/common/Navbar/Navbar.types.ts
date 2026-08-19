import type { ReactNode } from "react";

export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links: NavbarLink[];

  searchValue?: string;
  onSearchChange?: (value: string) => void;

  cartCount?: number;
  wishlistCount?: number;

  onCartClick?: () => void;
  onWishlistClick?: () => void;

  userMenu?: ReactNode;

  className?: string;
}
