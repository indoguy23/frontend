import type {
  ComponentPropsWithoutRef,
  ComponentRef,
  HTMLAttributes,
} from "react";

import type * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export type DropdownMenuProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Root
>;

export type DropdownMenuTriggerProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Trigger
>;

export type DropdownMenuContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>;

export type DropdownMenuItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> & {
  inset?: boolean;
  destructive?: boolean;
};

export type DropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

export type DropdownMenuRadioGroupProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioGroup
>;

export type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioItem
>;

export type DropdownMenuLabelProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Label
> & {
  inset?: boolean;
};

export type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>;

export type DropdownMenuSubProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Sub
>;

export type DropdownMenuSubTriggerProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubTrigger
> & {
  inset?: boolean;
};

export type DropdownMenuSubContentProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubContent
>;

export type DropdownMenuGroupProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Group
>;

export type DropdownMenuShortcutProps = HTMLAttributes<HTMLSpanElement>;

export type DropdownMenuTriggerRef = ComponentRef<
  typeof DropdownMenuPrimitive.Trigger
>;

export type DropdownMenuContentRef = ComponentRef<
  typeof DropdownMenuPrimitive.Content
>;

export type DropdownMenuItemRef = ComponentRef<
  typeof DropdownMenuPrimitive.Item
>;

export type DropdownMenuCheckboxItemRef = ComponentRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

export type DropdownMenuRadioItemRef = ComponentRef<
  typeof DropdownMenuPrimitive.RadioItem
>;

export type DropdownMenuLabelRef = ComponentRef<
  typeof DropdownMenuPrimitive.Label
>;

export type DropdownMenuSeparatorRef = ComponentRef<
  typeof DropdownMenuPrimitive.Separator
>;

export type DropdownMenuSubTriggerRef = ComponentRef<
  typeof DropdownMenuPrimitive.SubTrigger
>;

export type DropdownMenuSubContentRef = ComponentRef<
  typeof DropdownMenuPrimitive.SubContent
>;
