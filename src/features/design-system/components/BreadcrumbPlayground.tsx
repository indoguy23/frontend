import { Home, Package, Settings, Store } from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";

const BreadcrumbPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Breadcrumb Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Responsive route navigation for marketplace, vendor and admin pages.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="font-semibold text-card-foreground">
            Product Navigation
          </h3>

          <div className="mt-4 rounded-2xl border border-border bg-background p-5">
            <Breadcrumb
              items={[
                {
                  label: "Home",
                  href: "/",
                  icon: <Home className="h-4 w-4" />,
                },
                {
                  label: "Products",
                  href: "/products",
                  icon: <Package className="h-4 w-4" />,
                },
                {
                  label: "Electronics",
                  href: "/products?category=electronics",
                },
                {
                  label: "Wireless Headphones",
                  current: true,
                },
              ]}
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Vendor Dashboard
          </h3>

          <div className="mt-4 rounded-2xl border border-border bg-background p-5">
            <Breadcrumb
              items={[
                {
                  label: "Vendor",
                  href: "/vendor",
                  icon: <Store className="h-4 w-4" />,
                },
                {
                  label: "Products",
                  href: "/vendor/products",
                },
                {
                  label: "Edit Product",
                  current: true,
                },
              ]}
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Collapsed Breadcrumb
          </h3>

          <div className="mt-4 rounded-2xl border border-border bg-background p-5">
            <Breadcrumb
              maxItems={4}
              items={[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Dashboard",
                  href: "/admin",
                },
                {
                  label: "Settings",
                  href: "/admin/settings",
                  icon: <Settings className="h-4 w-4" />,
                },
                {
                  label: "Marketplace",
                  href: "/admin/settings/marketplace",
                },
                {
                  label: "Payment",
                  href: "/admin/settings/marketplace/payment",
                },
                {
                  label: "Gateway Configuration",
                  current: true,
                },
              ]}
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Custom Separator
          </h3>

          <div className="mt-4 rounded-2xl border border-border bg-background p-5">
            <Breadcrumb
              separator={<span className="text-xs">/</span>}
              items={[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Account",
                  href: "/account",
                },
                {
                  label: "Profile",
                  current: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbPlayground;
