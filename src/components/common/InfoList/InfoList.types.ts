import type { ReactNode } from "react";

export interface InfoListItem {
  id: string;

  label: string;

  value: ReactNode;

  description?: string;
}

export interface InfoListProps {
  items: InfoListItem[];

  columns?: 1 | 2 | 3;

  bordered?: boolean;

  className?: string;
}
