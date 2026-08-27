import { ArrowRight } from "lucide-react";

import SpotlightCarousel from "@/components/common/SpotlightCarousel";
import Button from "@/components/ui/Button";

import { SPOTLIGHT_ITEMS } from "../../data/spotlight.data";
import { spotlightSectionStyles } from "./SpotlightSection.styles";

const SpotlightSection = () => {
  return (
    <section
      className={spotlightSectionStyles.root}
      aria-labelledby="spotlight-title"
    >
      <div className={spotlightSectionStyles.container}>
        <div className={spotlightSectionStyles.header}>
          <p className={spotlightSectionStyles.eyebrow}>Curated For You</p>

          <h2 id="spotlight-title" className={spotlightSectionStyles.title}>
            The Spotlight
          </h2>

          <p className={spotlightSectionStyles.description}>
            Discover standout products and collections worth exploring.
          </p>
        </div>

        <div className={spotlightSectionStyles.carousel}>
          <SpotlightCarousel
            items={SPOTLIGHT_ITEMS}
            getItemKey={(item) => item.id}
            autoplay
            autoplayInterval={5000}
            pauseOnHover
            loop
            showArrows
            showIndicators
            showCounter={false}
            renderItem={(item) => (
              <article className={spotlightSectionStyles.card}>
                <div className={spotlightSectionStyles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    draggable={false}
                    className={spotlightSectionStyles.image}
                  />

                  <div
                    aria-hidden="true"
                    className={spotlightSectionStyles.overlay}
                  />
                </div>

                <div className={spotlightSectionStyles.content}>
                  <p className={spotlightSectionStyles.cardEyebrow}>
                    {item.eyebrow}
                  </p>

                  <h3 className={spotlightSectionStyles.cardTitle}>
                    {item.title}
                  </h3>

                  <p className={spotlightSectionStyles.cardDescription}>
                    {item.description}
                  </p>

                  <div className={spotlightSectionStyles.footer}>
                    {item.priceLabel && (
                      <p className={spotlightSectionStyles.price}>
                        {item.priceLabel}
                      </p>
                    )}

                    <Button
                      size="sm"
                      variant="outline"
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      {item.actionLabel ?? "Explore"}
                    </Button>
                  </div>
                </div>
              </article>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
