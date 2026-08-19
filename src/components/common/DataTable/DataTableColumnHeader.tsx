import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import type { Column } from "@tanstack/react-table";

import { cn } from "@/utils/cn";

interface DataTableColumnHeaderProps<TData> {
  column: Column<TData, unknown>;
  title: string;
  className?: string;
}

const DataTableColumnHeader = <TData,>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData>) => {
  if (!column.getCanSort()) {
    return <span className={className}>{title}</span>;
  }

  const sortingState = column.getIsSorted();

  return (
    <button
      type="button"
      onClick={() => column.toggleSorting(sortingState === "asc")}
      className={cn(
        "inline-flex items-center gap-2",
        "rounded-md",
        "font-medium",
        "transition-colors",
        "hover:text-foreground",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-ring",
        className,
      )}
      aria-label={`Sort by ${title}`}
    >
      <span>{title}</span>

      {sortingState === "asc" ? (
        <ArrowUp aria-hidden="true" className="h-4 w-4" />
      ) : sortingState === "desc" ? (
        <ArrowDown aria-hidden="true" className="h-4 w-4" />
      ) : (
        <ChevronsUpDown
          aria-hidden="true"
          className="h-4 w-4 text-muted-foreground"
        />
      )}
    </button>
  );
};

export default DataTableColumnHeader;
