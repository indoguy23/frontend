import type { ReactNode } from "react";

export type TimelineItemStatus = "completed" | "current" | "pending" | "error";

export interface TimelineItem {
  id: string;

  title: string;

  description?: string;

  timestamp?: string;

  status?: TimelineItemStatus;

  icon?: ReactNode;

  content?: ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];

  className?: string;
}
