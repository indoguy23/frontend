import type { ColumnDef } from "@tanstack/react-table";

import Checkbox from "@/components/ui/form/Checkbox";

export const createSelectionColumn = <TData,>(): ColumnDef<TData> => {
  return {
    id: "select",

    enableSorting: false,
    enableHiding: false,

    header: ({ table }) => (
      <Checkbox
        aria-label="Select all rows"
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomePageRowsSelected()}
        onChange={(event) =>
          table.toggleAllPageRowsSelected(event.target.checked)
        }
      />
    ),

    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={(event) => row.toggleSelected(event.target.checked)}
      />
    ),
  };
};
