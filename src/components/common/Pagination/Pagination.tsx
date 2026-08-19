import { forwardRef, useMemo } from "react";

import {
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

import { cn } from "@/utils/cn";

import { paginationStyles } from "./Pagination.styles";
import type { PaginationProps } from "./Pagination.types";
import { getPaginationItems, PAGINATION_ELLIPSIS } from "./pagination.utils";

const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      showFirstLast = true,
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const safeCurrentPage = Math.min(
      Math.max(currentPage, 1),
      Math.max(totalPages, 1),
    );

    const paginationItems = useMemo(
      () =>
        getPaginationItems({
          currentPage: safeCurrentPage,
          totalPages,
          siblingCount,
        }),
      [safeCurrentPage, totalPages, siblingCount],
    );

    if (totalPages <= 1) {
      return null;
    }

    const isFirstPage = safeCurrentPage === 1;

    const isLastPage = safeCurrentPage === totalPages;

    const handlePageChange = (page: number) => {
      if (
        disabled ||
        page < 1 ||
        page > totalPages ||
        page === safeCurrentPage
      ) {
        return;
      }

      onPageChange(page);
    };

    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        className={cn(paginationStyles.nav, className)}
        {...props}
      >
        {/* Previous */}

        <button
          type="button"
          disabled={disabled || isFirstPage}
          aria-label="Go to previous page"
          className={paginationStyles.navigationButton}
          onClick={() => handlePageChange(safeCurrentPage - 1)}
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />

          <span className="hidden md:inline">Previous</span>
        </button>

        {/* Mobile */}

        <span className={paginationStyles.mobileInfo}>
          Page <strong className="text-foreground">{safeCurrentPage}</strong> of{" "}
          <strong className="text-foreground">{totalPages}</strong>
        </span>

        {/* Desktop */}

        <div className={paginationStyles.list}>
          {showFirstLast && (
            <button
              type="button"
              disabled={disabled || isFirstPage}
              aria-label="Go to first page"
              title="First page"
              className={paginationStyles.button}
              onClick={() => handlePageChange(1)}
            >
              <ChevronsLeft aria-hidden="true" className="h-4 w-4" />
            </button>
          )}

          {paginationItems.map((item, index) => {
            if (item === PAGINATION_ELLIPSIS) {
              return (
                <span
                  key={`ellipsis-${index}`}
                  aria-hidden="true"
                  className={paginationStyles.ellipsis}
                >
                  <MoreHorizontal className="h-4 w-4" />
                </span>
              );
            }

            const isActive = item === safeCurrentPage;

            return (
              <button
                key={item}
                type="button"
                disabled={disabled}
                aria-label={`Go to page ${item}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  paginationStyles.button,
                  isActive && paginationStyles.activeButton,
                )}
                onClick={() => handlePageChange(item)}
              >
                {item}
              </button>
            );
          })}

          {showFirstLast && (
            <button
              type="button"
              disabled={disabled || isLastPage}
              aria-label="Go to last page"
              title="Last page"
              className={paginationStyles.button}
              onClick={() => handlePageChange(totalPages)}
            >
              <ChevronsRight aria-hidden="true" className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Next */}

        <button
          type="button"
          disabled={disabled || isLastPage}
          aria-label="Go to next page"
          className={paginationStyles.navigationButton}
          onClick={() => handlePageChange(safeCurrentPage + 1)}
        >
          <span className="hidden md:inline">Next</span>

          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </nav>
    );
  },
);

Pagination.displayName = "Pagination";

export default Pagination;
