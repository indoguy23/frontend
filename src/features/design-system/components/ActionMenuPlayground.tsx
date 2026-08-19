import { Archive, Copy, Eye, Pencil, Trash2 } from "lucide-react";

import ActionMenu from "@/components/common/ActionMenu";
import type { ActionMenuItem } from "@/components/common/ActionMenu";
import Card from "@/components/ui/Card";
import { showToast } from "@/components/ui/Toast";

const ActionMenuPlayground = () => {
  const actions: ActionMenuItem[] = [
    {
      id: "view",
      label: "View Details",
      icon: <Eye />,
      onClick: () => {
        showToast.info("View details requested.");
      },
    },

    {
      id: "edit",
      label: "Edit",
      icon: <Pencil />,
      onClick: () => {
        showToast.info("Edit requested.");
      },
    },

    {
      id: "duplicate",
      label: "Duplicate",
      icon: <Copy />,
      onClick: () => {
        showToast.success("Duplicate requested.");
      },
    },

    {
      id: "archive",
      label: "Archive",
      icon: <Archive />,
      separatorBefore: true,
      onClick: () => {
        showToast.info("Archive requested.");
      },
    },

    {
      id: "delete",
      label: "Delete",
      icon: <Trash2 />,
      variant: "danger",
      onClick: () => {
        showToast.error("Delete requested.");
      },
    },
  ];

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Action Menu
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable contextual actions for products, orders, sellers, tables and
          dashboard items.
        </p>
      </div>

      <div className="mt-8 max-w-xl">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-foreground">Wireless Headphones</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Product ID: MH-PROD-001
              </p>
            </div>

            <ActionMenu items={actions} label="Product actions" />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ActionMenuPlayground;
