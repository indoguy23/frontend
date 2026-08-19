import type { NotificationItemData } from "@/components/common/NotificationItem";

export type NotificationFilter = "all" | "unread";

export interface NotificationPanelProps {
  notifications: NotificationItemData[];

  filter?: NotificationFilter;

  onFilterChange?: (filter: NotificationFilter) => void;

  onNotificationClick?: (notification: NotificationItemData) => void;

  onMarkAsRead?: (notification: NotificationItemData) => void;

  onMarkAllAsRead?: () => void;

  emptyTitle?: string;

  emptyDescription?: string;

  className?: string;
}
