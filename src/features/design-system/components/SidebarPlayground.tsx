import { useState } from "react";

import Sidebar from "@/components/common/Sidebar";
import { VENDOR_SIDEBAR_GROUPS } from "@/constants/dashboardNavigation";

const SidebarPlayground = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="border-b border-border p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-card-foreground">
          Sidebar Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Collapsible navigation for vendor and admin dashboards.
        </p>
      </div>

      <div className="flex min-h-[650px] bg-background">
        <Sidebar
          groups={VENDOR_SIDEBAR_GROUPS}
          activePath="/vendor/products"
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
        />

        <main className="min-w-0 flex-1 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-foreground">
            Dashboard Content
          </h3>

          <p className="mt-2 text-muted-foreground">
            Collapse and expand the sidebar to test its responsive behavior.
          </p>

          <div className="mt-6 rounded-2xl border border-dashed border-border p-8">
            <p className="text-sm text-muted-foreground">
              Page content will render here.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SidebarPlayground;
