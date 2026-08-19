import Skeleton from "@/components/ui/Skeleton";

interface DataTableSkeletonProps {
  columnCount: number;
  rowCount?: number;
}

const DataTableSkeleton = ({
  columnCount,
  rowCount = 5,
}: DataTableSkeletonProps) => {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        <tr
          key={`skeleton-row-${rowIndex}`}
          aria-hidden="true"
          className="border-b border-border last:border-b-0"
        >
          {Array.from({
            length: columnCount,
          }).map((_, columnIndex) => (
            <td
              key={`skeleton-cell-${rowIndex}-${columnIndex}`}
              className="px-4 py-4"
            >
              <Skeleton className="h-5 w-full min-w-20" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default DataTableSkeleton;
