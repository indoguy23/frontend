export const PAGINATION_ELLIPSIS = "ellipsis" as const;

export type PaginationItem = number | typeof PAGINATION_ELLIPSIS;

interface GetPaginationItemsParams {
  currentPage: number;
  totalPages: number;
  siblingCount: number;
}

const createRange = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

export const getPaginationItems = ({
  currentPage,
  totalPages,
  siblingCount,
}: GetPaginationItemsParams): PaginationItem[] => {
  if (totalPages <= 0) {
    return [];
  }

  const totalVisibleItems = siblingCount * 2 + 5;

  if (totalPages <= totalVisibleItems) {
    return createRange(1, totalPages);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);

  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSibling > 2;

  const showRightEllipsis = rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + siblingCount * 2;

    return [...createRange(1, leftItemCount), PAGINATION_ELLIPSIS, totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + siblingCount * 2;

    return [
      1,
      PAGINATION_ELLIPSIS,
      ...createRange(totalPages - rightItemCount + 1, totalPages),
    ];
  }

  return [
    1,
    PAGINATION_ELLIPSIS,
    ...createRange(leftSibling, rightSibling),
    PAGINATION_ELLIPSIS,
    totalPages,
  ];
};
