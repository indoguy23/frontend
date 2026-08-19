import { useState } from "react";

import NotificationItem from "@/components/common/NotificationItem";
import type { NotificationItemData } from "@/components/common/NotificationItem";
import { showToast } from "@/components/ui/Toast";

import { NOTIFICATION_ITEM_DATA } from "../data/notificationItem.data";

const NotificationItemPlayground = () => {
  const [notifications, setNotifications] = useState(NOTIFICATION_ITEM_DATA);

  const handleMarkAsRead = (notification: NotificationItemData) => {
    setNotifications((current) =>
      current.map((item) =>
        item.id === notification.id
          ? {
              ...item,
              read: true,
            }
          : item,
      ),
    );

    showToast.success("Notification marked as read.");
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Notification Item
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable marketplace notifications for orders, inventory, payments and
          account activity.
        </p>
      </div>

      <div className="mt-8 max-w-3xl space-y-4">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onClick={(selectedNotification) =>
              showToast.info(`Opening ${selectedNotification.title}.`)
            }
            onMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </section>
  );
};

export default NotificationItemPlayground;
