import { ArrowRight } from "lucide-react";

import PromoCard from "@/components/common/PromoCard";
import Button from "@/components/ui/Button";
import { showToast } from "@/components/ui/Toast";

import { PROMO_CARD_DATA } from "../data/promoCard.data";

const PromoCardPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Promo Card
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable promotional cards for deals, campaigns and marketplace
          offers.
        </p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {PROMO_CARD_DATA.map((promo) => (
          <PromoCard
            key={promo.id}
            promo={promo}
            action={
              <Button
                size="sm"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                onClick={() => showToast.info(`Opening ${promo.title}.`)}
              >
                Shop Deal
              </Button>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default PromoCardPlayground;
