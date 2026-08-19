import { forwardRef } from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/utils/cn";

import { dialogContentVariants, dialogStyles } from "./Dialog.styles";
import type {
  DialogBodyProps,
  DialogCloseProps,
  DialogCloseRef,
  DialogContentProps,
  DialogContentRef,
  DialogDescriptionProps,
  DialogDescriptionRef,
  DialogFooterProps,
  DialogHeaderProps,
  DialogProps,
  DialogTitleProps,
  DialogTitleRef,
  DialogTriggerProps,
  DialogTriggerRef,
} from "./Dialog.types";

const DialogRoot = ({ modal = true, ...props }: DialogProps) => {
  return <DialogPrimitive.Root modal={modal} {...props} />;
};

const DialogTrigger = forwardRef<DialogTriggerRef, DialogTriggerProps>(
  (props, ref) => {
    return <DialogPrimitive.Trigger ref={ref} {...props} />;
  },
);

DialogTrigger.displayName = "Dialog.Trigger";

const DialogClose = forwardRef<DialogCloseRef, DialogCloseProps>(
  (props, ref) => {
    return <DialogPrimitive.Close ref={ref} {...props} />;
  },
);

DialogClose.displayName = "Dialog.Close";

const DialogContent = forwardRef<DialogContentRef, DialogContentProps>(
  ({ size, showCloseButton = true, className, children, ...props }, ref) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={dialogStyles.overlay} />

        <DialogPrimitive.Content
          ref={ref}
          className={cn(dialogContentVariants({ size }), className)}
          {...props}
        >
          <div className="max-h-[calc(100vh-2rem)] overflow-y-auto p-6 sm:p-8">
            {children}
          </div>

          {showCloseButton && (
            <DialogPrimitive.Close
              className={dialogStyles.closeButton}
              aria-label="Close dialog"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  },
);

DialogContent.displayName = "Dialog.Content";

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return <div className={cn(dialogStyles.header, className)} {...props} />;
};

DialogHeader.displayName = "Dialog.Header";

const DialogTitle = forwardRef<DialogTitleRef, DialogTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <DialogPrimitive.Title
        ref={ref}
        className={cn(dialogStyles.title, className)}
        {...props}
      />
    );
  },
);

DialogTitle.displayName = "Dialog.Title";

const DialogDescription = forwardRef<
  DialogDescriptionRef,
  DialogDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(dialogStyles.description, className)}
      {...props}
    />
  );
});

DialogDescription.displayName = "Dialog.Description";

const DialogBody = ({ className, ...props }: DialogBodyProps) => {
  return <div className={cn(dialogStyles.body, className)} {...props} />;
};

DialogBody.displayName = "Dialog.Body";

const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  return <div className={cn(dialogStyles.footer, className)} {...props} />;
};

DialogFooter.displayName = "Dialog.Footer";

const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Title: DialogTitle,
  Description: DialogDescription,
  Body: DialogBody,
  Footer: DialogFooter,
  Close: DialogClose,
});

export default Dialog;
