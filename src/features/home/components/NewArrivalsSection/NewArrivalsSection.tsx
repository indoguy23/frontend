import { ArrowRight } from "lucide-react";

import ContentRail from "@/components/common/ContentRail";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";

import { NEW_ARRIVALS } from "../../data/newArrivals.data";
import { newArrivalsSectionStyles } from "./NewArrivalsSection.styles";

const NewArrivalsSection = () => {
  return (
    <section
      className={newArrivalsSectionStyles.root}
      aria-labelledby="new-arrivals-title"
    >
      <div className={newArrivalsSectionStyles.container}>
        <div className={newArrivalsSectionStyles.header}>
          <div className={newArrivalsSectionStyles.headingGroup}>
            <p className={newArrivalsSectionStyles.eyebrow}>Just Landed</p>

            <h2
              id="new-arrivals-title"
              className={newArrivalsSectionStyles.title}
            >
              New Arrivals
            </h2>

            <p className={newArrivalsSectionStyles.description}>
              Fresh products and new finds added to MarketHub.
            </p>
          </div>

          <Button
            variant="ghost"
            className={newArrivalsSectionStyles.desktopAction}
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            View All
          </Button>
        </div>

        <div className={newArrivalsSectionStyles.products}>
          <ContentRail
            itemWidth="300px"
            gap="md"
            autoScroll
            autoScrollInterval={3000}
            showControls={false}
          >
            {NEW_ARRIVALS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ContentRail>
        </div>

        <div className={newArrivalsSectionStyles.mobileAction}>
          <Button
            variant="outline"
            className="w-full"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            View All New Arrivals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
