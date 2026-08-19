import { AlertTriangle } from "lucide-react";

import Button from "@/components/ui/Button";
import Dialog from "@/components/ui/Dialog";

import type { ConfirmDialogProps } from "./ConfirmDialog.types";

const ConfirmDialog = ({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default",
  loading = false,
  onConfirm,
}: ConfirmDialogProps) => {
  const isDestructive = variant === "destructive";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Dialog.Content>
        <Dialog.Header>
          <div className="flex items-start gap-3">
            {isDestructive && (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <AlertTriangle aria-hidden="true" className="h-5 w-5" />
              </div>
            )}

            <div>
              <Dialog.Title>{title}</Dialog.Title>

              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
            </div>
          </div>
        </Dialog.Header>

        <Dialog.Footer>
          <Button
            variant="outline"
            disabled={loading}
            onClick={() => onOpenChange(false)}
          >
            {cancelLabel}
          </Button>

          <Button
            variant={isDestructive ? "destructive" : "primary"}
            loading={loading}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

export default ConfirmDialog;
