import { ArrowRight } from "lucide-react";

import HeroBanner from "@/components/common/HeroBanner";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { showToast } from "@/components/ui/Toast";

const HeroBannerPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Hero Banner
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable promotional and marketplace hero sections.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <HeroBanner
          eyebrow="New Collection"
          title="Discover products from sellers you can trust."
          description="Explore electronics, fashion, home products and more from marketplace vendors."
          image="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          imageAlt="Marketplace shopping collection"
          badge={<Badge variant="secondary">Featured</Badge>}
          primaryAction={
            <Button
              rightIcon={<ArrowRight className="h-4 w-4" />}
              onClick={() => showToast.info("Shop now requested.")}
            >
              Shop Now
            </Button>
          }
          secondaryAction={
            <Button
              variant="outline"
              onClick={() => showToast.info("Browse categories requested.")}
            >
              Browse Categories
            </Button>
          }
        />

        <HeroBanner
          align="center"
          eyebrow="MarketHub"
          title="Everything you need, from multiple sellers."
          description="A centered hero variation for campaigns, announcements and promotional sections."
          primaryAction={<Button>Explore Marketplace</Button>}
        />
      </div>
    </section>
  );
};

export default HeroBannerPlayground;
