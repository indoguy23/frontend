import { useState } from "react";

import {
  BarChart3,
  Bell,
  CreditCard,
  FileText,
  Package,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Star,
  Users,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Tabs from "@/components/ui/Tabs";

const TabsPlayground = () => {
  const [dashboardTab, setDashboardTab] = useState("products");

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Tabs Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Accessible tabbed navigation for product information, dashboards and
          settings.
        </p>
      </div>

      <div className="mt-8 space-y-10">
        {/* Product tabs */}

        <div>
          <h3 className="font-semibold text-card-foreground">
            Product Information
          </h3>

          <Card className="mt-4">
            <Tabs defaultValue="description">
              <Tabs.List aria-label="Product information">
                <Tabs.Trigger value="description">
                  <FileText className="h-4 w-4" />
                  Description
                </Tabs.Trigger>

                <Tabs.Trigger value="specifications">
                  <Settings className="h-4 w-4" />
                  Specifications
                </Tabs.Trigger>

                <Tabs.Trigger value="reviews">
                  <Star className="h-4 w-4" />
                  Reviews
                </Tabs.Trigger>

                <Tabs.Trigger value="shipping">
                  <Package className="h-4 w-4" />
                  Shipping
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="description">
                <h4 className="font-semibold text-foreground">
                  Product Description
                </h4>

                <p className="mt-2 leading-7 text-muted-foreground">
                  Detailed product information will appear in this section.
                </p>
              </Tabs.Content>

              <Tabs.Content value="specifications">
                <h4 className="font-semibold text-foreground">
                  Specifications
                </h4>

                <p className="mt-2 leading-7 text-muted-foreground">
                  Technical specifications and product dimensions will appear
                  here.
                </p>
              </Tabs.Content>

              <Tabs.Content value="reviews">
                <h4 className="font-semibold text-foreground">
                  Customer Reviews
                </h4>

                <p className="mt-2 leading-7 text-muted-foreground">
                  Ratings and verified customer feedback will appear here.
                </p>
              </Tabs.Content>

              <Tabs.Content value="shipping">
                <h4 className="font-semibold text-foreground">
                  Shipping Information
                </h4>

                <p className="mt-2 leading-7 text-muted-foreground">
                  Delivery estimates, charges and return policies will appear
                  here.
                </p>
              </Tabs.Content>
            </Tabs>
          </Card>
        </div>

        {/* Controlled dashboard tabs */}

        <div>
          <h3 className="font-semibold text-card-foreground">
            Controlled Vendor Dashboard
          </h3>

          <Card className="mt-4">
            <Tabs value={dashboardTab} onValueChange={setDashboardTab}>
              <Tabs.List aria-label="Vendor dashboard">
                <Tabs.Trigger value="products">
                  <ShoppingBag className="h-4 w-4" />
                  Products
                </Tabs.Trigger>

                <Tabs.Trigger value="orders">
                  <Package className="h-4 w-4" />
                  Orders
                </Tabs.Trigger>

                <Tabs.Trigger value="customers">
                  <Users className="h-4 w-4" />
                  Customers
                </Tabs.Trigger>

                <Tabs.Trigger value="analytics">
                  <BarChart3 className="h-4 w-4" />
                  Analytics
                </Tabs.Trigger>

                <Tabs.Trigger value="disabled" disabled>
                  Disabled
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="products">
                Vendor product management content.
              </Tabs.Content>

              <Tabs.Content value="orders">
                Vendor order management content.
              </Tabs.Content>

              <Tabs.Content value="customers">
                Vendor customer information.
              </Tabs.Content>

              <Tabs.Content value="analytics">
                Vendor performance analytics.
              </Tabs.Content>
            </Tabs>

            <p className="mt-6 text-sm text-muted-foreground">
              Selected tab:{" "}
              <strong className="text-foreground">{dashboardTab}</strong>
            </p>
          </Card>
        </div>

        {/* Settings tabs */}

        <div>
          <h3 className="font-semibold text-card-foreground">Settings</h3>

          <Card className="mt-4">
            <Tabs defaultValue="general" activationMode="manual">
              <Tabs.List size="lg" aria-label="Account settings">
                <Tabs.Trigger value="general" size="lg">
                  <Settings className="h-4 w-4" />
                  General
                </Tabs.Trigger>

                <Tabs.Trigger value="security" size="lg">
                  <ShieldCheck className="h-4 w-4" />
                  Security
                </Tabs.Trigger>

                <Tabs.Trigger value="notifications" size="lg">
                  <Bell className="h-4 w-4" />
                  Notifications
                </Tabs.Trigger>

                <Tabs.Trigger value="billing" size="lg">
                  <CreditCard className="h-4 w-4" />
                  Billing
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="general">
                General account preferences.
              </Tabs.Content>

              <Tabs.Content value="security">
                Password and security settings.
              </Tabs.Content>

              <Tabs.Content value="notifications">
                Email, SMS and push notification settings.
              </Tabs.Content>

              <Tabs.Content value="billing">
                Billing methods and payment information.
              </Tabs.Content>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TabsPlayground;
