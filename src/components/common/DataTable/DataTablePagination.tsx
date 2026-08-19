import type { Table } from "@tanstack/react-table";

import Pagination from "@/components/common/Pagination";
import Select from "@/components/ui/form/Select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
}

const DataTablePagination = <TData,>({
  table,
  pageSizeOptions = [10, 20, 50],
}: DataTablePaginationProps<TData>) => {
  const pageIndex = table.getState().pagination.pageIndex;

  const pageSize = table.getState().pagination.pageSize;

  const pageCount = table.getPageCount();

  const filteredRowCount = table.getFilteredRowModel().rows.length;

  const startRow = filteredRowCount === 0 ? 0 : pageIndex * pageSize + 1;

  const endRow = Math.min((pageIndex + 1) * pageSize, filteredRowCount);

  const options = pageSizeOptions.map((size) => ({
    label: `${size} rows`,
    value: String(size),
  }));

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <strong className="text-foreground">
            {startRow}-{endRow}
          </strong>{" "}
          of <strong className="text-foreground">{filteredRowCount}</strong>{" "}
          rows
        </p>

        <div className="w-full sm:w-36">
          <Select
            value={String(pageSize)}
            options={options}
            onChange={(event) => {
              table.setPageSize(Number(event.target.value));
            }}
          />
        </div>
      </div>

      <div className="w-full sm:w-auto">
        <Pagination
          currentPage={pageIndex + 1}
          totalPages={pageCount}
          showFirstLast={false}
          onPageChange={(page) => {
            table.setPageIndex(page - 1);
          }}
        />
      </div>
    </div>
  );
};

export default DataTablePagination;
