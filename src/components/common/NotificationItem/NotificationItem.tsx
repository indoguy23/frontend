import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { notificationItemStyles } from "./NotificationItem.styles";
import type {
  NotificationItemProps,
  NotificationType,
} from "./NotificationItem.types";

interface NotificationTypeIconProps {
  type: NotificationType;
}

const NotificationTypeIcon = ({ type }: NotificationTypeIconProps) => {
  if (type === "success") {
    return <CheckCircle2 aria-hidden="true" className="h-5 w-5" />;
  }

  if (type === "warning") {
    return <TriangleAlert aria-hidden="true" className="h-5 w-5" />;
  }

  if (type === "error") {
    return <AlertCircle aria-hidden="true" className="h-5 w-5" />;
  }

  return <Info aria-hidden="true" className="h-5 w-5" />;
};

const getTypeClassName = (type: NotificationType) => {
  switch (type) {
    case "success":
      return notificationItemStyles.success;

    case "warning":
      return notificationItemStyles.warning;

    case "error":
      return notificationItemStyles.error;

    case "info":
    default:
      return notificationItemStyles.info;
  }
};

const NotificationItem = ({
  notification,
  onClick,
  onMarkAsRead,
  className,
}: NotificationItemProps) => {
  const type = notification.type ?? "info";

  return (
    <article
      className={cn(
        notificationItemStyles.root,
        onClick && notificationItemStyles.clickable,
        !notification.read && notificationItemStyles.unread,
        className,
      )}
      onClick={() => onClick?.(notification)}
    >
      <div
        className={cn(
          notificationItemStyles.iconWrapper,
          getTypeClassName(type),
        )}
      >
        {notification.icon ?? <NotificationTypeIcon type={type} />}
      </div>

      <div className={notificationItemStyles.content}>
        <div className={notificationItemStyles.header}>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className={notificationItemStyles.title}>
                {notification.title}
              </h3>

              {!notification.read && (
                <span
                  aria-label="Unread"
                  className={notificationItemStyles.unreadDot}
                />
              )}
            </div>
          </div>

          {notification.timestamp && (
            <time className={notificationItemStyles.timestamp}>
              {notification.timestamp}
            </time>
          )}
        </div>

        {notification.description && (
          <p className={notificationItemStyles.description}>
            {notification.description}
          </p>
        )}

        {!notification.read && onMarkAsRead && (
          <div className={notificationItemStyles.footer}>
            <Button
              size="sm"
              variant="ghost"
              onClick={(event) => {
                event.stopPropagation();

                onMarkAsRead(notification);
              }}
            >
              Mark as read
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};

export default NotificationItem;
