import Button from "@/components/ui/Button";
import Dialog from "@/components/ui/Dialog";

import { confirmationDialogStyles } from "./ConfirmationDialog.styles";
import type { ConfirmationDialogProps } from "./ConfirmationDialog.types";

const ConfirmationDialog = ({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default",
  loading = false,
  disabled = false,
  onConfirm,
}: ConfirmationDialogProps) => {
  const isDanger = variant === "danger";

  const handleConfirm = () => {
    if (loading || disabled) {
      return;
    }

    onConfirm();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Dialog.Content size="sm" className={confirmationDialogStyles.content}>
        <Dialog.Header>
          <Dialog.Title>{title}</Dialog.Title>

          {description && (
            <Dialog.Description>{description}</Dialog.Description>
          )}
        </Dialog.Header>

        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button type="button" variant="outline" disabled={loading}>
              {cancelLabel}
            </Button>
          </Dialog.Close>

          <Button
            type="button"
            variant={isDanger ? "destructive" : "primary"}
            loading={loading}
            disabled={disabled || loading}
            onClick={handleConfirm}
          >
            {confirmLabel}
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

export default ConfirmationDialog;
