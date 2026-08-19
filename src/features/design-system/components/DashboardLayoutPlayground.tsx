import { Bell, Plus } from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { VENDOR_SIDEBAR_GROUPS } from "@/constants/dashboardNavigation";

const DashboardLayoutPlayground = () => {
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="border-b border-border p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-card-foreground">
          Dashboard Layout
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable shell for vendor and admin dashboard pages.
        </p>
      </div>

      <div className="h-[750px] overflow-hidden">
        <DashboardLayout
          sidebarGroups={VENDOR_SIDEBAR_GROUPS}
          activePath="/vendor/products"
          title="Products"
          description="Manage your marketplace products."
          headerActions={
            <>
              <Button size="icon" variant="ghost" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </Button>

              <Button size="sm" leftIcon={<Plus className="h-4 w-4" />}>
                Add Product
              </Button>
            </>
          }
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Card>
              <h3 className="font-semibold text-foreground">Total Products</h3>

              <p className="mt-3 text-3xl font-bold text-foreground">124</p>
            </Card>

            <Card>
              <h3 className="font-semibold text-foreground">Active Products</h3>

              <p className="mt-3 text-3xl font-bold text-foreground">98</p>
            </Card>

            <Card>
              <h3 className="font-semibold text-foreground">Low Stock</h3>

              <p className="mt-3 text-3xl font-bold text-foreground">12</p>
            </Card>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-border p-10">
            <p className="text-sm text-muted-foreground">
              The actual page content will render here.
            </p>
          </div>
        </DashboardLayout>
      </div>
    </section>
  );
};

export default DashboardLayoutPlayground;
