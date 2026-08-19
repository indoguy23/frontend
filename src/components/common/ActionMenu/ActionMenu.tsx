import { MoreHorizontal } from "lucide-react";

import Button from "@/components/ui/Button";
import DropdownMenu from "@/components/ui/DropdownMenu";
import { cn } from "@/utils/cn";

import { actionMenuStyles } from "./ActionMenu.styles";
import type { ActionMenuProps } from "./ActionMenu.types";

const ActionMenu = ({
  items,
  label = "Open actions",
  className,
}: ActionMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          aria-label={label}
          className={cn(actionMenuStyles.trigger, className)}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end">
        {items.map((item) => (
          <div key={item.id}>
            {item.separatorBefore && <DropdownMenu.Separator />}

            <DropdownMenu.Item
              disabled={item.disabled}
              destructive={item.variant === "danger"}
              onSelect={() => {
                item.onClick();
              }}
            >
              <span
                className={cn(actionMenuStyles.item, actionMenuStyles.icon)}
              >
                {item.icon}

                <span>{item.label}</span>
              </span>
            </DropdownMenu.Item>
          </div>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

export default ActionMenu;
