import { cn } from "@/utils/cn";

import { infoListStyles } from "./InfoList.styles";
import type { InfoListProps } from "./InfoList.types";

const InfoList = ({
  items,
  columns = 2,
  bordered = false,
  className,
}: InfoListProps) => {
  const columnsClass = {
    1: infoListStyles.columns1,
    2: infoListStyles.columns2,
    3: infoListStyles.columns3,
  }[columns];

  return (
    <dl
      className={cn(
        infoListStyles.root,
        infoListStyles.grid,
        columnsClass,
        bordered && infoListStyles.bordered,
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            infoListStyles.item,
            bordered && infoListStyles.borderedItem,
          )}
        >
          <dt className={infoListStyles.label}>{item.label}</dt>

          <dd className={infoListStyles.value}>{item.value}</dd>

          {item.description && (
            <p className={infoListStyles.description}>{item.description}</p>
          )}
        </div>
      ))}
    </dl>
  );
};

export default InfoList;
