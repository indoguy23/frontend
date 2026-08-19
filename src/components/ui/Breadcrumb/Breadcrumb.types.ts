import type { HTMLAttributes, ReactNode } from "react";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  current?: boolean;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
}
