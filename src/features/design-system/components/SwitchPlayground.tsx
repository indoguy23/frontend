import { useState } from "react";

import Switch from "@/components/ui/form/Switch";

const SwitchPlayground = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const [storeOpen, setStoreOpen] = useState(false);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Switch Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Accessible on/off controls for settings that take effect immediately.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-border bg-background p-5">
          <Switch
            label="Push Notifications"
            description="Receive alerts about orders, messages and account activity."
            checked={notificationsEnabled}
            onCheckedChange={setNotificationsEnabled}
          />

          <Switch
            label="Email Promotions"
            description="Receive promotional emails and marketplace offers."
            defaultChecked
          />

          <Switch
            label="SMS Notifications"
            description="Receive account updates by SMS."
          />
        </div>

        <div className="space-y-6 rounded-2xl border border-border bg-background p-5">
          <Switch
            label="Vendor Store Status"
            description={
              storeOpen
                ? "Your store is currently visible to customers."
                : "Your store is currently closed."
            }
            checked={storeOpen}
            onCheckedChange={setStoreOpen}
          />

          <Switch
            label="Unavailable Setting"
            description="This setting cannot currently be changed."
            disabled
          />

          <Switch
            label="Invalid Setting"
            description="You must review this setting before continuing."
            invalid
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-primary-subtle p-4 text-sm text-primary-subtle-foreground">
        Push notifications:{" "}
        <strong>{notificationsEnabled ? "Enabled" : "Disabled"}</strong>
        {" · "}
        Store: <strong>{storeOpen ? "Open" : "Closed"}</strong>
      </div>
    </section>
  );
};

export default SwitchPlayground;
