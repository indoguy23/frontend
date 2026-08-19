import { ArrowRight } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const SectionHeaderPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Section Header
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable headings for marketplace and dashboard sections.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <Card>
          <SectionHeader
            eyebrow="Featured"
            title="Featured Products"
            description="Explore popular products selected from marketplace sellers."
            action={
              <Button
                variant="outline"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                View All
              </Button>
            }
          />
        </Card>

        <Card>
          <SectionHeader
            title="Shop by Category"
            description="Browse products by the categories that interest you."
            align="center"
          />
        </Card>

        <Card>
          <SectionHeader
            title="Top Sellers"
            action={<Button variant="ghost">See Sellers</Button>}
          />
        </Card>
      </div>
    </section>
  );
};

export default SectionHeaderPlayground;
