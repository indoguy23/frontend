import type { ReactNode } from "react";

export type NotificationType = "info" | "success" | "warning" | "error";

export interface NotificationItemData {
  id: string;

  title: string;

  description?: string;

  timestamp?: string;

  read?: boolean;

  type?: NotificationType;

  icon?: ReactNode;
}

export interface NotificationItemProps {
  notification: NotificationItemData;

  onClick?: (notification: NotificationItemData) => void;

  onMarkAsRead?: (notification: NotificationItemData) => void;

  className?: string;
}
