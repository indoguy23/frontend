import { ArrowRight } from "lucide-react";

import PromoCard from "@/components/common/PromoCard";
import Button from "@/components/ui/Button";

import { HOME_DEALS } from "../../data/deals.data";
import { dealsSectionStyles } from "./DealsSection.styles";

const DealsSection = () => {
  return (
    <section className={dealsSectionStyles.root} aria-labelledby="deals-title">
      <div className={dealsSectionStyles.container}>
        <div className={dealsSectionStyles.header}>
          <p className={dealsSectionStyles.eyebrow}>Limited Offers</p>

          <h2 id="deals-title" className={dealsSectionStyles.title}>
            Today&apos;s Deals
          </h2>

          <p className={dealsSectionStyles.description}>
            Discover limited-time offers across popular marketplace categories.
          </p>
        </div>

        <div className={dealsSectionStyles.grid}>
          {HOME_DEALS.map((deal) => (
            <PromoCard
              key={deal.id}
              promo={deal}
              action={
                <Button
                  size="sm"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Shop Deal
                </Button>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
