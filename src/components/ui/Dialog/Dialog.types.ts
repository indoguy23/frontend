import type {
  ComponentPropsWithoutRef,
  ComponentRef,
  HTMLAttributes,
} from "react";
import type { VariantProps } from "class-variance-authority";

import type * as DialogPrimitive from "@radix-ui/react-dialog";

import type { dialogContentVariants } from "./Dialog.styles";

export type DialogProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export type DialogTriggerProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
>;

export type DialogCloseProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Close
>;

export type DialogTitleProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

export type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

export interface DialogContentProps
  extends
    ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  showCloseButton?: boolean;
}

export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

export type DialogBodyProps = HTMLAttributes<HTMLDivElement>;

export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

export type DialogContentRef = ComponentRef<typeof DialogPrimitive.Content>;

export type DialogTriggerRef = ComponentRef<typeof DialogPrimitive.Trigger>;

export type DialogCloseRef = ComponentRef<typeof DialogPrimitive.Close>;

export type DialogTitleRef = ComponentRef<typeof DialogPrimitive.Title>;

export type DialogDescriptionRef = ComponentRef<
  typeof DialogPrimitive.Description
>;
