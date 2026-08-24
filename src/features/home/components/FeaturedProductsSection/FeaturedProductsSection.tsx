import { ArrowRight } from "lucide-react";

import ContentRail from "@/components/common/ContentRail";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";

import { FEATURED_PRODUCTS } from "../../data/featuredProducts.data";
import { featuredProductsSectionStyles } from "./FeaturedProductsSection.styles";

const FeaturedProductsSection = () => {
  return (
    <section
      className={featuredProductsSectionStyles.root}
      aria-labelledby="featured-products-title"
    >
      <div className={featuredProductsSectionStyles.container}>
        {/* Section Header */}
        <div className={featuredProductsSectionStyles.header}>
          <div className={featuredProductsSectionStyles.headingGroup}>
            <p className={featuredProductsSectionStyles.eyebrow}>
              Trending Now
            </p>

            <h2
              id="featured-products-title"
              className={featuredProductsSectionStyles.title}
            >
              Featured Products
            </h2>

            <p className={featuredProductsSectionStyles.description}>
              Discover products shoppers are loving across MarketHub.
            </p>
          </div>

          <Button
            className={featuredProductsSectionStyles.desktopAction}
            variant="ghost"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            View All
          </Button>
        </div>

        {/* Product Rail */}
        <div className={featuredProductsSectionStyles.products}>
          <ContentRail
            itemWidth="300px"
            gap="md"
            autoScroll
            autoScrollInterval={3000}
            showControls={false}
          >
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ContentRail>
        </div>

        {/* Mobile View All */}
        <div className={featuredProductsSectionStyles.mobileAction}>
          <Button
            variant="outline"
            className="w-full"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
