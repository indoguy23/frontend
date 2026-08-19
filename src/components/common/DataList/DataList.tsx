import { cn } from "@/utils/cn";

import { dataListStyles } from "./DataList.styles";
import type { DataListProps } from "./DataList.types";

const DataList = ({
  items,
  emptyState,
  divided = true,
  compact = false,
  className,
}: DataListProps) => {
  if (items.length === 0) {
    return (
      <div className={cn(dataListStyles.root, className)}>
        <div className={dataListStyles.empty}>
          {emptyState ?? (
            <p className="text-center text-sm text-muted-foreground">
              No items available.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(dataListStyles.root, className)}>
      {items.map((item) => {
        const isClickable = Boolean(item.onClick) && !item.disabled;

        return (
          <div
            key={item.id}
            role={isClickable ? "button" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            className={cn(
              dataListStyles.item,
              compact && dataListStyles.compactItem,
              divided && dataListStyles.dividedItem,
              isClickable && dataListStyles.clickable,
              item.disabled && dataListStyles.disabled,
            )}
            onClick={isClickable ? item.onClick : undefined}
            onKeyDown={
              isClickable
                ? (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      item.onClick?.();
                    }
                  }
                : undefined
            }
          >
            {item.leading && (
              <div className={dataListStyles.leading}>{item.leading}</div>
            )}

            <div className={dataListStyles.content}>
              <div className={dataListStyles.titleRow}>
                <p className={dataListStyles.title}>{item.title}</p>

                {item.meta && (
                  <div className={dataListStyles.meta}>{item.meta}</div>
                )}
              </div>

              {item.description && (
                <p className={dataListStyles.description}>{item.description}</p>
              )}
            </div>

            {item.trailing && (
              <div className={dataListStyles.trailing}>{item.trailing}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DataList;
