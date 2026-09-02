import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/utils/cn";

import { productsPaginationStyles } from "./ProductsPagination.styles";

interface ProductsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const ProductsPagination = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: ProductsPaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  const startItem = (currentPage - 1) * pageSize + 1;

  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <nav
      className={productsPaginationStyles.root}
      aria-label="Products pagination"
    >
      <p className={productsPaginationStyles.info}>
        Showing {startItem}–{endItem} of {totalItems} products
      </p>

      <div className={productsPaginationStyles.controls}>
        <button
          type="button"
          aria-label="Previous page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={cn(
            productsPaginationStyles.pageButton,
            currentPage === 1 && productsPaginationStyles.disabled,
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              type="button"
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              onClick={() => onPageChange(page)}
              className={cn(
                productsPaginationStyles.pageButton,
                currentPage === page && productsPaginationStyles.activePage,
              )}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          aria-label="Next page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={cn(
            productsPaginationStyles.pageButton,
            currentPage === totalPages && productsPaginationStyles.disabled,
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
};

export default ProductsPagination;
