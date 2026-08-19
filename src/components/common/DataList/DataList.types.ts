import type { ReactNode } from "react";

export interface DataListItem {
  id: string;

  title: string;

  description?: string;

  leading?: ReactNode;

  trailing?: ReactNode;

  meta?: ReactNode;

  disabled?: boolean;

  onClick?: () => void;
}

export interface DataListProps {
  items: DataListItem[];

  emptyState?: ReactNode;

  divided?: boolean;

  compact?: boolean;

  className?: string;
}
