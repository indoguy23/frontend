/* eslint-disable react-hooks/incompatible-library */

import { useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type ColumnFiltersState,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
  useReactTable,
} from "@tanstack/react-table";

import EmptyState from "@/components/ui/EmptyState";
import { cn } from "@/utils/cn";

import { dataTableStyles } from "./DataTable.styles";
import DataTableSkeleton from "./DataTableSkeleton";
import type { DataTableProps } from "./DataTable.types";

const DataTable = <TData, TValue = unknown>({
  columns,
  data,
  loading = false,
  emptyState,
  getRowId,
  className,
  tableClassName,

  sorting,
  onSortingChange,

  rowSelection,
  onRowSelectionChange,
  enableRowSelection = false,

  columnVisibility,
  onColumnVisibilityChange,

  columnFilters,
  onColumnFiltersChange,

  globalFilter,
  onGlobalFilterChange,

  pagination,
  onPaginationChange,
  enablePagination = false,

  toolbar,
  footer,
}: DataTableProps<TData, TValue>) => {
  const [internalSorting, setInternalSorting] = useState<SortingState>([]);

  const [internalRowSelection, setInternalRowSelection] =
    useState<RowSelectionState>({});

  const [internalColumnVisibility, setInternalColumnVisibility] =
    useState<VisibilityState>({});

  const [internalColumnFilters, setInternalColumnFilters] =
    useState<ColumnFiltersState>([]);

  const [internalGlobalFilter, setInternalGlobalFilter] = useState("");

  const [internalPagination, setInternalPagination] = useState<PaginationState>(
    {
      pageIndex: 0,
      pageSize: 10,
    },
  );

  const resolvedSorting = sorting ?? internalSorting;

  const resolvedRowSelection = rowSelection ?? internalRowSelection;

  const resolvedColumnVisibility = columnVisibility ?? internalColumnVisibility;

  const resolvedColumnFilters = columnFilters ?? internalColumnFilters;

  const resolvedGlobalFilter = globalFilter ?? internalGlobalFilter;

  const resolvedPagination = pagination ?? internalPagination;

  const handleSortingChange = (
    updater: SortingState | ((old: SortingState) => SortingState),
  ) => {
    const nextSorting =
      typeof updater === "function" ? updater(resolvedSorting) : updater;

    if (onSortingChange) {
      onSortingChange(nextSorting);
      return;
    }

    setInternalSorting(nextSorting);
  };

  const handleRowSelectionChange = (
    updater:
      | RowSelectionState
      | ((old: RowSelectionState) => RowSelectionState),
  ) => {
    const nextSelection =
      typeof updater === "function" ? updater(resolvedRowSelection) : updater;

    if (onRowSelectionChange) {
      onRowSelectionChange(nextSelection);
      return;
    }

    setInternalRowSelection(nextSelection);
  };

  const handleColumnVisibilityChange = (
    updater: VisibilityState | ((old: VisibilityState) => VisibilityState),
  ) => {
    const nextVisibility =
      typeof updater === "function"
        ? updater(resolvedColumnVisibility)
        : updater;

    if (onColumnVisibilityChange) {
      onColumnVisibilityChange(nextVisibility);
      return;
    }

    setInternalColumnVisibility(nextVisibility);
  };

  const handleColumnFiltersChange = (
    updater:
      | ColumnFiltersState
      | ((old: ColumnFiltersState) => ColumnFiltersState),
  ) => {
    const nextFilters =
      typeof updater === "function" ? updater(resolvedColumnFilters) : updater;

    if (onColumnFiltersChange) {
      onColumnFiltersChange(nextFilters);
      return;
    }

    setInternalColumnFilters(nextFilters);
  };

  const handleGlobalFilterChange = (
    updater: string | ((old: string) => string),
  ) => {
    const nextValue =
      typeof updater === "function" ? updater(resolvedGlobalFilter) : updater;

    if (onGlobalFilterChange) {
      onGlobalFilterChange(nextValue);
      return;
    }

    setInternalGlobalFilter(nextValue);
  };

  const handlePaginationChange = (
    updater: PaginationState | ((old: PaginationState) => PaginationState),
  ) => {
    const nextPagination =
      typeof updater === "function" ? updater(resolvedPagination) : updater;

    if (onPaginationChange) {
      onPaginationChange(nextPagination);
      return;
    }

    setInternalPagination(nextPagination);
  };

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting: resolvedSorting,
      rowSelection: resolvedRowSelection,
      columnVisibility: resolvedColumnVisibility,
      columnFilters: resolvedColumnFilters,
      globalFilter: resolvedGlobalFilter,
      pagination: resolvedPagination,
    },

    onSortingChange: handleSortingChange,

    onRowSelectionChange: handleRowSelectionChange,

    onColumnVisibilityChange: handleColumnVisibilityChange,

    onColumnFiltersChange: handleColumnFiltersChange,

    onGlobalFilterChange: handleGlobalFilterChange,

    onPaginationChange: handlePaginationChange,

    enableRowSelection,

    getCoreRowModel: getCoreRowModel(),

    getFilteredRowModel: getFilteredRowModel(),

    getSortedRowModel: getSortedRowModel(),

    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,

    getRowId: getRowId ? (row, index) => getRowId(row, index) : undefined,
  });

  const headerGroups = table.getHeaderGroups();

  const rows = table.getRowModel().rows;

  const visibleColumnCount = table.getVisibleLeafColumns().length;

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      {toolbar && (
        <div className="flex flex-wrap items-center justify-end gap-3">
          {toolbar(table)}
        </div>
      )}

      {/* Table */}
      <div className={cn(dataTableStyles.container, className)}>
        <div className={dataTableStyles.scrollArea}>
          <table className={cn(dataTableStyles.table, tableClassName)}>
            <thead className={dataTableStyles.header}>
              {headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id} className={dataTableStyles.headerRow}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      scope="col"
                      className={dataTableStyles.headerCell}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody className={dataTableStyles.body}>
              {loading ? (
                <DataTableSkeleton columnCount={visibleColumnCount} />
              ) : rows.length > 0 ? (
                rows.map((row) => (
                  <tr
                    key={row.id}
                    className={cn(
                      dataTableStyles.row,
                      row.getIsSelected() && "bg-muted/50",
                    )}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className={dataTableStyles.cell}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={visibleColumnCount}
                    className={dataTableStyles.emptyCell}
                  >
                    {emptyState ?? (
                      <EmptyState
                        className="border-0 py-14"
                        title="No data available"
                        description="There are currently no records to display."
                      />
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      {footer && <div>{footer(table)}</div>}
    </div>
  );
};

export default DataTable;
