import { useState } from "react";

import ConfirmDialog from "@/components/common/ConfirmDialog";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { showToast } from "@/components/ui/Toast";

const ConfirmDialogPlayground = () => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Confirm Dialog
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable confirmation dialogs for important and destructive actions.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-foreground">
            Standard Confirmation
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Use for non-destructive actions requiring confirmation.
          </p>

          <Button className="mt-5" onClick={() => setConfirmOpen(true)}>
            Publish Product
          </Button>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">
            Destructive Confirmation
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Use before permanent or risky actions.
          </p>

          <Button
            className="mt-5"
            variant="destructive"
            onClick={() => setDeleteOpen(true)}
          >
            Delete Product
          </Button>
        </Card>
      </div>

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Publish product?"
        description="This product will become visible to marketplace customers."
        confirmLabel="Publish"
        onConfirm={() => {
          setConfirmOpen(false);

          showToast.success("Product published successfully.");
        }}
      />

      <ConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        variant="destructive"
        title="Delete product?"
        description="This action cannot be undone. The product will be permanently removed."
        confirmLabel="Delete"
        onConfirm={() => {
          setDeleteOpen(false);

          showToast.success("Product deleted successfully.");
        }}
      />
    </section>
  );
};

export default ConfirmDialogPlayground;
