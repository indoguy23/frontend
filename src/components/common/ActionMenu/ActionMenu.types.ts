import type { ReactNode } from "react";

export type ActionMenuItemVariant = "default" | "danger";

export interface ActionMenuItem {
  id: string;

  label: string;

  icon?: ReactNode;

  disabled?: boolean;

  variant?: ActionMenuItemVariant;

  separatorBefore?: boolean;

  onClick: () => void;
}

export interface ActionMenuProps {
  items: ActionMenuItem[];

  label?: string;

  className?: string;
}
