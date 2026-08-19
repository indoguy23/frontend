import { forwardRef } from "react";

import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/utils/cn";

import { breadcrumbStyles } from "./Breadcrumb.styles";
import type { BreadcrumbItem, BreadcrumbProps } from "./Breadcrumb.types";

const getVisibleItems = (
  items: BreadcrumbItem[],
  maxItems?: number,
): Array<BreadcrumbItem | "ellipsis"> => {
  if (!maxItems || maxItems < 3 || items.length <= maxItems) {
    return items;
  }

  const remainingSlots = maxItems - 2;
  const trailingItems = items.slice(-remainingSlots);

  return [items[0], "ellipsis", ...trailingItems];
};

const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      items,
      separator = <ChevronRight className="h-4 w-4" />,
      maxItems,
      className,
      ...props
    },
    ref,
  ) => {
    const visibleItems = getVisibleItems(items, maxItems);

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn(breadcrumbStyles.nav, className)}
        {...props}
      >
        <ol className={breadcrumbStyles.list}>
          {visibleItems.map((item, index) => {
            const isLast = index === visibleItems.length - 1;

            if (item === "ellipsis") {
              return (
                <li key={`ellipsis-${index}`} className={breadcrumbStyles.item}>
                  <span
                    aria-label="Collapsed breadcrumb items"
                    className={breadcrumbStyles.ellipsis}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </span>

                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className={breadcrumbStyles.separator}
                    >
                      {separator}
                    </span>
                  )}
                </li>
              );
            }

            const isCurrent = item.current || isLast;

            return (
              <li
                key={`${String(item.label)}-${index}`}
                className={breadcrumbStyles.item}
              >
                {item.href && !isCurrent ? (
                  <Link to={item.href} className={breadcrumbStyles.link}>
                    {item.icon && <span aria-hidden="true">{item.icon}</span>}

                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span
                    aria-current={isCurrent ? "page" : undefined}
                    className={breadcrumbStyles.current}
                  >
                    {item.icon && <span aria-hidden="true">{item.icon}</span>}

                    <span>{item.label}</span>
                  </span>
                )}

                {!isLast && (
                  <span
                    aria-hidden="true"
                    className={breadcrumbStyles.separator}
                  >
                    {separator}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  },
);

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
