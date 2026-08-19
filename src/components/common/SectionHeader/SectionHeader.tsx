import { cn } from "@/utils/cn";

import { sectionHeaderStyles } from "./SectionHeader.styles";
import type { SectionHeaderProps } from "./SectionHeader.types";

const SectionHeader = ({
  title,
  description,
  eyebrow,
  action,
  align = "left",
  className,
}: SectionHeaderProps) => {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        sectionHeaderStyles.root,
        isCentered && sectionHeaderStyles.center,
        className,
      )}
    >
      <div className={sectionHeaderStyles.content}>
        {eyebrow && <p className={sectionHeaderStyles.eyebrow}>{eyebrow}</p>}

        <h2 className={sectionHeaderStyles.title}>{title}</h2>

        {description && (
          <p className={sectionHeaderStyles.description}>{description}</p>
        )}
      </div>

      {action && <div className={sectionHeaderStyles.action}>{action}</div>}
    </div>
  );
};

export default SectionHeader;
