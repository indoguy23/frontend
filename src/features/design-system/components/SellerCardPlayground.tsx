import SellerCard from "@/components/common/SellerCard";
import { showToast } from "@/components/ui/Toast";

import { SELLER_CARD_DATA } from "../data/sellerCard.data";

const SellerCardPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Seller Card
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable marketplace seller and vendor presentation cards.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SELLER_CARD_DATA.map((seller) => (
          <SellerCard
            key={seller.id}
            seller={seller}
            onViewStore={(selectedSeller) =>
              showToast.info(`Opening ${selectedSeller.name}.`)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default SellerCardPlayground;
