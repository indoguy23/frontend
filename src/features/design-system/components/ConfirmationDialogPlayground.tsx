import { useState } from "react";

import ConfirmationDialog from "@/components/common/ConfirmationDialog";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { showToast } from "@/components/ui/Toast";

const ConfirmationDialogPlayground = () => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [archiveDialogOpen, setArchiveDialogOpen] = useState(false);

  const handleDelete = () => {
    showToast.success("Product deleted successfully.");

    setDeleteDialogOpen(false);
  };

  const handleArchive = () => {
    showToast.success("Product archived successfully.");

    setArchiveDialogOpen(false);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Confirmation Dialog
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable confirmation dialogs for destructive and important
          marketplace actions.
        </p>
      </div>

      <div className="mt-8">
        <Card>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => setArchiveDialogOpen(true)}
            >
              Archive Product
            </Button>

            <Button
              variant="destructive"
              onClick={() => setDeleteDialogOpen(true)}
            >
              Delete Product
            </Button>
          </div>
        </Card>
      </div>

      <ConfirmationDialog
        open={archiveDialogOpen}
        onOpenChange={setArchiveDialogOpen}
        title="Archive product?"
        description="The product will no longer appear in the active product catalogue."
        confirmLabel="Archive"
        onConfirm={handleArchive}
      />

      <ConfirmationDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Delete product?"
        description="This action cannot be undone. The product will be permanently removed."
        confirmLabel="Delete"
        variant="danger"
        onConfirm={handleDelete}
      />
    </section>
  );
};

export default ConfirmationDialogPlayground;
