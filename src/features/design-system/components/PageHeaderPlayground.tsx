import { Download, Plus } from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import Badge from "@/components/ui/Badge";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

const PageHeaderPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Page Header
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable page-level heading with breadcrumb, description, metadata and
          actions.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-background p-5 sm:p-6">
        <PageHeader
          breadcrumb={
            <Breadcrumb
              items={[
                {
                  label: "Dashboard",
                  href: "/dashboard",
                },
                {
                  label: "Products",
                },
              ]}
            />
          }
          title="Products"
          description="Manage marketplace products, inventory, pricing and availability."
          meta={
            <>
              <Badge variant="secondary">124 Products</Badge>

              <Badge variant="success">98 Active</Badge>
            </>
          }
          actions={
            <>
              <Button
                variant="outline"
                leftIcon={<Download className="h-4 w-4" />}
              >
                Export
              </Button>

              <Button leftIcon={<Plus className="h-4 w-4" />}>
                Add Product
              </Button>
            </>
          }
        />
      </div>
    </section>
  );
};

export default PageHeaderPlayground;
