import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

import NotificationItem from "@/components/common/NotificationItem";
import { cn } from "@/utils/cn";

import { notificationPanelStyles } from "./NotificationPanel.styles";
import type { NotificationPanelProps } from "./NotificationPanel.types";

const NotificationPanel = ({
  notifications,
  filter = "all",
  onFilterChange,
  onNotificationClick,
  onMarkAsRead,
  onMarkAllAsRead,
  emptyTitle = "No notifications",
  emptyDescription = "You're all caught up. New updates will appear here.",
  className,
}: NotificationPanelProps) => {
  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  const visibleNotifications =
    filter === "unread"
      ? notifications.filter((notification) => !notification.read)
      : notifications;

  return (
    <section className={cn(notificationPanelStyles.root, className)}>
      <div className={notificationPanelStyles.header}>
        <div className={notificationPanelStyles.titleWrapper}>
          <h2 className={notificationPanelStyles.title}>Notifications</h2>

          <p className={notificationPanelStyles.count}>
            {unreadCount > 0 ? `${unreadCount} unread` : "You're all caught up"}
          </p>
        </div>

        {onMarkAllAsRead && unreadCount > 0 && (
          <div className={notificationPanelStyles.actions}>
            <Button size="sm" variant="ghost" onClick={onMarkAllAsRead}>
              Mark all as read
            </Button>
          </div>
        )}
      </div>

      {onFilterChange && (
        <div className={notificationPanelStyles.filters}>
          <button
            type="button"
            className={cn(
              notificationPanelStyles.filterButton,
              filter === "all" && notificationPanelStyles.activeFilter,
            )}
            onClick={() => onFilterChange("all")}
          >
            All
          </button>

          <button
            type="button"
            className={cn(
              notificationPanelStyles.filterButton,
              filter === "unread" && notificationPanelStyles.activeFilter,
            )}
            onClick={() => onFilterChange("unread")}
          >
            Unread
            {unreadCount > 0 && <span className="ml-1">({unreadCount})</span>}
          </button>
        </div>
      )}

      {visibleNotifications.length > 0 ? (
        <div className={notificationPanelStyles.list}>
          {visibleNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onClick={onNotificationClick}
              onMarkAsRead={onMarkAsRead}
            />
          ))}
        </div>
      ) : (
        <div className={notificationPanelStyles.empty}>
          <EmptyState
            title={emptyTitle}
            description={
              filter === "unread"
                ? "You don't have any unread notifications."
                : emptyDescription
            }
          />
        </div>
      )}
    </section>
  );
};

export default NotificationPanel;
