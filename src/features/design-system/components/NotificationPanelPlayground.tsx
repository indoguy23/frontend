import { useState } from "react";

import NotificationPanel from "@/components/common/NotificationPanel";
import type { NotificationFilter } from "@/components/common/NotificationPanel";
import type { NotificationItemData } from "@/components/common/NotificationItem";
import { showToast } from "@/components/ui/Toast";

import { NOTIFICATION_ITEM_DATA } from "../data/notificationItem.data";

const NotificationPanelPlayground = () => {
  const [notifications, setNotifications] = useState(NOTIFICATION_ITEM_DATA);

  const [filter, setFilter] = useState<NotificationFilter>("all");

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
  };

  const handleMarkAllAsRead = () => {
    setNotifications((current) =>
      current.map((item) => ({
        ...item,
        read: true,
      })),
    );

    showToast.success("All notifications marked as read.");
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Notification Panel
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable notification collection with filters and read-state controls.
        </p>
      </div>

      <div className="mt-8 max-w-3xl">
        <NotificationPanel
          notifications={notifications}
          filter={filter}
          onFilterChange={setFilter}
          onMarkAsRead={handleMarkAsRead}
          onMarkAllAsRead={handleMarkAllAsRead}
          onNotificationClick={(notification) =>
            showToast.info(`Opening ${notification.title}.`)
          }
        />
      </div>
    </section>
  );
};

export default NotificationPanelPlayground;
