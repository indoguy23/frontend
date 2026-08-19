import type { ReactNode } from "react";

import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  RowSelectionState,
  SortingState,
  Table,
  VisibilityState,
} from "@tanstack/react-table";
export interface DataTableProps<TData, TValue = unknown> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];

  loading?: boolean;
  emptyState?: ReactNode;

  getRowId?: (row: TData, index: number) => string;

  className?: string;
  tableClassName?: string;

  sorting?: SortingState;
  onSortingChange?: (sorting: SortingState) => void;

  rowSelection?: RowSelectionState;
  onRowSelectionChange?: (selection: RowSelectionState) => void;

  enableRowSelection?: boolean;

  columnVisibility?: VisibilityState;
  onColumnVisibilityChange?: (visibility: VisibilityState) => void;

  columnFilters?: ColumnFiltersState;
  onColumnFiltersChange?: (filters: ColumnFiltersState) => void;

  globalFilter?: string;
  onGlobalFilterChange?: (value: string) => void;

  pagination?: PaginationState;

  onPaginationChange?: (pagination: PaginationState) => void;

  enablePagination?: boolean;

  toolbar?: (table: Table<TData>) => ReactNode;

  footer?: (table: Table<TData>) => ReactNode;
}
