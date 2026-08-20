import { ArrowRight } from "lucide-react";

import SpotlightCarousel from "@/components/common/SpotlightCarousel";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { showToast } from "@/components/ui/Toast";

import { SPOTLIGHT_CAROUSEL_DATA } from "../data/spotlightCarousel.data";

const SpotlightCarouselPlayground = () => {
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Featured Products
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-card-foreground sm:text-3xl">
          Spotlight Carousel
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          A reusable animated carousel with depth, spotlight focus, autoplay,
          keyboard navigation and touch support.
        </p>
      </div>

      <div className="mt-8">
        <SpotlightCarousel
          items={SPOTLIGHT_CAROUSEL_DATA}
          getItemKey={(item) => item.id}
          autoplay
          autoplayInterval={4500}
          pauseOnHover
          loop
          showArrows
          showIndicators
          showCounter
          renderItem={(item) => (
            <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent"
                />

                {item.badge && (
                  <div className="absolute left-4 top-4">
                    <Badge variant="secondary">{item.badge}</Badge>
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  {item.price && (
                    <span className="shrink-0 font-semibold text-foreground">
                      {item.price}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex justify-end">
                  <Button
                    size="sm"
                    variant="outline"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                    onClick={() => showToast.info(`Opening ${item.title}.`)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default SpotlightCarouselPlayground;
