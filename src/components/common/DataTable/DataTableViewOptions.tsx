import { SlidersHorizontal } from "lucide-react";
import type { Table } from "@tanstack/react-table";

import Button from "@/components/ui/Button";
import DropdownMenu from "@/components/ui/DropdownMenu";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

const DataTableViewOptions = <TData,>({
  table,
}: DataTableViewOptionsProps<TData>) => {
  const columns = table
    .getAllColumns()
    .filter(
      (column) =>
        column.getCanHide() && typeof column.accessorFn !== "undefined",
    );

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="outline"
          leftIcon={<SlidersHorizontal className="h-4 w-4" />}
        >
          Columns
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end">
        <DropdownMenu.Label>Toggle Columns</DropdownMenu.Label>

        <DropdownMenu.Separator />

        {columns.map((column) => (
          <DropdownMenu.CheckboxItem
            key={column.id}
            checked={column.getIsVisible()}
            onCheckedChange={(value) => column.toggleVisibility(value === true)}
          >
            <span className="capitalize">{column.id}</span>
          </DropdownMenu.CheckboxItem>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

export default DataTableViewOptions;
