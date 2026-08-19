import type { ReactNode } from "react";

export interface FilterEmptyStateProps {
  title?: string;

  description?: string;

  searchTerm?: string;

  activeFilterCount?: number;

  primaryAction?: ReactNode;

  secondaryAction?: ReactNode;

  className?: string;
}
