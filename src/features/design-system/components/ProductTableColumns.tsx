import type { ColumnDef } from "@tanstack/react-table";

import {
  createSelectionColumn,
  DataTableColumnHeader,
} from "@/components/common/DataTable";
import Badge from "@/components/ui/Badge";

import type { ProductTableRow } from "../types/productTable.types";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const selectionColumn = createSelectionColumn<ProductTableRow>();

export const productTableColumns: ColumnDef<ProductTableRow>[] = [
  selectionColumn,

  {
    accessorKey: "name",

    enableHiding: false,

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),

    cell: ({ row }) => (
      <div>
        <p className="font-medium text-foreground">{row.original.name}</p>

        <p className="mt-1 text-xs text-muted-foreground">{row.original.id}</p>
      </div>
    ),
  },

  {
    accessorKey: "category",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),

    enableColumnFilter: true,
  },

  {
    accessorKey: "price",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),

    cell: ({ row }) => currencyFormatter.format(row.original.price),
  },

  {
    accessorKey: "stock",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stock" />
    ),

    cell: ({ row }) => (
      <span
        className={
          row.original.stock === 0
            ? "font-medium text-danger"
            : "text-foreground"
        }
      >
        {row.original.stock}
      </span>
    ),
  },

  {
    accessorKey: "status",

    enableSorting: false,
    enableColumnFilter: false,

    header: "Status",

    cell: ({ row }) => {
      const status = row.original.status;

      if (status === "active") {
        return <Badge variant="success">Active</Badge>;
      }

      if (status === "out-of-stock") {
        return <Badge variant="destructive">Out of Stock</Badge>;
      }

      return <Badge variant="secondary">Draft</Badge>;
    },
  },
];
