import { forwardRef } from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/utils/cn";

import { dropdownMenuStyles } from "./DropdownMenu.styles";
import type {
  DropdownMenuCheckboxItemProps,
  DropdownMenuCheckboxItemRef,
  DropdownMenuContentProps,
  DropdownMenuContentRef,
  DropdownMenuGroupProps,
  DropdownMenuItemProps,
  DropdownMenuItemRef,
  DropdownMenuLabelProps,
  DropdownMenuLabelRef,
  DropdownMenuProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuRadioItemRef,
  DropdownMenuSeparatorProps,
  DropdownMenuSeparatorRef,
  DropdownMenuShortcutProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubContentRef,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubTriggerRef,
  DropdownMenuTriggerProps,
  DropdownMenuTriggerRef,
} from "./DropdownMenu.types";

const DropdownMenuRoot = (props: DropdownMenuProps) => {
  return <DropdownMenuPrimitive.Root {...props} />;
};

const DropdownMenuTrigger = forwardRef<
  DropdownMenuTriggerRef,
  DropdownMenuTriggerProps
>((props, ref) => {
  return <DropdownMenuPrimitive.Trigger ref={ref} {...props} />;
});

DropdownMenuTrigger.displayName = "DropdownMenu.Trigger";

const DropdownMenuContent = forwardRef<
  DropdownMenuContentRef,
  DropdownMenuContentProps
>(({ sideOffset = 8, align = "end", className, children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        align={align}
        className={cn(dropdownMenuStyles.content, className)}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
});

DropdownMenuContent.displayName = "DropdownMenu.Content";

const DropdownMenuItem = forwardRef<DropdownMenuItemRef, DropdownMenuItemProps>(
  ({ inset = false, destructive = false, className, ...props }, ref) => {
    return (
      <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(
          dropdownMenuStyles.item,
          inset && dropdownMenuStyles.insetItem,
          destructive && dropdownMenuStyles.destructiveItem,
          className,
        )}
        {...props}
      />
    );
  },
);

DropdownMenuItem.displayName = "DropdownMenu.Item";

const DropdownMenuCheckboxItem = forwardRef<
  DropdownMenuCheckboxItemRef,
  DropdownMenuCheckboxItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(dropdownMenuStyles.item, "pl-8", className)}
      {...props}
    >
      <span className={dropdownMenuStyles.indicator}>
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

DropdownMenuCheckboxItem.displayName = "DropdownMenu.CheckboxItem";

const DropdownMenuRadioGroup = (props: DropdownMenuRadioGroupProps) => {
  return <DropdownMenuPrimitive.RadioGroup {...props} />;
};

const DropdownMenuRadioItem = forwardRef<
  DropdownMenuRadioItemRef,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(dropdownMenuStyles.item, "pl-8", className)}
      {...props}
    >
      <span className={dropdownMenuStyles.indicator}>
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="h-2.5 w-2.5 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>

      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});

DropdownMenuRadioItem.displayName = "DropdownMenu.RadioItem";

const DropdownMenuLabel = forwardRef<
  DropdownMenuLabelRef,
  DropdownMenuLabelProps
>(({ inset = false, className, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(dropdownMenuStyles.label, inset && "pl-8", className)}
      {...props}
    />
  );
});

DropdownMenuLabel.displayName = "DropdownMenu.Label";

const DropdownMenuSeparator = forwardRef<
  DropdownMenuSeparatorRef,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn(dropdownMenuStyles.separator, className)}
      {...props}
    />
  );
});

DropdownMenuSeparator.displayName = "DropdownMenu.Separator";

const DropdownMenuGroup = (props: DropdownMenuGroupProps) => {
  return <DropdownMenuPrimitive.Group {...props} />;
};

const DropdownMenuShortcut = ({
  className,
  ...props
}: DropdownMenuShortcutProps) => {
  return (
    <span className={cn(dropdownMenuStyles.shortcut, className)} {...props} />
  );
};

const DropdownMenuSub = (props: DropdownMenuSubProps) => {
  return <DropdownMenuPrimitive.Sub {...props} />;
};

const DropdownMenuSubTrigger = forwardRef<
  DropdownMenuSubTriggerRef,
  DropdownMenuSubTriggerProps
>(({ inset = false, className, children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        dropdownMenuStyles.subTrigger,
        inset && dropdownMenuStyles.insetItem,
        className,
      )}
      {...props}
    >
      {children}

      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
});

DropdownMenuSubTrigger.displayName = "DropdownMenu.SubTrigger";

const DropdownMenuSubContent = forwardRef<
  DropdownMenuSubContentRef,
  DropdownMenuSubContentProps
>(({ sideOffset = 6, className, children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.SubContent
        ref={ref}
        sideOffset={sideOffset}
        className={cn(dropdownMenuStyles.subContent, className)}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.SubContent>
    </DropdownMenuPrimitive.Portal>
  );
});

DropdownMenuSubContent.displayName = "DropdownMenu.SubContent";

const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  Group: DropdownMenuGroup,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
});

export default DropdownMenu;
