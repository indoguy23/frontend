import type { HTMLAttributes } from "react";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;

  onPageChange: (page: number) => void;

  siblingCount?: number;

  showFirstLast?: boolean;

  disabled?: boolean;
}
