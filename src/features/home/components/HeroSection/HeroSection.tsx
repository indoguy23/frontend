import { ArrowRight, ShoppingBag } from "lucide-react";

import Button from "@/components/ui/Button";

import { heroSectionStyles } from "./HeroSection.styles";

const HeroSection = () => {
  return (
    <section className={heroSectionStyles.root}>
      <div className={heroSectionStyles.container}>
        <div className={heroSectionStyles.content}>
          <p className={heroSectionStyles.eyebrow}>Discover MarketHub</p>

          <h1 className={heroSectionStyles.title}>
            Find products you’ll actually love.
          </h1>

          <p className={heroSectionStyles.description}>
            Explore trending products, trusted sellers and everyday essentials
            from across the marketplace.
          </p>

          <div className={heroSectionStyles.actions}>
            <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
              Start Shopping
            </Button>

            <Button
              variant="outline"
              leftIcon={<ShoppingBag className="h-4 w-4" />}
            >
              Explore Categories
            </Button>
          </div>
        </div>

        <div className={heroSectionStyles.visual}>
          <div className={heroSectionStyles.visualCard}>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Marketplace shopping collection"
              className={heroSectionStyles.image}
            />

            <div aria-hidden="true" className={heroSectionStyles.overlay} />

            <div className={heroSectionStyles.floatingCard}>
              <p className={heroSectionStyles.floatingTitle}>Curated for you</p>

              <p className={heroSectionStyles.floatingText}>
                Explore products from trusted sellers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
