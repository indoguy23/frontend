import type { ReactNode } from "react";

export interface PageHeaderProps {
  title: string;

  description?: string;

  breadcrumb?: ReactNode;

  actions?: ReactNode;

  meta?: ReactNode;

  className?: string;
}
