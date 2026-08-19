import { cn } from "@/utils/cn";

import { pageHeaderStyles } from "./PageHeader.styles";
import type { PageHeaderProps } from "./PageHeader.types";

const PageHeader = ({
  title,
  description,
  breadcrumb,
  actions,
  meta,
  className,
}: PageHeaderProps) => {
  return (
    <header className={cn(pageHeaderStyles.root, className)}>
      {breadcrumb && (
        <div className={pageHeaderStyles.breadcrumb}>{breadcrumb}</div>
      )}

      <div className={pageHeaderStyles.contentRow}>
        <div className={pageHeaderStyles.content}>
          <h1 className={pageHeaderStyles.title}>{title}</h1>

          {description && (
            <p className={pageHeaderStyles.description}>{description}</p>
          )}

          {meta && <div className={pageHeaderStyles.meta}>{meta}</div>}
        </div>

        {actions && <div className={pageHeaderStyles.actions}>{actions}</div>}
      </div>
    </header>
  );
};

export default PageHeader;
